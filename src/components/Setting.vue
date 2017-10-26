<template>
    <div class="setting">
        <ul>
            <li v-for="(book,index) in bookList" :key="index">{{book.bookName}}</li>
        </ul>
    </div>
</template>

<script>
import {getBook} from './../api/getBook';
export default {
    data(){
        return{
            bookList:[]
        }
    },
    created(){
        this._getBook();
    },
    methods:{
        _getBook(){
            const bookList = getBook();
            this.bookList = bookList;
        }
    }
}
</script>

<style>
.setting{
    position: fixed;
    width:100%;
    top:0;
    bottom: 60px;
    background: darkred;
}
</style>