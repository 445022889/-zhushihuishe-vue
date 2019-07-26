<template>
    <div>

        <BingheHeader/>

        <div class="md-example-child-scroll-view-5">
            <md-tab-bar

                    :class="{'show-enter-transfer ':displaytype,notshow:!displaytype,'m-header':true}"
                    v-model="activeBlockIndex"
                    :items="MainData"
                    :hasInk="false"
                    :max-length="5"
                    ref="tabBar"
                    @change="$_onTabChange"
            ></md-tab-bar>


            <md-scroll-view
                    class="scroll-view-with-tab-bar sp_shop"
                    :class="{'show-leave-transfer':displaytype,notshow:!displaytype}"
                    ref="scrollView"
                    :scrolling-x="false"
                    @scroll="$_onScroll"
                    @mousedown.native="$_onScrollStart"
                    @touchstart.native="$_onScrollStart"
            >
                <div
                        v-for="i in MainData"
                        :key="i.name"
                        class="scroll-view-category"
                >


                    <md-cell-item
                            @click="tagtest"
                            class="scroll-view-list single_item"
                            v-for="(j,index) in i.data"
                            :key="index"
                            :title="j.catename +' / '+j.name" :brief="j.size+' / '+MainData[i.name].label"
                            style="text-align: left;">
                        <md-tag
                                slot="default"
                                size="small"
                                shape="circle"
                                sharp="bottom-left"
                                type="fill"
                                fill-color="linear-gradient(90deg, #FC7353 0%, #FC9153 100%)"
                                font-color="#fff"
                                font-weight="bold"
                                style="margin: 3px 0;float: left;line-height: 0.36rem;font-weight:bold;"
                        >￥{{ j.sale_price}}
                        </md-tag>

                        <img class="holder" slot="left" :src="j.pic"/>
                        <md-stepper slot="right" :step="j.increase" :min="0" @change="e=>tagtest(e,j.id,j.sale_price,j.catename,j.pic,j.name,j.size)"/>

                    </md-cell-item>


                </div>
            </md-scroll-view>

            <BingheCart :showtotal="total_price"/>
        </div>


    </div>
</template>

<script>
    import {ScrollView, TabBar, Toast} from 'mand-mobile'
    import BingheHeader from "@/components/BingheHeader"
    import BingheCart from "@/components/BingheCart"


    const debounce = function (fn, delay) {
        let timer
        return function () {
            const context = this
            timer && clearTimeout(timer)
            timer = setTimeout(function () {
                fn.apply(context, arguments)
            }, delay)
        }
    }
    export default {
        components: {
            [ScrollView.name]: ScrollView,
            [Toast.name]: Toast,
            [TabBar.name]: TabBar, BingheHeader, BingheCart
        },
        data() {
            return {
                dimensions: [],
                scrollY: 0,
                isManual: false,
                activeBlockIndex: "0",
                displaytype: false,
                MainData: [],
                check_goods: []
            }
        },
        computed: {
            total_price(){
                let price = 0

                this.check_goods.forEach(item => {


                        price += Number(item.price) * Number(item.num)




                })

                return price
            }

        },
        created(){


        },
        mounted() {
            Toast.loading('加载中...')
            this.$http.get("Homepage/index/List_Goods").then(res => {
                const rec_data = []
                let get_data = res.data
                for (let prop in get_data) {
                    let temp_obj = {
                        name: prop,
                        id: get_data[prop]["name"],
                        uid: Number(get_data[prop]["name"]),
                        label: get_data[prop]["label"],
                        data: get_data[prop]["data"]
                    }
                    rec_data.push(temp_obj)
                }
                this.MainData = rec_data
                console.log(rec_data)
                setTimeout(() => {
                    this.displaytype = true
                    this.$_initScrollBlock()
                    this.$refs.scrollView.reflowScroller();
                    Toast.hide()
                }, 500)

            })
        }, created() {

        },
        methods: {
            tagtest(e,z,y,x,w,v,u) {
            if(typeof e !="number") return false;
                const temp = this.check_goods
                let temp_obj = {
                    id: z,
                    price:y,
                    num: e,
                    catename: x,
                    pic: w,
                    size: u,
                    name:v
                }
                temp.push(temp_obj)
                this.check_goods = temp

            },
            $_initScrollBlock() {
                const blocks = this.$el.querySelectorAll('.scroll-view-category')

                let offset = 0
                Array.prototype.slice.call(blocks).forEach((block, index) => {
                    const innerHeight = block.clientHeight
                    this.$set(this.dimensions, index, [offset, offset + innerHeight])
                    offset += innerHeight
                })

                setTimeout(() => {
                    this.$refs.tabBar.reflow()
                }, 10)
            },
            $_onScrollStart() {
                this.activeBlockIndex = "0"
                this.isManual = false
            },
            $_onScroll({scrollTop}) {
                if (!this.isManual) {
                    this.dimensions.some((dimension, index) => {
                        if (scrollTop >= dimension[0] && scrollTop <= dimension[1]) {
                            this.activeBlockIndex = String(index)
                            return true
                        }
                    })
                }
            },
            $_onTabChange(item, index) {
                this.isManual = true
                debounce(() => {
                    const offsetTop = this.dimensions[index][0]
                    this.$refs.scrollView.scrollTo(0, offsetTop, true)
                    this.scrollY = offsetTop
                }, 100)()
            },
        },
    }

</script>
<style lang="css" scoped>
    .m-header >>> .md-tab-bar-inner .md-scroll-view .scroll-view-container.horizon {
        display: table-row-group !important;
    }

    .sp_shop {
        padding: 0 .3rem;
    }

    .md-example-child-scroll-view-5 > > > .scroll-view-container {
        padding-bottom: 2.5rem;
        padding-top: 100px;
    }

    .md-example-child-scroll-view-5 {
        position: relative;
        height: calc(100vh - 0.5rem);
        background: #FFF
    }

    .md-example-child-scroll-view-5 > > > .md-tab-bar {

        padding: 0;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        z-index: 2;
        box-shadow: 0 2px 8px #f0f0f0;
        background: #FFFFFF;
    }

    .scroll-view-item {
        padding: 30px 0;
        text-align: center;
        font-size: 32px;
        border-bottom: .5px solid #efefef
    }

    .holder {
        display: block;
        width: 90px;
        height: 90px;
        background: #FFFFFF;
    }

    .single_item >>> .md-cell-item-title {
        font-size: 0.28rem !important;
    }</style>

