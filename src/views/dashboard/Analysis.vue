<template>
    <div class="page-header-index-wide">
        <a-card>
      <!--<a-card-grid style="width:50%;textAlign:center">
        <a-avatar
          style="display: block;backgroundColor:#1890ff;margin: 0 auto 6px"
          icon="shopping"
        />我的订单
      </a-card-grid>-->
      <router-link class="login" :to="{ name: 'ac' }" style="color: rgba(82,82,82,0.79)">
            <a-card-grid style="width:50%;textAlign:center">
          <a-avatar style="display: block;backgroundColor:#1890ff;margin: 0 auto 6px" src="data:image/png;base64,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"/>活动
            </a-card-grid>
      </router-link>
            <router-link class="login" :to="{ name: 'Info' }" style="color: rgba(82,82,82,0.79)">
                <a-card-grid style="width:50%;textAlign:center">
                    <a-avatar style="display: block;backgroundColor:#1890ff;margin: 0 auto 6px" icon="user"/>
                    个人资料
                </a-card-grid>
            </router-link>
            <router-link class="login" :to="{ name: 'Applyagent' }" style="color: rgba(82,82,82,0.79)">
                <a-card-grid style="width:50%;textAlign:center">
          <a-avatar
            style="display: block;backgroundColor:#1890ff;margin: 0 auto 6px"
            icon="ant-design"
          />申请合伙人
                </a-card-grid>
            </router-link>
            <router-link class="login" :to="{ name: 'Contract' }" style="color: rgba(82,82,82,0.79)">
                <a-card-grid style="width:50%;textAlign:center">
          <a-avatar
            style="display: block;backgroundColor:#1890ff;margin: 0 auto 6px"
            icon="cluster"
          />交易品中心
                </a-card-grid>
            </router-link>
            <router-link class="login" :to="{ name: 'RewardList' }" style="color: rgba(82,82,82,0.79)">
            <a-card-grid style="width:50%;textAlign:center">
          <a-avatar
            style="display: block;backgroundColor:#1890ff;margin: 0 auto 6px"
            icon="schedule"
          />分享记录
            </a-card-grid>
            </router-link>
            <router-link class="login" :to="{ name: 'NoticeList' }" style="color: rgba(82,82,82,0.79)">
            <a-card-grid style="width:50%;textAlign:center">
                <a-avatar style="display: block;backgroundColor:#1890ff;margin: 0 auto 6px" icon="sound"/>
                公告
            </a-card-grid>
        </router-link>
            <router-link class="login" :to="{ name: 'ShareList' }" style="color: rgba(82,82,82,0.79)">
                <a-card-grid style="width:50%;textAlign:center">
                    <a-avatar style="display: block;backgroundColor:#1890ff;margin: 0 auto 6px" icon="wifi"/>
                    我的分享
                </a-card-grid>
            </router-link>
            <router-link class="login" :to="{ name: 'ShareQrcode' }" style="color: rgba(82,82,82,0.79)">
                <a-card-grid style="width:50%;textAlign:center">
          <a-avatar
            style="display: block;backgroundColor:#1890ff;margin: 0 auto 6px"
            icon="qrcode"
          />分享二维码
                </a-card-grid>
            </router-link>
      <router-link class="login" :to="{ name: 'IncomeCount' }" style="color: rgba(82,82,82,0.79)">
        <a-card-grid style="width:50%;textAlign:center">
          <a-avatar
            style="display: block;backgroundColor:#1890ff;margin: 0 auto 6px"
            icon="bar-chart"
          />提货收益计算器
        </a-card-grid>
      </router-link>
    </a-card>
    <a-alert banner>
        <div slot="message" style="font-size: 12px">
            退出系统，可以直接点击右侧按钮！<a-tag color="red" style="float: right"@click="loginout">退出账号</a-tag>

        </div>

    </a-alert>


        <a-modal
                title="实名认证"
                :width="800"
                v-model="visible_verfity"
                @ok="handleOk"
                @cancel="verfity_close"
        >
            <a-form :autoFormCreate="(form)=>{this.form = form}">

                <a-form-item
                        hasFeedback
                >
          <a-input placeholder="请输入您的真实姓名" v-model="verfity.realname" id="realname"/>
                </a-form-item>
        <a-form-item label="身份证号" hasFeedback>
          <a-input placeholder="请输入您的身份证号" v-model="verfity.sfz" id="sfz"/>
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
        components: {
        },
        data() {
            return {
                verfity: [],
      verfity_url: '/Init/index/Verfity',
      getarea_url: '/Init/index/getarea',
      getverfity_url: '/Init/index/VerfityStatus',
                visible_verfity: false,
      intervaltask: '',
      options: []
            }
        },
        created() {
    this.ajax_verfity()
    this.rungetc4()
        },
        beforeDestroy () {
            clearInterval(this.intervaltask)
        },
        methods: {
            ...mapActions(['Logout']),
            onChangebind(value){
                this.verfity.sfd = value[2]
            },
            verfity_close(){
      let that = this
      that.ajax_verfity()
            },
            handleOk(){
      let that = this
                this.$http.post(that.verfity_url,
                    {
                        realname: that.verfity.realname,
                        sfz: that.verfity.sfz,
          sfd: 64
        })
        .then(res => {
                    if (res.status === 200) {
                        that.$message.success('身份认证成功！', 5)
            that.visible_verfity = false
                    } else {
                        that.$message.error('错误：' + res.msg, 3)
                    }
                })

            },
            loginout(){
      let that = this
                that.Logout({}).then(() => {
                    window.location.reload()
                }).catch(err => {
                    that.$message.error({
                        title: '错误',
                        description: err.message
                    })
                })
            },

            ajax_verfity(){
      let that = this
      clearInterval(that.intervaltask)
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
          that.visible_verfity = false
          clearInterval(that.intervaltask)
          return false
                    } else {
          that.visible_verfity = true
                    }
                })


            },

            rungetc4(){
      this.$http.post(this.getarea_url).then(res => {
                    if (res.status === 200) {
          this.options = res.data
                    } else {
                        this.$message.error('系统异常：' + res.msg, 3)
                    }
                })
    }
        }
    }
</script>
<style>
    .ant-avatar > img {
        width: 26px!important;
        height: auto!important;;
        display: initial!important;
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