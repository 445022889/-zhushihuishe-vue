<template>
    <md-field style="padding: 0 0.2rem" :class="{'show-enter-transfer ':displaytype,notshow:!displaytype}">
        <md-cell-item :title="name" :brief="desc" style="text-align: left">


            <md-icon name="clear" color="#2f86f6" size="lg" slot="right" @click="back_"></md-icon>
        </md-cell-item>
    </md-field>
</template>

<script>
    export default {
        name: "BingheHeader",
        props: {
            name: {
                type: String,
                default: function () {
                    return "店铺名字"
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

</style>