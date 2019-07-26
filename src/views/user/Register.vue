<script src="../../defaultSettings.js"></script>
<template>
    <div class="main user-layout-register">
        <a-form ref="formRegister" :autoFormCreate="(form)=>{this.form = form}" id="formRegister">
            <a-form-item
                    :fieldDecoratorId="'mobile'"
                    :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入正确的手机号', pattern: /^1[3456789]\d{9}$/ }, { validator: this.handlePhoneCheck } ], validateTrigger: ['change', 'blur'] }">
                <a-input size="large" placeholder="您的手机号码作为登录用户名" v-model="mobile">
                    <a-select slot="addonBefore" size="large" defaultValue="+86">
                        <a-select-option value="+86">+86</a-select-option>
                    </a-select>
                </a-input>
            </a-form-item>
            <a-form-item
                    :fieldDecoratorId="'name'"
                    :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入您的昵称' }, ], validateTrigger: ['change', 'blur']}">
                <a-input placeholder="请输入您的昵称" size="large">

                </a-input>
            </a-form-item>

            <a-popover placement="rightTop" trigger="click" :visible="state.passwordLevelChecked">
                <template slot="content">
                    <div :style="{ width: '240px' }">
                        <div :class="['user-register', passwordLevelClass]">强度：<span>{{ passwordLevelName }}</span>
                        </div>
                        <a-progress :percent="state.percent" :showInfo="false" :strokeColor=" passwordLevelColor "/>
                        <div style="margin-top: 10px;">
                            <span>请至少输入 6 个字符。请不要使用容易被猜到的密码。</span>
                        </div>
                    </div>
                </template>
                <a-form-item
                        :fieldDecoratorId="'password'"
                        :fieldDecoratorOptions="{rules: [{ required: true, message: '至少6位密码，区分大小写'}, ], validateTrigger: ['change', 'blur']}">
                    <a-input size="large" :type="'password'" @click="handlePasswordInputClick" autocomplete="false"
                             placeholder="请输入您的登录密码"></a-input>
                </a-form-item>
            </a-popover>

            <a-form-item
                    fieldDecoratorId="password_"
                    :fieldDecoratorOptions="{rules: [{ required: true, message: '至少6位密码，区分大小写' }, { validator: this.handlePasswordCheck }], validateTrigger: ['change', 'blur']}">

                <a-input size="large" :type="'password'" autocomplete="false" placeholder="确认登录密码"></a-input>
            </a-form-item>

            <a-popover placement="rightTop" trigger="click" :visible="state.passwordLevelChecked">
                <template slot="content">
                    <div :style="{ width: '240px' }">
                        <div :class="['user-register', passwordLevelClass]">强度：<span>{{ passwordLevelName }}</span>
                        </div>
                        <a-progress :percent="state.percent" :showInfo="false" :strokeColor=" passwordLevelColor "/>
                        <div style="margin-top: 10px;">
                            <span>请至少输入 6 个字符。请不要使用容易被猜到的密码。</span>
                        </div>
                    </div>
                </template>
                <a-form-item
                        fieldDecoratorId="password2"
                        :fieldDecoratorOptions="{rules: [{ required: true, message: '至少6位密码，区分大小写'}, ], validateTrigger: ['change', 'blur']}">
                    <a-input size="large" :type="'password'" @click="handlePasswordInputClick" autocomplete="false"
                             placeholder="请输入您的二级密码" v-model="password2"></a-input>
                </a-form-item>
            </a-popover>

            <a-form-item
                    fieldDecoratorId="password2_"
                    :fieldDecoratorOptions="{rules: [{ required: true, message: '至少6位密码，区分大小写' }, { validator: this.handlePassword2Check }], validateTrigger: ['change', 'blur']}">

                <a-input size="large" :type="'password'" autocomplete="false" placeholder="确认二级密码"></a-input>
            </a-form-item>

            <a-form-item v-if="check_pid"
                         fieldDecoratorId="pid"
                         :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入正确的手机号', pattern: /^1[3456789]\d{9}$/ }, { validator: this.handlePhoneCheck } ], validateTrigger: ['change', 'blur'] }">
                <a-input size="large" placeholder="请输入推荐人的手机号码" v-model="pid" v-if="check_pid">
                    <a-select slot="addonBefore" size="large" defaultValue="+86">
                        <a-select-option value="+86">+86</a-select-option>
                    </a-select>
                </a-input>


            </a-form-item>
            <a-form-item v-if="!check_pid"
            >


                <a-alert :message="'此页面为'+pid+'的邀请注册链接'" type="success" showIcon v-if="!check_pid"/>
            </a-form-item>

            <!--          <a-row :gutter="16">
                          <a-col class="gutter-row" :span="16">
                              <a-form-item
                                      fieldDecoratorId="captcha"
                                      :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}">
                                  <a-input size="large" type="text" placeholder="验证码">  v-model="captcha"
                                      <a-icon slot="prefix" type='mail' :style="{ color: 'rgba(0,0,0,.25)' }"/>
                                  </a-input>
                              </a-form-item>
                          </a-col>
                          <a-col class="gutter-row" :span="8">
                              <a-button
                                      class="getCaptcha"
                                      size="large"
                                      :disabled="state.smsSendBtn"
                                      @click.stop.prevent="getCaptcha"
                                      v-text="!state.smsSendBtn && '获取验证码'||(state.time+' s')"></a-button>
                          </a-col>
                      </a-row>-->

            <a-form-item>
                <a-button
                        size="large"
                        type="primary"
                        htmlType="submit"
                        class="register-button"
                        :loading="sendBtn"
                        @click.stop.prevent="handlesend"
                        :disabled="sendBtn">获取短信验证码
                </a-button>
                <!--       <a-button
                               size="large"
                               type="primary"
                               htmlType="submit"
                               class="register-button"
                               :loading="registerBtn"
                               @click.stop.prevent="handleSubmit"
                               :disabled="registerBtn">注册
                       </a-button>-->

                <router-link class="login" :to="{ name: 'login' }">使用已有账户登录</router-link>
            </a-form-item>

        </a-form>
        <a-modal
                title="请输入验证码"
                :width="400"
                v-model="showtype"
                @ok="handleSubmit"
        >


                <a-form-item
                        hasFeedback
                >
                    <a-tooltip
                            :trigger="['focus']"
                            overlayClassName="numeric-input"
                    >
    <span slot="title" v-if="smscode" class="numeric-input-title">
      {{smscode !== '-' ? formatNumber(smscode) : '-'}}
    </span>
                        <template slot="title" v-else style="text-align: center">
                            请输入6位数字验证码
                        </template>
                        <a-input
                                :value="smscode"
                                @change="onChangei"
                                @blur="onBluri"
                                placeholder="Input a number"
                                maxLength="25"
                                style="width: 100%;text-align: center"
                        />
                    </a-tooltip>
                </a-form-item>



        </a-modal>


    </div>


</template>

<script>
    import {mixinDevice} from '@/utils/mixin.js'
    import {getSmsCaptcha} from '@/api/login'
    function formatNumber (value) {
        value += ''
        const list = value.split('.')
        const prefix = list[0].charAt(0) === '-' ? '-' : ''
        let num = prefix ? list[0].slice(1) : list[0]
        let result = ''
        result = num + result
        return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`
    }
    const levelNames = {
        0: '低',
        1: '低',
        2: '中',
        3: '强'
    }
    const levelClass = {
        0: 'error',
        1: 'error',
        2: 'warning',
        3: 'success'
    }
    const levelColor = {
        0: '#ff0000',
        1: '#ff0000',
        2: '#ff7e05',
        3: '#52c41a',
    }
    export default {
        name: 'Register',
        components: {},
        mixins: [mixinDevice],
        data() {
            return {
                form: null,
                send_url: "/Init/index/SendSms",
                reg_url: "/Init/index/AddUser",
                mobile: "",
                user: "",
                pid: "",
                passowrd: "",
                password2: "",
                check_pid: true,
                captcha: "",
                state: {
                    time: 60,
                    smsSendBtn: false,
                    passwordLevel: 0,
                    passwordLevelChecked: false,
                    percent: 10,
                    progressColor: '#FF0000'
                },
                registerBtn: false,
                sendBtn: false,
                showtype: false,
                smsmd5: "",
                smscode: ""
            }
        },
        computed: {
            passwordLevelClass () {
                return levelClass[this.state.passwordLevel]
            },
            passwordLevelName () {
                return levelNames[this.state.passwordLevel]
            },
            passwordLevelColor () {
                return levelColor[this.state.passwordLevel]
            }
        },
        created() {
            this.checkpid();
        },
        methods: {

            formatNumber,
            onChangei (e) {
                const { value } = e.target
                const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/
                if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
                    this.smscode = value
                }
            },
            // '.' at the end or only '-' in the input box.
            onBluri () {
                const { value, onChange } = this
                if (value.charAt(value.length - 1) === '.' || value === '-') {
                    onChange({ smscode: value.slice(0, -1) })
                }
            },
            handlesend(){


                this.form.validateFields((err, values) => {
                    let mobile;
                    if (!err === null) return false

                    mobile = values.mobile;


                    this.$http.post(this.send_url,
                        {mobile: mobile}).then(res => {

                        if (res.status === 200) {
                            this.showtype = true;
                            this.$message.success('短信已发送成功，请注意查收', 8)
                            this.smsmd5 = res.data.requestid;
                        } else {
                            this.$message.error(res.msg, 3)
                        }
                    })
                })

            },
            checkpid(){
                let that = this;
                let name = "pid";
                let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                let r = window.location.search.substr(1).match(reg);
                if (r != null) {
                    that.pid = unescape(r[2]);
                    that.check_pid = false
                }


            },

            handlePasswordLevel (rule, value, callback) {

                let level = 0

                // 判断这个字符串中有没有数字
                if (/[0-9]/.test(value)) {
                    level++
                }
                // 判断字符串中有没有字母
                if (/[a-zA-Z]/.test(value)) {
                    level++
                }
                // 判断字符串中有没有特殊符号
                if (/[^0-9a-zA-Z_]/.test(value)) {
                    level++
                }
                this.state.passwordLevel = level
                this.state.percent = level * 30
                if (level >= 2) {
                    if (level >= 3) {
                        this.state.percent = 100
                    }
                    callback()
                } else {
                    if (level === 0) {
                        this.state.percent = 10
                    }
                    callback(new Error('密码强度不够'))
                }
            },

            handlePassword2Check (rule, value, callback) {
                const password = this.form.getFieldValue('password2')
                console.log('value', value)
                if (value === undefined) {
                    callback(new Error('请输入密码'))
                }
                if (value && password && value.trim() !== password.trim()) {
                    callback(new Error('两次密码不一致'))
                }
                callback()
            },
            handlePasswordCheck (rule, value, callback) {
                const password = this.form.getFieldValue('password')
                console.log('value', value)
                if (value === undefined) {
                    callback(new Error('请输入密码'))
                }
                if (value && password && value.trim() !== password.trim()) {
                    callback(new Error('两次密码不一致'))
                }
                callback()
            },

            handlePhoneCheck (rule, value, callback) {
                console.log('handlePhoneCheck, rule:', rule)
                console.log('handlePhoneCheck, value', value)
                console.log('handlePhoneCheck, callback', callback)

                callback()
            },

            handlePasswordInputClick () {
                if (!this.isMobile()) {
                    this.state.passwordLevelChecked = false
                    return
                }
                this.state.passwordLevelChecked = false
            },

            handleSubmit() {


                this.form.validateFields((err, values) => {
                    if (!err) {
                        if (!this.check_pid) {
                            values.pid = this.pid
                        }
                        values.smsmd5 = this.smsmd5;
                        values.smscode = this.smscode;
                        this.$http.post(this.reg_url,
                            {
                                ...values

                            }).then(res => {
                            if (res.status === 200) {
                                this.$message.success('注册账号成功，正在转入登录入口', 5)

                                this.$router.push({name: 'login'})
                            } else {
                                this.$message.error('错误：' + res.msg, 3)
                            }
                        })


                        //  this.$router.push({name: 'registerResult', params: {...values}})
                    }
                })
            },

            getCaptcha(e) {
                e.preventDefault()
                const that = this

                this.form.validateFields(['mobile'], {force: true},
                    (err, values) => {
                        if (!err) {
                            this.state.smsSendBtn = true

                            const interval = window.setInterval(() => {
                                if (that.state.time-- <= 0) {
                                    that.state.time = 60
                                    that.state.smsSendBtn = false
                                    window.clearInterval(interval)
                                }
                            }, 1000)

                            const hide = this.$message.loading('验证码发送中..', 0)

                            getSmsCaptcha({mobile: values.mobile}).then(res => {
                                setTimeout(hide, 2500)
                                this.$notification['success']({
                                    message: '提示',
                                    description: '验证码获取成功，您的验证码为：' + res.result.captcha,
                                    duration: 8
                                })
                            }).catch(err => {
                                setTimeout(hide, 1)
                                clearInterval(interval)
                                that.state.time = 60
                                that.state.smsSendBtn = false
                                this.requestFailed(err)
                            })
                        }
                    }
                )
            },
            requestFailed(err) {
                console.log(err)
                this.$notification['error']({
                    message: '错误',
                    description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
                    duration: 4,
                })
                this.registerBtn = false
            },
        },
        watch: {
            'state.passwordLevel' (val) {
                console.log(val)

            }
        }
    }
</script>
<style lang="scss">
    .user-register {

        &.error {
            color: #ff0000;
        }

        &.warning {
            color: #ff7e05;
        }

        &.success {
            color: #52c41a;
        }

    }

    .user-layout-register {
        .ant-input-group-addon:first-child {
            background-color: #fff;
        }
    }
</style>
<style lang="scss" scoped>
    .user-layout-register {

        & > h3 {
            font-size: 16px;
            margin-bottom: 20px;
        }

        .getCaptcha {
            display: block;
            width: 100%;
            height: 40px;
        }

        .register-button {
            width: 50%;
        }

        .login {
            float: right;
            line-height: 40px;
        }
    }
</style>