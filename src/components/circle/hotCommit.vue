<template>
<transition name="slide">
    <div class="all">
        <div class="content" v-for="(v,i) in list" :key="i">
            <div class="left">
                <img :src="v.cover" alt="">
                <p>{{v.title}}</p>
            </div>
            <div class="right">{{v.hotCommit}}</div>
        </div>
    </div>
</transition>
</template>
<script>
import list from "./json/commit.json"
    export default{
        data(){
            return{
                list:[]
            }
        },
        mounted(){
            // console.log(list.subjects)
            this.list = list.subjects;
        }
    }
</script>
<style lang="less" scoped>
@import url("./css/commit.less");
</style>

