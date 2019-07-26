<template>
    <div class="page-header-index-wide">


        <a-card style="padding-top: 0">
            <router-link class="login" :to="{ name: 'RewardListTh' }" style="color: rgba(82,82,82,0.79)"> <a-button type="primary" block >查看提货获得的银豆/金豆</a-button></router-link>
            <a-divider dashed style="margin-top: 0">奖金记录</a-divider>


            <a-list
                    itemLayout="vertical"
                    :dataSource="signdata"
            >
                <a-list-item slot="renderItem" slot-scope="item, index">
                    <a-list-item-meta :description="'获取日期：'+item.add_time"/>
                    <a-list-item-meta :description="'提货人手机号：'+item.thr" v-if="item.is_ac===1"/>
                    <a-list-item-meta :description="'活动参与人手机号：'+item.thr" v-if="item.is_ac===0"/>
                    <a-list-item-meta :description="'奖金类型：1代推荐奖'" v-if="item.type===1"/>
                    <a-list-item-meta :description="'奖金类型：2代推荐奖'" v-if="item.type===2"/>
                    <a-list-item-meta :description="'奖金类型：区域奖'" v-if="item.type===3"/>
                    <a-list-item-meta :description="'奖金类型：1代代理商奖'" v-if="item.type===4"/>
                    <a-list-item-meta :description="'奖金类型：2代代理商奖'" v-if="item.type===5"/>
                    <a-list-item-meta :description="'奖金类型：级差奖'" v-if="item.type===6"/>
                    <a-list-item-meta :description="'奖金类型：[活动]直接分享奖'" v-if="item.type===11"/>
                    <a-list-item-meta :description="'奖金类型：[活动]间接分享奖'" v-if="item.type===12"/>
                    <a-list-item-meta :description="'奖金类型：[活动]区域奖'" v-if="item.type===13"/>
                    <a-list-item-meta :description="'奖金类型：[活动]团队奖'" v-if="item.type===14"/>
                    <a-list-item-meta :description="'奖金类型：[活动]代理推荐奖'" v-if="item.type===15"/>
                    <a-list-item-meta :description="'奖金类型：[活动]均分奖'" v-if="item.type===16"/>
                    <a-list-item-meta :description="'奖金类型：[活动]2代代理商奖'" v-if="item.type===17"/>
                    <a-list-item-meta :description="'比例：'+item.rate" v-if="item.type!==16"/>
                    <a-list-item-meta :description="'金豆：'+item.jindou" v-if="item.is_ac===1"/>
                    <a-list-item-meta :description="'银豆：'+item.yindou" v-if="item.is_ac===1"/>
                    <a-list-item-meta :description="'元宝：'+item.yuanbao" v-if="item.is_ac===0"/>
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
                    <a-input type="password"  placeholder='请输入二级密码' v-model="verfity.password" id='password'/>
                </a-form-item>


            </a-form>
        </a-modal>


    </div>


</template>

<script>



    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: 'Analysis',
        components: {
        },
        data() {
            return {
                signdata: [],
                info: [],
                verfity: [],
                show_data: [],
                verfity_url: "/Init/index/Verfity",
                sign_url: "/Init/index/Sign",
                pass_url: "/Init/index/Pass",
                getbypid_url: "/Init/index/GetChildUser",
                getarea_url: "/Init/index/getarea",
                getSign_url: "/Init/index/getReward",
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
                        that.visible_pass = false;

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