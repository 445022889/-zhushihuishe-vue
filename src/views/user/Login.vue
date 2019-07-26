<template>
    <div class="main">
        <a-form
                class="user-layout-login"
                ref="formLogin"
                :autoFormCreate="(form)=>{this.form = form}"
                id="formLogin"
        >
            <a-tabs
                    :activeKey="customActiveKey"
                    :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }"
                    @change="handleTabClick"
            >
                <a-tab-pane key="tab1" tab="请输入账号和密码登录">
                    <a-form-item
                            fieldDecoratorId="username"
                            :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: this.handleUsernameOrEmail }], validateTrigger: 'change'}"
                    >
                        <a-input size="large" type="text" placeholder="帐户名 / Username">
                            <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                        </a-input>
                    </a-form-item>

                    <a-form-item
                            fieldDecoratorId="password"
                            :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}"
                    >
                        <a-input size="large" type="password" autocomplete="false" placeholder="密码 / Password">
                            <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                        </a-input>
                    </a-form-item>
                </a-tab-pane>
                <!--        <a-tab-pane key="tab2" tab="手机号登陆">
                          <a-form-item
                            fieldDecoratorId="mobile"
                            :fieldDecoratorOptions="{rules: [{ required: true, pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }], validateTrigger: 'change'}"
                          >
                            <a-input size="large" type="text" placeholder="手机号">
                              <a-icon slot="prefix" type="mobile" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                            </a-input>
                          </a-form-item>

                          <a-row :gutter="16">
                            <a-col class="gutter-row" :span="16">
                              <a-form-item
                                fieldDecoratorId="captcha"
                                :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}"
                              >
                                <a-input size="large" type="text" placeholder="验证码">
                                  <a-icon slot="prefix" type="mail" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                </a-input>
                              </a-form-item>
                            </a-col>
                            <a-col class="gutter-row" :span="8">
                              <a-button
                                class="getCaptcha"
                                tabindex="-1"
                                :disabled="state.smsSendBtn"
                                @click.stop.prevent="getCaptcha"
                                v-text="!state.smsSendBtn && '获取验证码' || (state.time+' s')"
                              ></a-button>
                            </a-col>
                          </a-row>
                        </a-tab-pane>-->
            </a-tabs>


            <a-form-item style="margin-top:24px">
                <a-button
                        size="large"
                        type="primary"
                        htmlType="submit"
                        class="login-button"
                        :loading="loginBtn"
                        @click.stop.prevent="handleSubmit"
                        :disabled="loginBtn"
                >确定
                </a-button>
            </a-form-item>
            <div class="user-login-other">
                <a @click="Fnpass">找回密码</a>
                <router-link class="register" :to="{ name: 'register' }">注册账户</router-link>
            </div>

            <!--     <div class="user-login-other">
                   <router-link class="forget" :to="{ name: 'Forget' }">忘记密码</router-link>
                  </div>-->
        </a-form>

        <two-step-captcha
                v-if="requiredTwoStepCaptcha"
                :visible="stepCaptchaVisible"
                @success="stepCaptchaSuccess"
                @cancel="stepCaptchaCancel"
        ></two-step-captcha>
        <a-modal
                title="找回密码"
                v-model="visible_password"
                :footer="null"
                :width="600"
        >
            <!--         <a-button
                             v-if="current===1"
                             block    type="primary"
                             @click="prev"
                     >
                         返回修改
                     </a-button>
                     <a-divider dashed      v-if="current===1"
                     />-->
            <a-steps :current="current">
                <a-step v-for="item in steps" :key="item.title" :title="item.title"/>
            </a-steps>
            <div class="steps-content">{{steps[current].content}}
                <a-form>

                    <a-form-item v-if="current===0"

                                 hasFeedback
                    >
                        <a-input placeholder='请输入您的手机号码' v-model="reset.mobile"/>
                    </a-form-item>

                    <a-form-item v-if="current===1"

                                 hasFeedback
                    >
                        <a-input placeholder='请输入您接收到的验证码' v-model="reset.code"/>
                    </a-form-item>
                    <a-form-item v-if="current===2"

                                 hasFeedback
                    >
                        <a-input placeholder='请输入新登录密码' v-model="reset.password"/>
                    </a-form-item>


                </a-form>


            </div>


            <div class="steps-action">


                <a-divider dashed/>


                <a-button block
                          v-if="current < steps.length - 1"
                          type="primary" @click="next"
                >
                    下一步
                </a-button>

                <a-button
                        block
                        v-if="current == steps.length - 1"
                        type="primary"
                        @click="done"
                >
                    确认修改
                </a-button>
            </div>
        </a-modal>

    </div>
</template>

<script>
    import md5 from 'md5'
    import api from '@/api'
    import TwoStepCaptcha from '@/components/tools/TwoStepCaptcha'
    import {mapActions} from 'vuex'
    import {timeFix} from '@/utils/util'

    export default {
        components: {
            TwoStepCaptcha
        },
        data() {
            return {
                current: 0,
                step01_url: "/Init/index/SendSms_resetpassword",
                step02_url: "/Init/index/SendSms_resetcode",
                step03_url: "/Init/index/SendSms_resetdone",
                steps: [{
                    title: '确认信息',
                    content: '请输入您的手机号',
                }, {
                    title: '验证信息',
                    content: '请输入接收的验证码',
                }, {
                    title: '修改密码',
                    content: '请输入新密码',
                }],
                reset: [],
                visible_password: false,
                customActiveKey: 'tab1',
                loginBtn: false,
                // login type: 0 email, 1 username, 2 telephone
                loginType: 0,
                requiredTwoStepCaptcha: false,
                stepCaptchaVisible: false,
                form: null,
                state: {
                    time: 60,
                    smsSendBtn: false
                },
                formLogin: {
                    username: '',
                    password: '',
                    captcha: '',
                    mobile: '',
                    rememberMe: true
                }
            }
        },
        created() {
            this.checkpid();
            /*   this.$http
             .get('/auth/2step-code')
             .then(res => {
             this.requiredTwoStepCaptcha = res.result.stepCode
             })
             .catch(err => {
             console.log('2step-code:', err)
             })*/
            // this.requiredTwoStepCaptcha = true
        },
        methods: {
            done(){
                let that = this;
                that.$http.post(that.step03_url,
                    {
                        requestid: that.reset.requestid,
                        code: that.reset.code,
                        password: that.reset.password,
                    }).then(res => {
                    if (res.status === 200) {
                        that.visible_password = false
                        that.$message.success('修改成功', 5)
                    } else {
                        that.$message.error('错误：' + res.msg, 3)
                    }
                })
            },
            next() {
                let that = this;
                if (this.current === 0) {

                    that.$http.post(that.step01_url,
                        {
                            mobile: that.reset.mobile,
                        }).then(res => {
                        if (res.status === 200) {
                            this.current++
                            this.reset.requestid = res.data.requestid
                            that.$message.success('请输入验证码', 5)
                        } else {
                            that.$message.error('错误：' + res.msg, 3)
                        }
                    })

                }
                if (this.current === 1) {

                    that.$http.post(that.step02_url,
                        {
                            requestid: that.reset.requestid,
                            code: that.reset.code,
                        }).then(res => {
                        if (res.status === 200) {

                            this.current++
                            that.$message.success('请输入新密码', 5)
                        } else {
                            that.$message.error('错误：' + res.msg, 3)
                        }
                    })

                }


            },
            prev() {
                this.current--
            },
            ...mapActions(['Login', 'Logout']),
            Fnpass(){
                this.current = 0
                this.reset = []
                this.visible_password = true

            },
            checkpid(){

                let that = this;
                let name = "token";
                let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                let r = window.location.search.substr(1).match(reg);
                if (r != null) {

                    let loginParams = {
                        wcd: unescape(r[2])
                    }


                    that.Login(loginParams)
                        .then(() => {

                            that.loginSuccess()

                        })
                        .catch(err => {
                            that.requestFailed(err)
                        })

                }


            },
            // handler
            handleUsernameOrEmail(rule, value, callback) {
                const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
                if (regex.test(value)) {
                    this.loginType = 0
                } else {
                    this.loginType = 1
                }
                callback()
            },
            handleTabClick(key) {
                this.customActiveKey = key
                // this.form.resetFields()
            },
            handleSubmit() {
                const that = this
                let flag = false

                let loginParams = {
                    remember_me: that.formLogin.rememberMe
                }

                // 使用账户密码登陆
                if (that.customActiveKey === 'tab1')
                    that.form.validateFields(['username', 'password'], {force: true}, (err, values) => {
                        if (!err) {
                            flag = true
                            loginParams[!that.loginType ? 'email' : 'username'] = values.username
                            loginParams.password = md5(values.password)
                        }
                    })
                // 使用手机号登陆


                if (!flag) return

                that.loginBtn = true

                that
                    .Login(loginParams)
                    .then(() => {

                        that.loginSuccess()

                    })
                    .catch(err => {
                        that.requestFailed(err)
                    })
            },

            stepCaptchaSuccess() {
                this.loginSuccess()
            },
            stepCaptchaCancel() {
                this.Logout().then(() => {
                    this.loginBtn = false
                    this.stepCaptchaVisible = false
                })
            },
            loginSuccess() {
                this.loginBtn = false
                this.$router.push({name: 'Index'})
                this.$notification.success({
                    message: '欢迎',
                    description: `${timeFix()}，欢迎来到【里享文化】`
                })
            },
            requestFailed(err) {
                this.$notification['error']({
                    message: '错误',
                    description: '系统异常：账号校验错误',
                    duration: 4
                })
                this.loginBtn = false
                /*       this.$notification['error']({
                 message: '错误',
                 description: ((err.response || {}).data || {}).message || '账号校验失败',
                 duration: 4
                 })
                 this.loginBtn = false*/
            }
        }
    }
</script>

<style lang="scss" scoped>
    .user-layout-login {
        label {
            font-size: 14px;
        }

        .getCaptcha {
            display: block;
            width: 100%;
            height: 40px;
        }

        .forge-password {
            font-size: 14px;
        }

        button.login-button {
            padding: 0 15px;
            font-size: 16px;
            height: 40px;
            width: 100%;
        }

        .user-login-other {
            text-align: left;
            margin-top: 24px;
            line-height: 22px;

            .item-icon {
                font-size: 24px;
                color: rgba(0, 0, 0, 0.2);
                margin-left: 16px;
                vertical-align: middle;
                cursor: pointer;
                transition: color 0.3s;

                &:hover {
                    color: #1890ff;
                }
            }

            .register {
                float: right;
            }
        }
    }

    .steps-content {
        margin-top: 16px;
        border: 1px dashed #e9e9e9;
        border-radius: 6px;
        background-color: #fafafa;

        text-align: center;
        padding: 20px 15px;
    }

    .steps-action {
        margin-top: 24px;
    }
</style>