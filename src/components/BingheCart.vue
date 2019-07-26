<template>
    <div
            :class="{'show-enter-up-transfer':displaytype}"
     >
        <div style="width: 72vw;line-height: 1rem;height: 1rem;float: left;
        background: rgba(52, 57, 64, 0.95);font-size: 0.26rem;padding: 0 0.5rem;text-align: left">{{showtotal}}

        </div>
        <div style="width: 28vw;text-align: center;display:block;line-height: 1rem;height: 1rem;background: linear-gradient(90deg, rgb(252, 115, 83) 0%, rgb(252, 145, 83) 100%);color: #fff;float: left;;font-size: 0.28rem;font-weight: bold;
">结算订单
        </div>

    </div>
</template>

<script>
    export default {
        name: "BingheCart",
        props: {
            showtotal: {
                type: Number,
                default: function () {
                    return 0.0
                }
            },
            desc: {
                type: String,
                default: function () {
                    return "店铺简介"
                }
            }

        },
        data() {
            return {
                displaytype: false
            }
        }, created() {
            var vm = this
            setTimeout(function () {
                vm.displaytype = true
            }, 400)

        },
        methods: {
            back_() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
.shopcart{
    width: 100vw;
    display: block;
    position: fixed;
    margin-left: 0;
    left: 0;
    bottom: 0;        opacity: 0;
    height: 1rem;
    color: #ffb300;
}
</style>