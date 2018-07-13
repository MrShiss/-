<template>
  <transition name="slide">
    <div class="all">
      <div class="button">
        <button @click="deleteAll">清空观看记录</button>
      </div>
      <div class="content" v-for="(item,index) in res" :key="index">
        <router-link :to="{
          path:'video',
          query:{obj:item}
        }">
          <div class="img">
            <img width="100%" :src="item.pic_ori_16x9 || item.feature_cover_pic" alt="">
            <!-- <p v-show="item">{{item.timelong == "" ? '更新至20集' : item.timelong}}</p> -->
          </div>
          <div class="description">
            <span class="d-1" v-html="item.title"></span><br>
            <span class="d-2" v-html="item.stitle"></span>
          </div>
        </router-link>
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
    mounted(){
      let username = document.cookie.split("=")[1];
      let obj = {
        username
      }
      if(username){
        this.$axios.post('/api/mlist',qs.stringify(obj)).then(res=>{
          // console.log(res.data)
          // this.res = res.data
          res.data.map((v,i,arr)=>{
            this.res.push(v.arr)
            // console.log(this.res)
          })
        })
      }
    },
    methods:{
      deleteAll(){
        this.$axios.post('/api/deleteAll').then(res=>{
          this.res = res.data
          this.$router.push('/record')
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url('./css/same.less');
  .button{
    padding: 5px 20px;
    text-align: right;
    outline: none;
  }
</style>
