<template>
    <div class="footer-nav">
        <ul class="nav-group" v-show="isShowNav">
            <li class="nav-item">
                <router-link to="/home" exact tag="p">
                    <dl>
                        <dt></dt>
                        <dd>主页</dd>
                    </dl>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="/class_card" tag="p">
                    <dl>
                        <dt></dt>
                        <dd>课程</dd>
                    </dl>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="/setting" tag="p">
                    <dl>
                        <dt></dt>
                        <dd>设置</dd>
                    </dl>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        isShowNav:{
            type: Boolean,
            default: true
        }
    }
}
</script>

<style>
.footer-nav {
    width: 100%;
    height: 60px;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #444;
}

.nav-group {
    width:100%;
}

.nav-item {
    float: left;
   width: 33.3%;
}

.nav-item dl {
    text-align: center;
}

.nav-item dl dt {
    width: 30px;
    height: 30px;
    background: #f00;
    margin: 5px auto;
}

.nav-item dl dd {
    font-size: 14px;
}
.router-link-active dl dt{
    background: #360;
}
.router-link-active dl dd{
    color:#f00;
}
</style>