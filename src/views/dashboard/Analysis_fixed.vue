<template>
  <div class="page-header-index-wide">
    <a-card>
      <!--<a-card-grid style="width:50%;textAlign:center">
        <a-avatar
          style="display: block;backgroundColor:#1890ff;margin: 0 auto 6px"
          icon="shopping"
        />我的订单
      </a-card-grid>-->
      <router-link class="login" :to="{ name: 'Activity' }" style="color: rgba(82,82,82,0.79)">
        <a-card-grid style="width:50%;textAlign:center">
          <a-avatar style="display: block;backgroundColor:#1890ff;margin: 0 auto 6px" icon="user"/>活动
        </a-card-grid>
      </router-link>
      <router-link class="login" :to="{ name: 'Info' }" style="color: rgba(82,82,82,0.79)">
        <a-card-grid style="width:50%;textAlign:center">
          <a-avatar style="display: block;backgroundColor:#1890ff;margin: 0 auto 6px" icon="user"/>个人资料
        </a-card-grid>
      </router-link>
      <router-link class="login" :to="{ name: 'Applyagent' }" style="color: rgba(82,82,82,0.79)">
        <a-card-grid style="width:50%;textAlign:center">
          <a-avatar
            style="display: block;backgroundColor:#1890ff;margin: 0 auto 6px"
            icon="ant-design"
          />申请代理
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
          <a-avatar style="display: block;backgroundColor:#1890ff;margin: 0 auto 6px" icon="sound"/>公告
        </a-card-grid>
      </router-link>
      <router-link class="login" :to="{ name: 'ShareList' }" style="color: rgba(82,82,82,0.79)">
        <a-card-grid style="width:50%;textAlign:center">
          <a-avatar style="display: block;backgroundColor:#1890ff;margin: 0 auto 6px" icon="wifi"/>我的分享
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
      <div slot="message" style="font-size: 12px">退出系统，可以直接点击右侧按钮！
        <a-tag color="red" style="float: right" @click="loginout">退出账号</a-tag>
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
        <a-form-item hasFeedback>
          <a-input placeholder="请输入您的真实姓名" v-model="verfity.realname" id="realname"/>
        </a-form-item>
        <a-form-item label="身份证号" hasFeedback>
          <a-input placeholder="请输入您的身份证号" v-model="verfity.sfz" id="sfz"/>
        </a-form-item>
      </a-form>
      <template slot="footer">
        <a-button type="danger" @click="loginout">退出账号</a-button>
        <a-button key="back" @click="verfity_close">取消</a-button>
        <a-button key="submit" @click="handleOk">提交信息</a-button>
      </template>
    </a-modal>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Analysis',
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
  beforeDestroy() {
    clearInterval(this.intervaltask)
  },
  methods: {
    ...mapActions(['Logout']),
    onChangebind(value) {
      this.verfity.sfd = value[2]
    },
    verfity_close() {
      let that = this
      that.ajax_verfity()
    },
    handleOk() {
      let that = this
      this.$http
        .post(that.verfity_url, {
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
    loginout() {
      let that = this
      that
        .Logout({})
        .then(() => {
          window.location.reload()
        })
        .catch(err => {
          that.$message.error({
            title: '错误',
            description: err.message
          })
        })
    },
    ajax_verfity() {
      let that = this
      clearInterval(that.intervaltask)
      this.$http.post(that.getverfity_url).then(res => {
        if (res.status === 404) {
          that.$message.error('用户登录状态已失效，请重新登录！', 5)
          return that
            .Logout({})
            .then(() => {
              window.location.reload()
            })
            .catch(err => {
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
    rungetc4() {
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