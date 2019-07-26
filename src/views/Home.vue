<template>
    <div style="height:100vh;-webkit-box-orient:vertical;display:-webkit-box;">
        <md-notice-bar icon="discovery" style="text-align:left">需要获取您的位置才能正常使用系统，请放开权限</md-notice-bar>
        <div class="md_swiper_top">
            <md-swiper
                    @before-change="beforeChange"
                    @after-change="afterChange"
                    ref="swiper"
                    :is-prevent="false"
                    :useNative-driver="false"
            >
                <md-swiper-item :key="$index" v-for="(item, $index) in simple">
                    <div class="banner-item" :style="{'background': `${item.color}`}">{{item.text}}</div>
                </md-swiper-item>
            </md-swiper>

        </div>


        <div style="width:100vw;-webkit-box-flex:1;overflow:hidden" class="scroll-view">
            <md-scroll-view ref="scrollView" :scrolling-x="false" @refreshing="$_onRefresh">
                <md-scroll-view-refresh
                        slot="refresh"
                        slot-scope="{ scrollTop, isRefreshActive, isRefreshing }"
                        :scroll-top="scrollTop"
                        :is-refreshing="isRefreshing"
                        :is-refresh-active="isRefreshActive"
                ></md-scroll-view-refresh>
                <md-field style="padding-top:0">
                    <md-cell-item
                            v-for="i in list"
                            :key="i"
                            :title="'店铺'+i"
                            brief="展示摘要描述"
                            addon="进入店铺"
                            arrow
                            @click="handleEnterShop()"
                    >
                        <span class="holder" slot="left"></span>
                    </md-cell-item>
                </md-field>
            </md-scroll-view>
        </div>
        <BingheFooter :current="1"/>
    </div>
</template>
<script>
    import simple from "mand-mobile/components/swiper/demo/data/simple";
    import BingheFooter from "@/components/BingheFooter"

    export default {
        name: "swiper-demo",
        components: {
            BingheFooter
        },
        data() {
            return {
                simple,
                list: 50,
                isFinished: false,
                mainCate:[
                    {name: 1, label: "分类1111111"},
                    {name: 2, label: "分类2"},
                    {name: 3, label: "分类3"},
                    {name: 4, label: "分类4"},
                    {name: 5, label: "分类5"},
                    {name: 6, label: "分类6"},
                    {name: 7, label: "分类7"},
                    {name: 8, label: "分类8"},
                    {name: 9, label: "分类9"},
                    {name: 10, label: "分类10"}
                ]
            };
        },
        mounted() {
            // Simulation of asynchronous
            setTimeout(() => {
                this.simple = simple.concat(simple);
            }, 10000);
            // Simulation of asynchronous
            setTimeout(() => {
                this.simple = simple;
            }, 24500);
            window.triggerSwiper0 = () => {
                this.goto();
            };
            window.triggerSwiper1 = () => {
                this.play();
            };
            window.triggerSwiper2 = () => {
                this.stop();
            };
        },
        methods: {

            handleEnterShop() {
                this.$router.push("ShopIndex")
            },
            $_onRefresh() {
                // async data
                setTimeout(() => {
                    this.list += 5;
                    this.$refs.scrollView.finishRefresh();
                }, 2000);
            },
            setValue(id, value) {
                document.querySelector(id) &&
                (document.querySelector(id).innerHTML = value);
            },
            beforeChange(from, to) {
                this.setValue("#valueSwiper0", from);
                this.setValue("#valueSwiper1", to);
            },
            afterChange(from, to) {
                this.setValue("#valueSwiper2", from);
                this.setValue("#valueSwiper3", to);
            },
            fn(index) {
                this.setValue("#valueSwiper4", index);
            },
            goto() {
                this.$refs.swiper.goto(2);
            },
            play() {
                this.$refs.swiper.play();
            },
            stop() {
                this.$refs.swiper.stop();
            }
        }
    };
</script>

<style>
    .md_swiper_top {
        height: 250px;
    }

    .md_swiper_top .banner-item {
        float: left;
        width: 100%;
        height: 100%;
        line-height: 250px;
        text-align: center;
        font-size: 28px;
        color: #fff;
        box-align: center;
        align-items: center;
        box-pack: center;
        justify-content: center;
        text-decoration-line: none;
    }


    .scroll-view {
        background: #fff;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .scroll-view .scroll-view-item {
        padding: 30px 0;
        text-align: center;
        font-size: 28px;
        font-family: DINAlternate-Bold;
        border-bottom: 0.5px solid #efefef;
    }

    .holder {
        display: block;
        width: 88px;
        height: 88px;
        border-radius: 44px;
        background-color: #e6e6e6;
    }

    .md-cell-item-title,
    .md-cell-item-brief {
        text-align: left;
    }
</style>