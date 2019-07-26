涉及到的代码（Tp3.2）
----

- 通过轮询token成功后的，第一次请求，获取用户id，用户身份，用户token
```
    public function loginBytoken()
    {

        //请求用户信息 第一步

        if (IS_POST) {

            //下方就是控制一定要传入token字段
            $post = json_decode(file_get_contents('php://input', 'r'), true);
            $need_col = array("token" => "token");
            foreach ($post as $key => $value) {
                if (!in_array($key, array_keys($need_col))) unset($post[$key]);
                $post[$key] = trim($post[$key]);
                if ($post[$key] == "") unset($post[$key]);
            }
            foreach ($need_col as $key => $value) {
                if (!in_array($key, array_keys($post))) $this->ajaxReturn(array("status" => 208, "message" => "请确保【" . $value . "】已选择或填写，请勿留空！"), "JSON");
            }

            
            //一定要打开事务
            $Model = M(); // 实例化一个空对象
            $Model->startTrans(); // 开启事务


            //1.先查询一下这个token的状态，是不是已经被使用过status==1？使用过就返回错误，如果没有使用过，就用事务处理status=1，并且要增加修改时间和ip，然后获取这条token的用户权限，并且在对应的权限会员表中赋值token和ip
            //2.务必返回token字段，身份字段，用户id，请看以下例子，格式一定要这样，不要修改格式
            //3.再次声明：token和id不能改，shenfen这个字段可以重命名以下！result也不能改！！！
            $result = $Model->field("token,shenfen,id")->table(C('DB_PREFIX') . 'user')->where(array("token" => $post["token"]))->find();
            $data["result"] = $result;
            
       
            $this->ajaxReturn($data, "JSON");
        }
        $this->ajaxReturn(array("status" => 403, "message" => "访问接口出错！"), "JSON");

    }
```

- 第1次请求成功后会立即进行第2次请求，获取权限
```
public function Getinfo()
    {

        //这里首先需要获取请求头，我们取出ACCESS-TOKEN的值
        $headers = array();
        foreach ($_SERVER as $key => $value) {
            if ('HTTP_' == substr($key, 0, 5)) {
                $headers[str_replace('_', '-', substr($key, 5))] = $value;
            }
        }
        $token = $headers["ACCESS-TOKEN"];
        if (!$token) {
            $this->ajaxReturn(array("status" => 403, "message" => "程序错误！"), "JSON");
        }

        //先开启事务
        $Model = M(); // 实例化一个空对象
        $Model->startTrans(); // 开启事务
        
        //如果没有传递进来的话，那是肯定不行滴
        //还是需要验证token的有效性，就是上一段代码要求有个token的修改时间，当前时间time()-30<=修改时间并且ip和表里的ip相同可以继续执行，否则就是网络延迟或者ip不一致，需要重新扫码，也就是说上一次请求就30秒的执行时间（一般来说也就1秒），然后这次执行完后，再次更新token的修改时间为time()-30，这样就可以直接定义这个token完全不能再次被修改了；
        //然后一定要用事务去处理，在代码的最后返回正确信息一定不要忘记commit，在返回错误的地方一定要记得rollback





        $user = D("user")->where(array("token" => $token,"status"=>0))->find();
        if (!$user) {
            $this->ajaxReturn(array("status" => 403, "message" => "程序错误3！"), "JSON");
        }
        //这里要获取一下这个人是不是可用，是否被禁用或者删除

        $permissions=array();
        
        

        //循环开始
        $role["id"] = "admin";
        $single["permissionId"] = "user";
        $single["roleId"] = "admin";
        $permissions[] = $single;
        //循环结束
        
        //权限是多条的，所以上方查询出来以后，肯定是要foreach循环的，起决定性因素的还是permissionId，建议这三者相同就行，这里的权限只针对页面，暂时不涉及页面内的增删改查

        


        $role["permissions"] = $permissions;

        $user["role"] = $role;
        $user["avatar"] = "http://lixiang.99kk88.cn/api/lx.png";//返回全路径的默认头条即可
        $user["roleId"] = "admin";



        $data["result"] = $user;
        $data["message"] = "";
        $data["status"] = 200;
        $data["timestamp"] = time();

        //一定要按这个格式和字段去传，否则前端报错

        //在这里一定要commit！！
        $this->ajaxReturn($data, "JSON");

    }
```

