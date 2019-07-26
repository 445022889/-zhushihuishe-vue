<template>
    <div class="page-header-index-wide">
        <a-card>

            <a-form layout="vertical">

                <a-form-item
                        label='交易所'
                        hasFeedback
                >
                    <a-select placeholder="请选择交易所" defaultValue="1" style="width: 100%"
                    >
                        <a-select-option value="1">甘肃文化艺术品交易中心</a-select-option>
                    </a-select>

                </a-form-item>

                <a-form-item
                        label='交易品种'
                        hasFeedback
                >
                    <a-select placeholder="请选择交易品种" defaultValue="1" style="width: 100%"
                    >
                        <a-select-option value="1">金秋之梦</a-select-option>
                    </a-select>

                </a-form-item>

                <a-form-item
                        :label='"兑换枚数"'
                        hasFeedback
                >
                    <a-input-number :min="0.01" :max="max" v-model="thje" style="width: 100%"
                                    :placeholder="'请输入兑换枚数，最大不能超过'+max+'枚'" @change="select_thje"/>
                </a-form-item>
                <a-form-item
                        :label='"交易所可用资金"'
                        hasFeedback
                >
                    <a-input-number :min="0.01" :max="max" v-model="byj" style="width: 100%"
                                    placeholder="请输入兑换枚数，自动计算可用资金" disabled/>
                </a-form-item>
                <a-form-item

                        hasFeedback
                >

                </a-form-item>


                <a-button type="primary" block :disabled="th_disable" @click="Fnth">申请置换</a-button>


            </a-form>

            <a-divider />
            <a-alert :message="'累计置换元宝总数：'+shiji_zh" banner  type="info"/>

        </a-card>
        <a-alert message="只能在交易日的9:30-15:00之间才能申请" banner />
        <a-card style="margin-top: 30px;padding-top: 0">

            <a-divider dashed style="margin-top: 0">申请记录</a-divider>


            <a-list
                    itemLayout="vertical"
                    :dataSource="data"
            >
                <a-list-item slot="renderItem" slot-scope="item, index">
                    <a-list-item-meta :description="'申请日期：'+item.add_time"/>
                    <a-list-item-meta :description="'交易所：甘肃文化艺术品交易中心'"/>
                    <a-list-item-meta :description="'交易品：金秋之梦'"/>
                    <a-list-item-meta :description="'申请置换枚数：'+item.zh"/>



                    <a-alert message="申请中，请耐心等候" banner type="warning" v-if="item.status===0"/>
                    <a-alert message="本次申请未通过审核" banner type="error" v-if="item.status===1"/>
                    <a-alert message="初审已通过，等待终审" banner type="info" v-if="item.status===2"/>
                    <a-alert message="初审未通过" banner type="error" v-if="item.status===3"/>
                    <a-alert message="终审通过" banner type="success" v-if="item.status===5"/>
                    <a-alert message="终审未通过" banner type="error" v-if="item.status===6"/>

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


    const jys_data = [
        {
            id: '1',
            name: '甘肃文化艺术品交易中心',
        },
    ]

    const jyp_data = [
        {
            id: '1',
            name: '金秋之梦',
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
                max: 0,
                data: [],
                jys_data,
                jyp_data,
                shiji_zh:"",
                info: [],
                verfity: [],
                show_data: [],
                uploadth_url: "http://lixiangapi.99kk88.cn/Init/index/uploadth",
                verfity_url: "/Init/index/Verfity",
                pass_url: "/Init/index/Pass",
                getapplist_url: "/Init/index/GetZhApplyList",
                th_url: "/Init/index/AddZhApply",
                getarea_url: "/Init/index/getarea",
                getverfity_url: "/Init/index/VerfityStatus",
                getpass_url: "/Init/index/PassStatus",
                price_url: "/Init/index/GetLastDayPrice",
                fxj_url: "/Init/index/GetLastfxPrice",
                price: 0,
                visible_verfity: false,
                visible_pass: false,
                intervaltask: "",
                intervalpass: "",
                options: [],
                list: [],
                jyp_disable: true,
                thje_disable: true,
                th_disable: true,
                jys: "1",
                jyp: "1",
                thje: "",
                byj:0,
                fxj:30,
                headers: {
                    "Access-Token": JSON.parse(localStorage.getItem("pro__Access-Token")).value
                }
            }
        },
        created() {
            this.rungetfxj();
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
            handleChangeupload(info) {

                let that = this;
                if (info.file.status === 'done') {

                    let response = info.file.response;
                    if (response.status === 200) {
                        this.$message.success(`上传成功`);

                    } else {

                        this.$message.error(response.info);
                    }
                    that.rungetapplylist();

                } else if (info.file.status === 'error') {
                    this.$message.error("服务器错误");
                }
            },
            Fnth(){
                let that = this;
                that.$http.post(that.th_url,
                    {
                        zh: that.thje,
                        jys: that.jys,
                        jyp: that.jyp,
                    }).then(res => {
                    if (res.status === 200) {
                        that.thje=0;
                        that.bfj=0;
                        that.rungetapplylist();
                        that.$message.success('申请成功！', 5)
                        that.ajax_pass();
                    } else {
                        that.$message.error('错误：' + res.msg, 3)
                    }
                })

            },
            select_jys(value){
                this.jyp_disable = false;

                this.jys = value;
            },
            select_jyp(value){
                this.jyp = value;
                this.thje_disable = false;
            },
            select_thje(value){

                if (value >= 0.01 && value <= parseFloat(this.max)) {

                    this.th_disable = false;
                } else {
                    this.th_disable = true;
                }
                this.byj = value * this.fxj;

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
                        that.visible_verfity = false;

                        that.ajax_pass();
                        return false;
                    } else {
                        that.visible_verfity = true;
                    }
                })


            },
            ajax_pass(){
                let that = this;
                this.$http.post(that.getpass_url).then(res => {
                    if (res.status === 200) {
                        that.shiji_zh=res.data.shiji_zh;

                        that.visible_pass = false;
                        that.price = res.data.price;
                        let mx = res.data.yuanbao / (that.price - 30);

                        that.max = parseInt(mx.toFixed(0))
                        this.rungetapplylist();

                        return false;
                    } else {
                        that.visible_pass = true;
                    }
                })

            },
            rungetapplylist(){
                this.$http.post(this.getapplist_url,).then(res => {
                    if (res.status === 200) {
                        this.data = res.data;
                    } else {
                        this.$message.error('系统异常：' + res.msg, 3)
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
            rungetfxj(){
                this.$http.post(this.fxj_url,).then(res => {
                    if (res.status === 200) {
                        this.fxj = res.data;
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