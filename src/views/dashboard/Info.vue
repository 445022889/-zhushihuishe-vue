<template>
    <div class="page-header-index-wide">

        <a-card>    <a-form layout="vertical">

            <a-form-item
                    label='真实姓名'
                    hasFeedback
                    validateStatus='success'
            >
                <a-input :value='info.realname' disabled
                         style="background: #d8efbd;color:#4caf50!important;border: 1px solid #83b644;"/>
            </a-form-item>
            <a-form-item
                    label='手机号'
                    hasFeedback
                    validateStatus='success'
            >
                <a-input :value='info.mobile' disabled
                         style="background: #d8efbd;color:#4caf50!important;border: 1px solid #83b644;"/>
            </a-form-item>
            <a-form-item
                    label='身份证号'
                    hasFeedback
                    validateStatus='success'
            >
                <a-input :value='info.sfz' disabled
                         style="background: #d8efbd;color:#4caf50!important;border: 1px solid #83b644;"/>
            </a-form-item>
<!--            <a-form-item
                    label='绑定地区'
                    hasFeedback
                    validateStatus='success'
            >
                <a-input :value='info.sfd' disabled
                         style="background: #d8efbd;color:#4caf50!important;border: 1px solid #83b644;"/>
            </a-form-item>-->
            <a-form-item
                    label='甘交所账号'
                    hasFeedback
                    validateStatus='success'
            >
                <a-input placeholder='请输入您的甘交所账号' v-model='info.gjs' style="background: white"/>
            </a-form-item>

            <a-form-item>
                <a-button type="primary" block size="large" @click.stop.prevent="handleSubmit">确认修改</a-button>

            </a-form-item>
            <a-form-item>
                <a-button type="danger" block size="large" @click.stop.prevent="handlePassSubmit">密码修改</a-button>

            </a-form-item>
        </a-form>

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
                title="密码修改"
                :width="800"
                v-model="visible_passowrd"
                @ok="handlePassOk"
                @cancel="passowrd_close"
        >
            <a-form :autoFormCreate="(form)=>{this.form = form}">

                <a-form-item
                        label='一级密码'
                        hasFeedback
                >
                    <a-input placeholder='若无需改动，请留空即可' v-model="password1" />
                </a-form-item>

                <a-form-item
                        label='二级密码'
                        hasFeedback
                >
                    <a-input placeholder='若无需改动，请留空即可' v-model="password2"/>
                </a-form-item>

            </a-form>
        </a-modal>
    </div>


</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: 'Analysis',

        data() {
            return {
                info: [],
                verfity: [],
                password1:"",
                password2:"",
                password_url: "/Init/index/Password",
                verfity_url: "/Init/index/Verfity",
                edit_url: "/Init/index/Editgjs",
                getarea_url: "/Init/index/getarea",
                getverfity_url: "/Init/index/VerfityStatus",
                visible_verfity: false,
                visible_passowrd: false,
                intervaltask: "",
                options: [],
            }
        },
        created() {

            this.ajax_verfity();
            this.rungetc4();
        },
        beforeDestroy () {
            clearInterval(this.intervaltask)
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
            handlePassSubmit(){
                this.password1="";
                this.password2="";
                this.visible_passowrd = true
            },
            passowrd_close(){
                this.visible_passowrd = false
            },
            onChangebind(value){
                this.verfity.sfd = value[2]
            },
            handleOk(){
                let that = this;
                this.$http.post(that.verfity_url,
                    {
                        realname: that.verfity.realname,
                        sfz: that.verfity.sfz,
                        sfd: 64,
                    }).then(res => {
                    if (res.status === 200) {
                        that.visible_verfity = false;
                        that.$message.success('身份认证成功！', 5)
                    } else {
                        that.$message.error('错误：' + res.msg, 3)
                    }
                })

            },
            handlePassOk(){
                let that = this;

                if(that.password1===that.password2 && that.password2===""){
                    that.$message.error('请至少修改一项', 3)
                    return false;
                }


                this.$http.post(that.password_url,
                    {
                        p1: that.password1,
                        p2: that.password2,
                    }).then(res => {
                    if (res.status === 200) {
                        that.visible_passowrd = false;
                        that.$message.success('密码成功！', 5)
                    } else {
                        that.$message.error('错误：' + res.msg, 3)
                    }
                })

            }, handleSubmit(){
                let that = this;
                this.$http.post(that.edit_url,
                    {
                        gjs: that.info.gjs,
                    }).then(res => {
                    if (res.status === 200) {
                        that.$message.success('修改成功！', 5);

                        that.ajax_verfity();
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
                clearInterval(that.intervaltask);
                this.$http.post(that.getverfity_url).then(res => {
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
                        that.info = res.data;
                        that.visible_verfity = false;
                        clearInterval(that.intervaltask);
                        return false;
                    } else {
                        that.visible_verfity = true;
                    }
                })


            },   rungetc4(){
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