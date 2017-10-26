<template>
    <div class="classCard">
        班级页面
        <button @click="nextPage">到子页面</button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods:{
        nextPage(){
            this.$router.push({
                path:'/class_card/2'
            })
        }
    }
}
</script>

<style>
.classCard{
    position: fixed;
    width:100%;
    top:0;
    bottom: 60px;
    background: deepskyblue;
}
</style>