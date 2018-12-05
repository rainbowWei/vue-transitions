<template>
    <div id="app">
        <FooterNav :isShowNav="isShowNav"></FooterNav>
        <transition name="transitionRouter">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import FooterNav from './components/FooterNav';
export default {
    data(){
        return{
            isShowNav:true
        }
    },
    created(){
        
    },
    components: {
        FooterNav
    }
}
</script>

<style>
.transitionRouter-enter-active,
.transitionRouter-leave-active {
    transition: all 0.4s;
}

.transitionRouter-enter,
.transitionRouter-leave{
    transform: translate3d(100%, 0, 0);
    /* transform:rotate(10deg) */
    /* transform: scale(1.5) */
    /* transform: translate(1000px 0) */
}
</style>
