<template>
  <div class="home">
    <div class="home-page">
      <div class="home-list">
        <i>我的追剧</i>
      </div>
      <div class="icon-2">
        <i class="icon-pencil icon-2"></i>
      </div>
    </div>
    <p class="title" v-show="!isShow">
      <router-link to="/follow"><span :class="{active:isActive}">我的关注</span></router-link>
      <router-link to="/record"><span :class="{active:isActive1}">观看记录</span></router-link>
    </p>
    <p @click="skipTo" class="msg" v-show="isShow">
      {{msg}}
    </p>
    <router-view></router-view>
    
    <div style="height:50px"></div>
  </div>
</template>

<script>
import '../../common/css/nav.less'
import qs from 'qs'
  export default {
    data () {
      return {
        res:[],
        msg:'',
        isShow:false,
        isActive:false,
        isActive1:false
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
          console.log(res.data)
        })
        this.$router.push('/empty')
      },
      skipTo(){
        let username = document.cookie.split("=")[1];
        let obj = {
          username
        }
        if (!username) {
          this.$router.push('/login')
        } else{
          this.$router.push('/homepage')
        }
        
      }
    },
    updated(){
      if (document.URL.split("/")[4] === 'follow') {
        this.isActive = true
        this.isActive1 = false
      }else{
        this.isActive1 = true
        this.isActive = false
      }
    },
    mounted(){
      // console.log(document.URL.split("/")[5])
      if (document.URL.split("/")[5] === 'follow') {
        this.isActive = true
        this.isActive1 = false
      }else{
        this.isActive1 = true
        this.isActive = false
      }
      let username = document.cookie.split("=")[1];
      let obj = {
        username
      }
      if(username){
        this.$axios.post('/api/list',qs.stringify(obj)).then(res=>{
          // console.log(res.data)
          if(res.data){
            this.isShow = false;
            this.res = res.data
          }else{
            this.isShow = true;
            this.msg = '您还没有关注电视剧！'
          }
          
        })
      }else{
        this.isShow = true;
        this.msg = '您还没有登录？点击登录！'
      }
    }
  }
</script>

<style lang="less" scoped>
  .active{
    background-color: rgb(190, 46, 46)!important;
    color: white!important;
  }
  .title{
      position: fixed;
      left: 50%;
      margin-left: -100px;
      width: 200px;
      z-index: 999;
      text-align: center;
      padding: 10px 0 10px 10px;
      font-size: 0;
      span{
        font-size: 18px;
        background-color: #fb7299;
        padding: 5px;
        color: white;
        display: inline-block;
      }
  }
  .msg{
    font-size: 18px;
    width: 250px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -75px;
    margin-left: -125px;
    text-align: center;
  }
</style>
