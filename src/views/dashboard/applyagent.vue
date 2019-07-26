<template>
    <div class="page-header-index-wide">
        <a-card>
        <a-form layout="vertical">

            <a-form-item
                    label='合伙人等级'
            >

                <a-radio-group defaultValue="1" style="width: 100%"
                               v-model="applyvip"
                               :disabled="agent"
                               buttonStyle="solid"
                               @change="onChangeLevel">
                    <a-radio-button value="1">普通</a-radio-button>
                    <a-radio-button value="2" disabled>优秀</a-radio-button>
                    <a-radio-button value="3" disabled>杰出</a-radio-button>
                    <a-radio-button value="4" disabled>卓越</a-radio-button>
                </a-radio-group>
            </a-form-item>
            <a-form-item
                    label='合伙人地区'
                    hasFeedback
            >
                <a-input-number v-model="applybind" style="width: 100%" :min="100000" :max="999999"
                                placeholder="请输入身份证前6位" :disabled="agent" />

            </a-form-item>


            <a-form-item>
                <a-button type="primary" block size="large" @click.stop.prevent="handleSubmit" v-if="!agent">确认申请
                </a-button>
                <a-alert :type="alert_type" :message="alert_message" banner v-if="agent"/>

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
                c1: [],
                c2: [],
                c3: [],
                c4: [],
                ls: "",
                applyvip: "1",
                applybind: "",
                c1_url: "/Init/index/getc1",
                c2_url: "/Init/index/getc2",
                c3_url: "/Init/index/getc3",
                c4_url: "/Init/index/getc4",
                verfity_url: "/Init/index/Verfity",
                applyagent_url: "/Init/index/ApplyAgnet",
                getarea_url: "/Init/index/getarea",
                getverfity_url: "/Init/index/VerfityStatus",
                visible_verfity: false,
                intervaltask: "",
                options: [],
                agent: true,
                alert_type: "info",
                alert_message: ""
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
            ...mapActions(['Logout']),
            loginout(){
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
                        that.visible_verfity = false;
                        that.$message.success('身份认证成功！', 5)
                    } else {
                        that.$message.error('错误：' + res.msg, 3)
                    }
                })

            },
            onChangeLevel(e){


                let level = e.target.value;
                this.applyvip = level;


            },
            show_id(e){

                this.ls = e;
                this.applybind = e;

            },
            filterOption(input, option) {
                return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            },
            handleSubmit(){
                let that = this;
                this.$http.post(that.applyagent_url,
                    {
                        vip: that.applyvip,
                        bind: that.applybind,
                    }).then(res => {
                    if (res.status === 200) {
                        that.$message.success('申请成功！', 5);
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
                        let agent = res.data.agent;
                        if (agent.status === 400) {
                            that.agent = false;
                        } else {
                            that.agent = true;
                            that.applyvip = agent.vip + "";

                            that.applybind = agent.bind + "";

                            if (agent.status === 200) {

                                that.alert_type = "success";
                                that.alert_message = "您的合伙人已通过申请！";

                            } else {
                                that.alert_message = "您的合伙人申请正在审核中，请耐心等待！";
                            }


                        }


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