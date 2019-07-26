<template>
    <div class="page-header-index-wide">


        <a-card
                hoverable
                style="width: 100%"
        >
            <qr-code
                    id="qrcodeimg"
                    :text="url"
                    error-level="L">
            </qr-code>
            <a-divider />
            <a-card-meta
                    :title="info.realname+'，您好！'"
                    description="这是您的专属二维码！">
                <a-avatar slot="avatar" src="http://lixiangapi.99kk88.cn/lx.png" />
            </a-card-meta>
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

            </a-form>    <template slot="footer">
            <a-button  type="danger" @click="loginout">退出账号</a-button>
            <a-button key="back" @click="verfity_close">取消</a-button>
            <a-button key="submit" @click="handleOk">
                提交信息
            </a-button>
        </template>
        </a-modal>


    </div>


</template>

<script>
//yarn add vue-qrcode-component
import VueQRCodeComponent from 'vue-qrcode-component'

    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: 'Analysis',
        components: {
            'qr-code':VueQRCodeComponent
        },
        data() {
            return {
                info: [],
                verfity: [],
                show_data: [],
                verfity_url: "/Init/index/Verfity",
                applyagent_url: "/Init/index/ApplyAgnet",
                getarea_url: "/Init/index/getarea",
                getverfity_url: "/Init/index/VerfityStatus",
                visible_verfity: false,
                intervaltask: "",
                options: [],
            url:"",


            }
        },
        created() {

            this.ajax_verfity();
            this.rungetarea();
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
                        that.$message.success('身份认证成功！', 5)
                        that.visible_verfity = false;
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
                        that.url="http://lixiangok.99kk88.cn/user/register?pid="+that.info.mobile
                        return false;
                    } else {
                        that.visible_verfity = true;
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
    #qrcodeimg img{
        width: 100%!important;
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