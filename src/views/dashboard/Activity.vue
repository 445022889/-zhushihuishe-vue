<template>
    <div class="page-header-index-wide">
        <a-card>

            <a-form layout="vertical">


                <a-form-item
                        label='账户金豆余额'
                        hasFeedback
                >
                    <a-input-number v-model="shiji_jindou" style="width: 100%" disabled/>
                </a-form-item>
                <a-form-item
                        label='参与活动金额'
                        hasFeedback
                >
                    <span slot="label" style="font-size: 12px">

                    </span>
                    <a-input-number v-if="shiji_jindou/0.1<5000" style="width: 100%" disabled
                                    value="您当前的金豆不足以参加活动"/>

                    <a-input-number v-else-if="shiji_jindou/0.1<10000" style="width: 100%" v-model="hdje_t"
                                    :placeholder="'请输入参与活动的金额（5000-'+parseInt(shiji_jindou/0.1)+'）'"
                                    @change="select_thje" :min="5000" :max="shiji_jindou/0.1"
                    />


                    <a-input-number :min="5000" v-else-if="shiji_jindou/0.1>=10000" :max="10000" style="width: 100%"
                                    v-model.lazy="hdje_t"
                                    placeholder="请输入参与活动的金额（5000 或10000）" @change="select_thje"/>
                </a-form-item>
                <a-form-item
                        label='扣除金豆数量'
                        hasFeedback
                >

                    <a-input-number :value="hdje==''?'':(hdje/10).toFixed(2)" style="width: 100%"
                                    placeholder="" disabled/>
                </a-form-item>

                <a-button type="primary" block :disabled="th_disable || parseInt(hdje)<2000" @click="Fnth">提交申请
                </a-button>


            </a-form>

            <a-divider/>
            <a-alert :message="'金豆会在申请时实时扣除，申请被打回时会恢复扣除数量'" banner type="info"/>

        </a-card>

        <a-card style="margin-top: 30px;padding-top: 0">

            <a-divider dashed style="margin-top: 0">申请记录</a-divider>


            <a-list
                    itemLayout="vertical"
                    :dataSource="data"
            >
                <a-list-item slot="renderItem" slot-scope="item, index">
                    <a-list-item-meta :description="'申请日期：'+item.apply_time"/>
                    <a-list-item-meta :description="'交易所：甘肃文化艺术品交易中心'"/>
                    <a-list-item-meta :description="'交易品：金秋之梦'"/>
                    <a-list-item-meta :description="'活动金额：'+item.activity_money"/>
                    <a-list-item-meta :description="'金豆扣除：'+item.jindou"/>
                    <a-list-item-meta :description="'打回原因：'+item.buy_dh" v-if="item.status===2 && item.buy_dh!=''  "/>
                    <a-list-item-meta :description="'打回原因：'+item.system_dh" v-if="item.status===9 && item.system_dh!=''  "/>
                    <a-list-item-meta :description="'打回原因：'+item.sell_dh" v-if="item.status===4 && item.sell_dh!=''  "/>

                    <a-list-item-meta v-if="item.status===2 " style="color: rgba(255,42,22,0.79);font-weight: bold">
     <span slot="description">买入凭证上传：
                        <a-upload name="file" multiple :action="uploadacb_url+'?id='+item.id" listType="picture"
                                  :fileList="fileList"
                                  @change="handleChangeupload" accept="image/*" :headers="headers">
                            <a-tag color="#f50">上传买入凭证</a-tag>
                        </a-upload>

 <a-divider v-if="JSON.stringify(fileList) !== '[]' "/>
                    <a-button type="primary" block v-if="JSON.stringify(fileList) !== '[]' " @click="handlepostpic_buy">确认买入凭证已全部上传完毕（仅一次机会）</a-button>
                               <a-divider v-if="JSON.stringify(fileList) !== '[]' "/>
     </span>


                    </a-list-item-meta>


                    <a-list-item-meta v-if="item.status===4 " style="color: rgba(255,42,22,0.79);font-weight: bold">
     <span slot="description">卖出凭证上传：
                        <a-upload name="file" multiple :action="uploadacs_url+'?id='+item.id" listType="picture"
                                  :fileList="fileList"
                                  @change="handleChangeupload" accept="image/*" :headers="headers">
                            <a-tag color="#f50">上传卖出凭证</a-tag>
                        </a-upload>

 <a-divider v-if="JSON.stringify(fileList) !== '[]' "/>
                    <a-button type="primary" block v-if="JSON.stringify(fileList) !== '[]' " @click="handlepostpic_sell">确认买入凭证已全部上传完毕（仅一次机会）</a-button>
                               <a-divider v-if="JSON.stringify(fileList) !== '[]' "/>
     </span>


                    </a-list-item-meta>



                    <a-list-item-meta v-if="item.status===2 || item.status===3|| item.status===4 " style="color: rgba(255,42,22,0.79);font-weight: bold">


                        <a-alert banner type="warning" slot="description">
                                         <span slot="message">
                                               买入时间： {{item.buy_time}} 交易时间</span>
                        </a-alert>

                    </a-list-item-meta>

                    <a-list-item-meta v-if="item.status===2 || item.status===3|| item.status===4 " style="color: rgba(255,42,22,0.79);font-weight: bold">


                        <a-alert banner type="warning" slot="description">
                                         <span slot="message">
                                               要求买入： {{item.buy_min}}- {{item.buy_max}}元</span>
                        </a-alert>

                    </a-list-item-meta>

                    <a-list-item-meta v-if="item.status===4  " style="color: rgba(255,42,22,0.79);font-weight: bold">


                        <a-alert banner type="warning" slot="description">
                                         <span slot="message">
                                               实际买入： {{item.buy_realmoney}}元</span>
                        </a-alert>

                    </a-list-item-meta>

                    <a-list-item-meta v-if="item.status===4  " style="color: rgba(255,42,22,0.79);font-weight: bold">


                        <a-alert banner type="warning" slot="description">
                                         <span slot="message">
                                              买入枚数： {{item.buy_meishu}}枚</span>
                        </a-alert>

                    </a-list-item-meta>

                    <a-list-item-meta v-if="item.status===4  " style="color: rgba(255,42,22,0.79);font-weight: bold">


                        <a-alert banner type="warning" slot="description">
                                         <span slot="message">
                                              卖出时间： {{item.sell_time}} 交易时间</span>
                        </a-alert>

                    </a-list-item-meta>
                    <a-list-item-meta v-if="item.status===4  " style="color: rgba(255,42,22,0.79);font-weight: bold">


                        <a-alert banner type="warning" slot="description">
                                         <span slot="message">
                                              卖出枚数： {{item.buy_meishu}}枚</span>
                        </a-alert>

                    </a-list-item-meta>
<!--                    <a-list-item-meta v-if="item.status===0  " style="color: rgba(255,42,22,0.79);font-weight: bold">


                        <a-alert banner type="warning" slot="description">
                                         <span slot="message">
                                              卖出金额： {{item.sell_realmoney}}元</span>
                        </a-alert>

                    </a-list-item-meta>-->
                    <a-list-item-meta v-if="item.status===0  " style="color: rgba(255,42,22,0.79);font-weight: bold">


                        <a-alert banner type="warning" slot="description">
                                         <span slot="message">
                                              补发元宝： {{item.return_yuanbao}}个</span>
                        </a-alert>

                    </a-list-item-meta>


                    <a-alert message="申请中，请耐心等候" banner type="warning" v-if="item.status===1"/>
                    <a-alert message="申请已通过，请尽快上传买入凭证" banner type="info" v-if="item.status===2"/>

                    <a-alert message="买入凭证审核中" banner type="info" v-if="item.status===3"/>
                    <a-alert message="买入凭证审核通过，请上传卖出凭证" banner type="info" v-if="item.status===4"/>
                    <a-alert message="卖出凭证审核中" banner type="info" v-if="item.status===5"/>
                    <a-alert message="活动参与成功" banner type="success" v-if="item.status===0"/>
                    <a-alert message="申请被退回或主动取消" banner type="error" v-if="item.status===9"/>



                    <a-tag color="#f50" style="width: 100%;padding: 5px;height: auto;text-align: center;margin: 10px 0" v-if="item.status===1 || item.status===2 || item.status===3 || item.status===4 || item.status===5" @click="apply_cancel">主动取消活动申请（一旦审核通过，金豆不给予退回）</a-tag>
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
                <a-button type="danger" @click="loginout">退出账号</a-button>
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
    import ATag from "ant-design-vue/es/tag/Tag";
    export default {
        name: 'Analysis',
        components: {
            ATag,
            'qr-code': VueQRCodeComponent
        },
        data() {
            return {

                data: [],
                jys_data,
                jyp_data,
                shiji_jindou: 0,
                shiji_th: "",
                info: [],
                fileList: [],
                verfity: [],
                show_data: [],
                uploadacb_url: "http://lixiangapi.99kk88.cn/Init/index/uploadacb",
                uploadacs_url: "http://lixiangapi.99kk88.cn/Init/index/uploadacs",
                verfity_url: "/Init/index/Verfity",
                pass_url: "/Init/index/Pass",
                accancel_url: "/Init/index/AcApplyCancel",
                getapplist_url: "/Init/index/GetAcApplyList",
                th_url: "/Init/index/AddAcApply",
                getarea_url: "/Init/index/getarea",
                getverfity_url: "/Init/index/VerfityStatus",
                getpass_url: "/Init/index/PassStatus",
                acpic_url: "/Init/index/PostAcPic",
                acpic2_url: "/Init/index/PostAcPic2",
                visible_verfity: false,
                visible_pass: false,
                intervaltask: "",
                intervalpass: "",
                list: [],
                jyp_disable: true,
                thje_disable: true,
                th_disable: true,
                jys: "1",
                jyp: "1",
                thje: "",
                hdje: "",
                hdje_t: "",
                headers: {
                    "Access-Token": JSON.parse(localStorage.getItem("pro__Access-Token")).value
                }
            }
        },
        created() {
            this.ajax_verfity();


        },
        beforeDestroy () {
            clearInterval(this.intervaltask)
            clearInterval(this.intervalpass)
        },
        methods: {

            apply_cancel(){

                this.$http.post(this.accancel_url).then(res => {
                    if (res.status === 200) {
                        this.$message.success("已申请取消活动")

                        this.ajax_pass();
                    }else{

                        this.$message.error(info.file.response.msg)
                    }

                })

            },
            ...mapActions(['Logout']), loginout(){
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
            handlepostpic_buy(){
                const fp = this.fileList
                let postpic = []
                fp.forEach(function (a) {

                    postpic.push(a.response.url)
                })

                this.$http.post(this.acpic_url, {data: postpic}).then(res => {
                    if (res.status === 200) {
                        this.$message.success("买入凭证已上传，等待系统审核")

                        this.ajax_pass();
                    }else{

                        this.$message.error(info.file.response.msg)
                    }

                })


            },
            handlepostpic_sell(){
                const fp = this.fileList
                let postpic = []
                fp.forEach(function (a) {

                    postpic.push(a.response.url)
                })

                this.$http.post(this.acpic2_url, {data: postpic}).then(res => {
                    if (res.status === 200) {
                        this.$message.success("卖出凭证已上传，等待系统审核")

                        this.ajax_pass();
                    }else{

                        this.$message.error(info.file.response.msg)
                    }

                })


            },
            handleChangeupload(info) {
                const fileList = info.fileList
                if (info.file.status === 'done') {

                    const init = info.file

                    if (init.response.status === 200) {

                        this.fileList = fileList
                    } else {

                        this.fileList.pop()
                        this.$message.error(info.file.response.msg)
                        return false
                    }


                } else {
                    this.fileList = fileList
                }
            },
            Fnth(){

                let that = this;
                this.$confirm({
                    title: '温馨提示',
                    content: '当前操作会立即扣除账户金豆，是否继续操作？',
                    onOk() {
                        that.$http.post(that.th_url,
                            {
                                activity_money: that.hdje,
                            }).then(res => {
                            if (res.status === 200) {
                                that.ajax_pass();
                                that.$message.success('申请成功！', 5)
                            } else {
                                that.$message.error('错误：' + res.msg, 3)
                            }
                        })

                    },
                    onCancel() {
                    },
                });


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
                this.th_disable = true;

                if (value >= 2000 && value <= 10000) {

                    if (this.shiji_jindou < 500) {
                        this.hdje = this.hdje_t = 0

                    } else {

                        this.hdje = this.hdje_t = parseInt(this.hdje_t / 5000) * 5000
                        this.th_disable = false;
                    }


                } else {
                    this.th_disable = true;
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


                        that.shiji_jindou = res.data.jindou
                        that.visible_pass = false;
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