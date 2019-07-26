<template>
    <div class="md-example-child md-example-child-tabs md-example-child-tab-bar-4"   :class="{isshow:displaytype,notshow:!displaytype}">
        <md-tab-bar v-model="current" :items="items" :has-ink="false">
            <template slot="item" slot-scope="{ item }">
                <div class="custom-item">
                    <div class="icon">
                        <md-icon :name="item.icon"/>
                    </div>
                    <div class="text">
                        <span v-text="item.label"></span>
                    </div>
                </div>
            </template>
        </md-tab-bar>
    </div>
</template>

<script>
    export default {
        name: "BingheFooter",
        props: {
            items:{
                type:Array,
                default:  function () {
                    return[
                        {name: 1, label: "商城首页", icon: "home"},
                        {name: 2, label: "订单中心", icon: "coupon"},
                        {name: 3, label: "个人中心", icon: "user"}
                    ]
                }

            },
            current:{
                type: Number,
                default:function () {
                    return 1
                }
            }

        },
        data() {
            return {   displaytype: false
            };
        }, created() {
            var vm = this
            setTimeout(function () {
                vm.displaytype = true
            }, 400)

        },
    }
</script>

<style scoped>
    .notshow {
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
        opacity:0;
    }
    .isshow{

        animation-duration: .3s;
        animation-name: enterheader;
        animation-iteration-count: 1;

    }
    @keyframes enterheader {

        from{
            -webkit-transform: translateY(60px);
            transform: translateY(60px);
            opacity:0;
        }
        to{
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity:1;
        }

    }
    @-webkit-keyframes enterheader {

        from{
            -webkit-transform: translateY(-60px);
            transform: translateY(60px);
        }
        to{
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }

    }
    .md-example-child-tab-bar-4 .custom-item .text {
        font-size: 20px;
    }

    .md-example-child-tab-bar-4 .custom-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        flex: 1;
    }
</style>