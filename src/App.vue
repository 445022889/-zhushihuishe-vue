<template>
    <a-locale-provider :locale="locale">
        <div id="app">
            <router-view/>
        </div>
    </a-locale-provider>
</template>

<script>
    import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
    import enquireScreen from '@/utils/device'
    import {version} from 'ant-design-vue'

    export default {
        data () {
            return {
                locale: zhCN,
                version
            }
        },
        created () {
            const that = this
            console.log('use Ant-Design Of Vue:', version)
            enquireScreen(deviceType => {
                // tablet
                if (deviceType === 0) {
                    that.$store.commit('TOGGLE_DEVICE', 'mobile')
                    that.$store.dispatch('setSidebar', false)
                }
                // mobile
                else if (deviceType === 1) {
                    that.$store.commit('TOGGLE_DEVICE', 'mobile')
                    that.$store.dispatch('setSidebar', false)
                }
                else {
                    that.$store.commit('TOGGLE_DEVICE', 'desktop')
                    that.$store.dispatch('setSidebar', true)
                }

            })
        }
    }
</script>
<style>
    #app {
        height: 100%;

    }
.main{    padding: 5%!important;

}.container{
        padding-top: 10%!important;
        padding-bottom: 10% !important;
 }

    td {
        font-size: 12px !important;
    }

    td, th {
        text-align: center !important;
    }

    .ant-menu-root {
        height: 100% !important;

        overflow: auto;
    }



    input, .ant-select-selection__rendered, .ant-select-dropdown-menu-item, .ant-form-item-label label, .ant-btn-sm, .ant-tooltip-inner,.ant-radio-button-wrapper span {
        font-size: 12px !important;
    }

    th {
        font-size: 13px !important;
    }

    .ant-tooltip-inner {
        background-color: #e6f7ff !important;
        box-shadow: none!important;
        border: 1px solid  rgba(24, 144, 255,0.1)!important;
        color: #1890ff!important;

    }

    .ant-tooltip-arrow {
        border-top-color: #e6f7ff !important;
    }
    button, html [type="button"], [type="reset"], [type="submit"]{

        font-size: 12px!important;
        box-shadow: 0 5px 15px rgba(0,0,0, 0.1)!important;
    }
    .ant-modal-close{
        box-shadow:none!important;
    }

    .ant-btn-primary{

        box-shadow: 0 5px 15px rgba(9, 109, 217, 0.4)!important;
        font-size: 12px!important;
    }
    .ant-btn.ant-btn-default.ant-btn-sm:hover{
        background: #1890ff!important;
        color: #fff;
    }
.ant-form-explain,.ant-alert-message,.ant-divider-inner-text{
    font-size: 12px!important;
}
.ant-list-item-meta-description{
    font-size: 12px!important;line-height: 18px!important;
}
    .ant-radio-button-wrapper-disabled.ant-radio-button-wrapper-checked{
        background-color: #3f6cc8!important;
        border-color: #3f6cc8!important;
    }
</style>