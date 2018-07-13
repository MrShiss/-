<template>
  <transition name="slide">
    <div class="all">
      <div class="content" v-for="(item,index) in res" :key="index">
        <router-link :to="{
          path:'video',
          query:{obj:item.arr}
        }">
          <div class="img">
            <img width="100%" :src="item.arr.pic_ori_16x9 || item.arr.feature_cover_pic" alt="">
            <p>{{item.arr.timelong = "" ? '更新至20集' : item.arr.timelong}}</p>
          </div>
          <div class="description">
            <span class="d-1" v-html="item.arr.title"></span><br>
            <span class="d-2" v-html="item.arr.stitle"></span>
          </div>
        </router-link>
        <button @click="removeTv(item.arr.cid)">取消关注</button>
      </div>
    </div>
  </transition>
</template>

<script>
import qs from 'qs'
  export default {
    data () {
      return {
        res:[]
      }
    },
    methods:{
      removeTv(e){
        let username = document.cookie.split("=")[1];
        let id = e;
        let obj = {
          username,id
        }
        this.$axios.post('/api/delete',qs.stringify(obj)).then(res=>{
          // console.log(res.data)
        })
        this.$router.push('/empty')
      }
    },
    mounted(){
      let username = document.cookie.split("=")[1];
      let obj = {
        username
      }
      if(username){
        this.$axios.post('/api/list',qs.stringify(obj)).then(res=>{
          // console.log(res.data)
          this.res = res.data
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url('./css/same.less');
</style>