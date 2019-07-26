<template>
    <div class="page-header-index-wide">
        <a-card title="提货收益计算器">
            <a-form layout="vertical">
                <a-row :gutter="48">
                    <a-col :md="12" :sm="24">
                        <a-form-item label="提货金额">
                            <a-input-number style="width: 50%"
                                    placeholder="请输入提货金额" v-model="thje"/>
                        </a-form-item>
                    </a-col>
                    <a-col :md="12" :sm="24">
                        <a-form-item label="提货天数">
                            <a-input-number style="width: 50%"
                                    placeholder="请输入天数" v-model="thday"/>
                        </a-form-item>
                    </a-col>
                    <a-col :md="12" :sm="24">
                        <a-form-item label="代理比例">
                            <a-radio-group :options="plainOptions" v-model="dlbl" @change="onChangeDl" defaultValue="0.004"/>
                        </a-form-item>
                    </a-col>
                    <a-col :md="12" :sm="24">
                        <a-form-item label="是否复投（每产生3万元宝，即复投1万）">
                            <a-checkbox defaultChecked v-model="futou" @change="onChange">复投</a-checkbox>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-button type="primary" block  @click="Fnincome">计算收益</a-button>
            </a-form>
        </a-card>
        <a-modal
                title="计算结果"
                :width="600"
                v-model="visible_shouyi"
                @cancel="handClose"
                @ok="handClose"
        >
            <a-card>
                <a-alert :message="'银豆：'+yidou" banner  type="info"/>
                <a-alert :message="'金豆：'+jindou" banner  type="info"/>
                <a-alert :message="'合计元宝：'+totalyuanbao" banner  type="info"/>
            </a-card>
        </a-modal>
       
        
        
    </div>
</template>
<script>
    const plainOptions = [
        {label: '0.4%', value: '0.004'},
        {label: '0.6%', value: '0.006'},
    ]
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: 'Analysis',
        data () {
            return {
                thje: "",
                thday: "",
                dlbl: '0.004',
                futou: 1,
                plainOptions,
                incomecount_url: "/Init/index/incomecount",
                visible_shouyi: false,
                yidou: 0,
                bili: "0%",
                outjindou: 0,
                jindou: 0,
                totaljindou: 0,
                yuanbao: 0,
                totalyuanbao: 0,
            }
        },
        created () {
            this.dlbl.plainOptions = 0.004;
        },
        methods: {
            onChange (e) {
                //获取是否勾选复投
                if (e.target.checked) {
                    this.futou = 1
                } else {
                    this.futou = 0
                }
            },
            onChangeDl(e) {
                //获取代理比例
                this.dlbl = e.target.value
            },
            Fnincome() {
                //计算收益
                
                let that=this;
                /*
               
                //提货金额输入值验证
                if (that.thje == "" || that.thje == undefined) {
                    that.$message.error('请输入提货金额！', 5)
                } else if (hat.thje <= 0) {
                    that.$message.error('提货金额不能小于0', 5)
                }
                //提货天数输入值验证
                if (that.thday == "" || that.thday == undefined) {
                    that.$message.error('请输入提货天数！', 5)
                } else if (hat.thday <= 0) {
                    that.$message.error('提货天数不能小于0', 5)
                }*/
                this.$http.post(that.incomecount_url,
                    {
                        thje: that.thje,
                        thday: that.thday,
                        dlbl: that.dlbl,
                        futou: that.futou,
                    }).then(res => {
                    if (res.status === 200) {
                        let resd = res.data;
                        that.visible_shouyi = true;
                        that.yidou=resd.yidou;
                        
                        that.jindou=resd.jidou;
                        that.totalyuanbao=resd.totalyuanbao;
                        that.$message.success('计算成功！', 5)
                    } else {
                        that.$message.error('错误：' + res.msg, 3)
                    }
                })
            },
            handClose(){
                let that = this;
                that.visible_shouyi = false;
            },
        },
    }
</script>
