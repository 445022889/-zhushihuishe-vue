<template>
    <div id="app">

        <transition :name="transitionName">

                <router-view></router-view>

        </transition>


    </div>
</template>
<script>
    export default {
        name: 'App',
        data() {
            return {
                transitionName: ''
            }
        },

        watch: {
            '$route'(to, from) {

                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                this.transitionName = '';
                if (to.path === "/" || toDepth < fromDepth) this.transitionName = 'slide-left';
                console.log( this.transitionName)
            }
        }
    }

</script>
<style>

    * {
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
    }

    html {
        line-height: 1.5 !important;
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
    }

    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
    }

    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
        will-change: transform;
        transition: all .3s;
        position: absolute;
    }

    .slide-right-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

    .slide-right-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .slide-left-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .slide-left-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

    .notshow {
        -webkit-transform: translateY(-100px);
        transform: translateY(-100px);
        opacity: 0;
    }
    .cart-not-show {
        -webkit-transform: translateY(100px);
        transform: translateY(100px);

        opacity: 0;
    }

    .show-enter-transfer {
        animation-duration: .3s;
        animation-name: enter-transfer ;
        animation-iteration-count: 1;
    }
    .show-enter-up-transfer{

        animation-duration: .6s;
        animation-name: enter-up-transfer ;
        animation-iteration-count: 1;


        width: 100vw;
        display: block;
        position: fixed;
        margin-left: 0;
        left: 0;
        bottom: 0;
        height: 1rem;
        color: #ffb300;
    }
    .show-leave-transfer {
        animation-duration: .3s;
        animation-name: leave-transfer;
        animation-iteration-count: 1;
    }

    @keyframes enter-up-transfer {

        from {
            -webkit-transform: translateY(60px);
            transform: translateY(60px);
            opacity: 0;
        }
        to {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
        }

    }
    @-webkit-keyframes  enter-up-transfer {

        from {
            -webkit-transform: translateY(60px);
            transform: translateY(60px);
            opacity: 0;
        }
        to {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
        }

    }


    @keyframes enter-transfer  {

        from {
            -webkit-transform: translateY(-60px);
            transform: translateY(-60px);
            opacity: 0;
        }
        to {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
        }

    }

    @-webkit-keyframes enter-transfer {

        from {
            -webkit-transform: translateY(-60px);
            transform: translateY(-60px);
        }
        to {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }

    }
    @keyframes leave-transfer {

        from {
            -webkit-transform: translateY(60px);
            transform: translateY(60px);
            opacity: 0;
        }
        to {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
        }

    }

    @-webkit-keyframes leave-transfer  {

        from {
            -webkit-transform: translateY(60px);
            transform: translateY(60px);
        }
        to {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }

    }
</style>
