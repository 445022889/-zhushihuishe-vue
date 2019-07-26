<template>
    <div class="page-header-index-wide">
        <a-card style="padding: 0">

            <img src="http://lixiangapi.99kk88.cn/Uploads/ac.jpg" style="width: 100%">
            <router-link class="login" :to="{ name: 'Activity' }" style="color: rgba(82,82,82,0.79)">
            <a-button type="primary" block style="margin: 10px auto" >进入活动页面</a-button>
            </router-link>
        </a-card>


    </div>


</template>

<script>
    import ACard from "ant-design-vue/es/card/Card";

    export default {

        components: {ACard},
        data() {
            return {}
        },
        created() {

        },

    }
</script>

<style scoped="">

    .ant-card-body {
        padding: 0 !important;
    }


</style>
