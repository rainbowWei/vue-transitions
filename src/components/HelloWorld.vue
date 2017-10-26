<template>
    <div class="hello">
        <div class="btn-group">
            <button v-for="(item,index) in btn" v-bind:class="{active:(indexs==index)}" v-on:click="a(index)" :key="index">{{item}}</button>
        </div>
        <div class="wrap">
            <div v-for="(w,key,index) in box" v-if="indexs == index" :key="index">{{w}}-{{key}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            btn: ['按钮1','按钮2','按钮3'],
            box: { aa: "tab切换1", bb: "tab切换2", cc: "tab切换3" },
            indexs: 0,
        }
    },
    methods: {
        a(str) {
            this.indexs = str;
        }
    }
}
</script>

<style scoped>
.hello {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    background: #630;
    z-index: 20;
}
.btn-group{
    width:50%;
    margin: 0 auto;
}
button{
    border:none;
    width: 50px;
    height: 30px;
}
.wrap div {
    width: 100%;
    height: 300px;
    background-color: #0cc;
}

.active {
    background-color: red
}
</style>
