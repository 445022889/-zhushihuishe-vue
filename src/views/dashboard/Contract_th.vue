<template>
    <div class="page-header-index-wide">
        <a-card>

            <a-form layout="vertical">

                <a-form-item
                        label='交易所'
                        hasFeedback
                        v-if="false"
                >
                    <a-select placeholder="请选择交易所"
                              @change="select_jys"
                    >
                        <a-select-option v-for="d in jys_data" :value='d.id'>{{ d.name }}
                        </a-select-option>
                    </a-select>

                </a-form-item>

                <a-form-item
                        label='交易品种'
                        hasFeedback
                        v-if="false"
                >
                    <a-select placeholder="请选择交易品种"
                              @change="select_jyp"
                              :disabled="jyp_disable"
                              v-if="false"
                    >
                        <a-select-option v-for="d in jyp_data" :value='d.id'>{{ d.name }}
                        </a-select-option>
                    </a-select>

                </a-form-item>

                <a-form-item
                        label='提货金额'
                        hasFeedback
                >
                    <a-input-number :min="2000" :max="100000" v-model="thje" style="width: 100%"
                                    placeholder="请输入提货金额（2000-100000）" @change="select_thje"/>
                </a-form-item>
                <a-button type="primary" block :disabled="th_disable" @click="Fnth">申请提货</a-button>


            </a-form>

            <a-divider />
            <a-alert :message="'累计实际提货总数：'+shiji_th" banner  type="info"/>

        </a-card>

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
                    <a-list-item-meta :description="'提货金额：'+item.number"/>
                    <a-list-item-meta :description="'打回原因：'+item.msg" v-if="item.status===1 || (item.status===0 && item.msg!=null)  "/>
                    <a-list-item-meta v-if="item.status===2 "  style="color: rgba(255,42,22,0.79);font-weight: bold">
     <span slot="description" >凭证上传：
                        <a-upload name="file" :multiple="false" :action="uploadth_url+'?id='+item.id" @change="handleChangeupload"   accept="image/*" :headers="headers">
                            <a-tag color="#f50">点击上传提货凭证</a-tag>
                        </a-upload></span>
                    </a-list-item-meta>
                    <a-list-item-meta v-if="item.status===2 || item.status===4 ||item.status===5 ||item.status===6  "  style="color: rgba(255,42,22,0.79);font-weight: bold">
            

                            <a-alert  banner type="warning" slot="description" >
                                         <span slot="message" >
                                               提货时间： {{item.ex_time}} 交易时间</span>
                            </a-alert>

                    </a-list-item-meta>





                    <a-alert message="申请中，请耐心等候" banner type="warning" v-if="item.status===0"/>
                    <a-alert message="本次申请未通过审核" banner type="error" v-if="item.status===1"/>
                    <a-alert message="初审已通过，请尽快上传提货凭证" banner type="info" v-if="item.status===2"/>




                    <a-alert message="初审未通过，请核实后重新发起提货申请" banner type="error" v-if="item.status===3"/>
                    <a-alert message="提货申请已通过审核" banner type="success" v-if="item.status===4"/>
                    <a-alert message="已提交提货凭证，等待审核" banner type="warning" v-if="item.status===5"/>
                    <a-alert message="等待终审" banner type="warning" v-if="item.status===6"/>

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
                data: [],
                jys_data,
                jyp_data,
                shiji_th:"",
                info: [],
                verfity: [],
                show_data: [],
                uploadth_url: "http://lixiangapi.99kk88.cn/Init/index/uploadth",
                verfity_url: "/Init/index/Verfity",
                pass_url: "/Init/index/Pass",
                getapplist_url: "/Init/index/GetThApplyList",
                th_url: "/Init/index/AddThApply",
                getarea_url: "/Init/index/getarea",
                getverfity_url: "/Init/index/VerfityStatus",
                getpass_url: "/Init/index/PassStatus",
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
                headers: {
                    "Access-Token":  JSON.parse(localStorage.getItem("pro__Access-Token")).value
                }
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
            handleChangeupload(info) {

                let that=this;
                if (info.file.status === 'done') {

                    let response=info.file.response;
                    if(response.status===200){
                        this.$message.success(`上传成功`);

                    }else{

                        this.$message.error(response.info);
                    }
                    that.rungetapplylist();

                } else if (info.file.status === 'error') {
                    this.$message.error("服务器错误");
                }
            },
            Fnth(){

                let that=this;
                this.$confirm({
                    title: '温馨提示',
                    content: '尊敬的VIP，当您确认“申请提货”后，请按提示于指定提货时间内在交易所进行“提货”操作并上传相应凭证！若您未在规定时间内完成上述操作，您的申请将被驳回，驳回后3个交易日内不能再进行“申请提货”操作！同时将会影响您在本平台系统的信用分。请悉知！',
                    onOk() {
                        that.$http.post(that.th_url,
                            {
                                number: that.thje,
                                jys:that.jys,
                                jyp:that.jyp,
                            }).then(res => {
                            if (res.status === 200) {
                                that.rungetapplylist();
                                that.$message.success('申请成功！', 5)
                            } else {
                                that.$message.error('错误：' + res.msg, 3)
                            }
                        })

                    },
                    onCancel() {},
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
                if (value >= 2000 && value <= 100000) {

                    this.th_disable = false;
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


                        that.shiji_th=res.data.shiji_th
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