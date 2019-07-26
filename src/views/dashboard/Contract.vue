<template>
    <div class="page-header-index-wide">
        <a-card>
            <a-list
                    itemLayout="horizontal"
                    :dataSource="data"
            >
                <a-list-item slot="renderItem" slot-scope="item, index" @click="fnclick(index)">
                    <a-tag slot="actions" color="blue">{{item.num}}</a-tag>
                    <a-list-item-meta
                            :description="item.intro"
                    >
                        <a slot="title"> {{item.title}}</a>
                        <a-avatar slot="avatar" :src="item.img"/>

                    </a-list-item-meta>
                </a-list-item>

            </a-list>
            <a-divider />
            <a-alert :message="'元宝释放累计总数：'+shifang_yuanbao+'元宝'" banner  type="info"/>
        </a-card>
        <a-card style="margin-top: 20px">
            <a-button type="primary" icon="alert" @click="sign" block :disabled="visible_sign">
                今日签到
            </a-button>
        </a-card>

        <a-card style="margin-top: 30px;padding-top: 0">

            <a-divider dashed style="margin-top: 0">签到记录</a-divider>


            <a-list
                    itemLayout="vertical"
                    :dataSource="signdata"
            >
                <a-list-item slot="renderItem" slot-scope="item, index">
                    <a-list-item-meta :description="'签到日期：'+item.add_time"/>
                    <a-list-item-meta :description="'类型：银豆到金豆'" v-if="item.type===1"/>
                    <a-list-item-meta :description="'类型：金豆到元宝'" v-if="item.type===2"/>
                    <a-list-item-meta :description="'数量：'+item.number"/>
                </a-list-item>

            </a-list>


        </a-card>
        <a-modal
                title="实名认证"
                :width="800"
                v-model="visible_verfity"
                @ok="handleOk"
                @cancel="verfity_close"
        >
            <a-form :autoFormCreate="(form)=>{this.form = form}">

                <a-form-item
                        label='姓名'
                        hasFeedback
                >
                    <a-input placeholder='请输入您的真实姓名' v-model="verfity.realname" id='realname'/>
                </a-form-item>

                <a-form-item
                        label='身份证号'
                        hasFeedback
                >
                    <a-input placeholder='请输入您的身份证号' v-model="verfity.sfz" id='sfz'/>
                </a-form-item>

            </a-form>
            <template slot="footer">
                <a-button  type="danger" @click="loginout">退出账号</a-button>
                <a-button key="back" @click="verfity_close">取消</a-button>
                <a-button key="submit" @click="handleOk">
                    提交信息
                </a-button>
            </template>
        </a-modal>

        <a-modal
                title="身份确认"
                :width="800"
                v-model="visible_pass"
                @ok="handlePass"
                @cancel="pass_close"
        >
            <a-form :autoFormCreate="(form)=>{this.form = form}">

                <a-form-item
                        label='二级密码'
                        hasFeedback
                >
                    <a-input type="password" placeholder='请输入二级密码' v-model="verfity.password" id='password'/>
                </a-form-item>


            </a-form>
        </a-modal>


    </div>


</template>

<script>

    const data = [
        {
            title: '提货',
            img: 'http://v2.lanjiangchina.com/public/appimg/c0.png',
            intro: '提货参与促销活动',
            num: '点击进入',
        },
        {
            title: '银豆',
            img: 'http://v2.lanjiangchina.com/public/appimg/c1.png',
            intro: '签到转换成金豆',
            num: '~',
        },
        {
            title: '金豆',
            img: 'http://v2.lanjiangchina.com/public/appimg/c2.png',
            intro: '自动转换成元宝',
            num: '~',
        },
        {
            title: '元宝',
            img: 'http://v2.lanjiangchina.com/public/appimg/c3.png',
            intro: '元宝可兑换交易品',
            num: '~',
        },
    ]
    //yarn add vue-qrcode-component
    import VueQRCodeComponent from 'vue-qrcode-component'

    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: 'Analysis',
        components: {
            'qr-code': VueQRCodeComponent
        },
        data() {
            return {
                signdata: [],
                data,
                info: [],
                verfity: [],
                show_data: [],
                shifang_yuanbao: 0,
                verfity_url: "/Init/index/Verfity",
                sign_url: "/Init/index/Sign",
                pass_url: "/Init/index/Pass",
                getbypid_url: "/Init/index/GetChildUser",
                getarea_url: "/Init/index/getarea",
                getSign_url: "/Init/index/getSign",
                getverfity_url: "/Init/index/VerfityStatus",
                getpass_url: "/Init/index/PassStatus",
                visible_verfity: false,
                visible_pass: false,
                visible_sign: false,
                intervaltask: "",
                intervalpass: "",
                options: [],
                list: [],


            }
        },
        created() {

            this.ajax_verfity();
            this.rungetarea();
        },
        beforeDestroy () {
            clearInterval(this.intervaltask)
            clearInterval(this.intervalpass)
        },
        methods: {
            ...mapActions(['Logout']),   loginout(){
                let that = this;
                that.Logout({}).then(() => {
                    window.location.reload()
                }).catch(err => {
                    that.$message.error({
                        title: '错误',
                        description: err.message
                    })
                })
            },
            sign(){

                let that = this;
                this.$http.post(that.sign_url).then(res => {
                    this.ajax_pass();
                    if (res.status === 200) {

                        this.$message.success("签到成功");

                    } else {
                        this.$message.info(res.msg);
                    }
                })


            },
            fnclick(index){
                if (index === 0) {
                    this.$router.push({name: 'Contract_th'})
                }else if(index===3){
                    this.$router.push({name: 'Contract_zh'})

                }
            },
            onChangebind(value){
                this.verfity.sfd = value[2]
            },

            pass_close(){
                let that = this;
                that.ajax_pass();
            },
            handlePass(){
                let that = this;
                that.$http.post(that.pass_url,
                    {
                        password: that.verfity.password,
                    }).then(res => {
                    if (res.status === 200) {
                        that.visible_pass = false;
                        that.ajax_pass();

                        that.$message.success('身份确认已通过！', 5)
                    } else {
                        that.$message.error('错误：' + res.msg, 3)
                    }
                })

            },
            handleOk(){
                let that = this;
                this.$http.post(that.verfity_url,
                    {
                        realname: that.verfity.realname,
                        sfz: that.verfity.sfz,
                        sfd: 64
                    }).then(res => {
                    if (res.status === 200) {
                        that.visible_verfity = false;
                        that.$message.success('身份认证成功！', 5)
                    } else {
                        that.$message.error('错误：' + res.msg, 3)
                    }
                })

            },
            verfity_close(){
                let that = this;
                that.ajax_verfity();
            },
            ajax_verfity(){
                let that = this;
                that.$http.post(that.getverfity_url).then(res => {
                    if (res.status === 404) {
                        that.$message.error('用户登录状态已失效，请重新登录！', 5)
                        return that.Logout({}).then(() => {
                            window.location.reload()
                        }).catch(err => {
                            that.$message.error({
                                title: '错误',
                                description: err.message
                            })
                        })

                    }

                    if (res.status === 200) {
                        that.visible_verfity = false
                        that.ajax_pass();
                        return false;
                    } else {
                        that.visible_verfity = true;
                    }
                })


            },
            ajax_sign(){
                let that = this;
                this.$http.post(that.getSign_url).then(res => {
                    if (res.status === 200) {

                        that.signdata = res.data;

                        return false;
                    } else {
                        that.visible_pass = true;
                    }
                })

            },
            ajax_pass(){
                let that = this;
                this.$http.post(that.getpass_url).then(res => {
                    if (res.status === 200) {
                        let resd = res.data;

                        if (resd.sign === 2) that.visible_sign = true;
                        that.visible_pass = false;

//                        that.data[0].num=resd.tihuo;
                        that.data[1].num = resd.yindou;
                        that.data[2].num = resd.jindou;
                        that.data[3].num = resd.yuanbao;
                        that.shifang_yuanbao=resd.shifang_yuanbao
                        that.ajax_sign();

                        return false;
                    } else {
                        that.visible_pass = true;
                    }
                })

            },
            rungetarea(){
                this.$http.post(this.getarea_url,).then(res => {
                    if (res.status === 200) {
                        this.options = res.data;
                    } else {
                        this.$message.error('系统异常：' + res.msg, 3)
                    }
                })
            },


        },
    }
</script>

<style>

    .ant-radio-button-wrapper {

        width: 25% !important;
        text-align: center !important;
    }

    #qrcodeimg img {
        width: 100% !important;
    }
</style>
<style lang="scss" scoped>

    .extra-wrapper {
        line-height: 55px;
        padding-right: 24px;

        .extra-item {
            display: inline-block;
            margin-right: 24px;

            a {
                margin-left: 24px;
            }
        }
    }
</style>