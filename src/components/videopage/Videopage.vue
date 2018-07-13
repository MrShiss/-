<template>
  <transition :name="transitionName" mode="out-in">
    <div class="video-page child-view-video">
      <div class="return">
        <i @click="goBack" class="icon-circle-left"></i>
      </div>
      <div class="content">
        <div class="img">
          <img width="100%" :src="res.pic_ori_16x9 || res.feature_cover_pic || res.pic_ori_16x9 
            || res.pic_498x280 || res.pic_460x260" alt="">
          <span>{{res.timelong = "" ? '更新至20集' : res.timelong}}</span>
        </div>
        <div class="description">
          <span class="d-1" v-html="res.title"></span>
          <span class="d-2" v-html="res.stitle"></span>
          <p v-if="res.timelong">
            <span>{{res.score}}分&#x3000;•&#x3000;全{{res.epnum}}集&#x3000;•&#x3000;{{(res.view / 100000000).toFixed(1)}}亿次播放</span>
            <button @click="add">点击关注</button>
          </p>
        </div>
      </div>
      <!--剧集-->
      <p v-if="res.timelong" class="drama-text">剧集</p>
      <div v-if="res.timelong" class="drama" v-show="num != ''">
        <span v-for="i in num" :key="i">
          {{i}}
        </span>
      </div>
      <!--会员福利-->
      <div class="benefits">
        <p class="text">会员福利</p>
        <div class="b-1" v-for="(key, index) in ben" v-bind:key="index" v-show="index < 4">
          <div>
            <img width="100%" :src="key.pic_680x382">
            <p>{{key.title}}</p>
          </div>
        </div>
      </div>
      <!--猜你喜欢-->
      <div class="like benefits">
        <p class="text">猜你喜欢</p>
        <div class="b-1" v-for="(key, index) in other" v-bind:key="index" v-show="index < 4">
          <div>
            <img width="100%" :src="key.c_pic2">
          </div>
          <p>
            评分：<span class="rate">{{key.mscore}}</span> <br>
            <span class="title">{{key.c_title}}</span>
            </p>
        </div>
      </div>
      <!--热门评论-->
      <div class="comment">
        <p class="text">影视圈</p>
        <div class="b-1" v-for="(key, index) in comments" v-bind:key="index" v-show="index < 4">
          <img :src="'https' + (key.userinfo.head).substring(4)">
          <span style="font-size: 13px;font-weight: bold;">{{key.userinfo.nick}}</span>
          <p style="font-size: 13px;padding-top: 8px;line-height: 20px;">{{key.content}}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import qs from 'qs'
import {
  getBenefit,
  getComment,
  getOther,
} from "../../api/channel";
  export default {
    data () {
      return {
        transitionName: 'slide-left',
        res:[],
        ben:[],
        comments:[],
        other:[],
        num:''
      }
    },
    beforeRouteUpdate (to, from, next) {
      let isBack = this.$router.isBack
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
      next()
    },
    methods: {
      goBack () {
        this.$router.goBack()
      },
      load () {
        this.$refs.boxHeight.style.height = 'auto'
        this.$refs.more.style.display = 'none'
      },
      add(){
        // console.log(document.cookie.split("=")[1])
        let username = document.cookie.split("=")[1];
        let arr = this.$route.query.obj;
        let obj = {
          username,arr
        }
        if(username){
          this.$axios.post('/api/addtv',qs.stringify(obj)).then(res=>{
            // console.log(document.cookie)
            alert(res.data.msg)
          })
        }
      }
    },
    mounted () {
      // console.log(this.$route.query.obj)
      // console.log(this.$route.query.obj.timelong.slice(-3,-1))
      let res = this.$route.query.obj;
      if(this.$route.query.obj.timelong){
        this.num = Number(this.$route.query.obj.timelong.slice(-3,-1))
      }
      this.res = res;
      getBenefit().then(res=>{
        // console.log(res)
        this.ben = res.list
      })
      getComment(res.cid).then(res=>{
        // console.log(res)
        this.comments = res.data.commentid
      })
      getOther(res.cid).then(res=>{
        // console.log(res.tablist[0].cover_info)
        this.other = res.tablist[0].cover_info
      })
    }
  }
</script>

<style lang="less" scoped>
  .child-view-video {
    position: absolute;
    width: 100%;
    transition: all .8s cubic-bezier(.55, 0, .1, 1);
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .video-page {
    position: fixed;
    overflow: scroll;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 500;
    p{
      line-height: 16px;
    }
    .return {
      background-color: #fb7299;
      position: relative;
      font-size: 20px;
      color: white;
      z-index: 500;
      line-height: 50px;
      i{
        margin-left: 10px;
      }
    }
    .content .img{
      position: relative;
      span{
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        right: 0;
        color: white;
        background-color: rgba(0, 0, 0, 35%)
      }
    }
    .drama-text{
      font-weight: 700;
      font-size: 16px;
      margin: 10px 0 10px 10px;
    }
    .drama{
      height: 40px;
      overflow-x: scroll;
      white-space: nowrap;
      margin-bottom: 10px;
      span{
        padding: 20px;
        margin-right: 10px;
        background-color: rgba(0, 0, 0, 8%)
      }
      span:last-child{
        margin-right: 0;
      }
    }
    .description{
        padding-left: 10px;
        span{
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .d-1{
          font-weight: 700;
          font-size: 18px;
          margin-right: 20px;
        }
        p{
          color: rgba(0, 0, 0, 45%);
          position: relative;
          button{
            position: absolute;
            top: -10px;
            right: 10px;
            border: none;
            color: white;
            padding: 10px;
            background-color: #fb7299;
          }
          button:hover{
            cursor: pointer;
          }
        }
      }
    .benefits{
      .text{
        text-align: center;
        font-weight: 700;
        font-size: 20px;
        color: white;
        background-color: #fb7299;
        padding: 10px 0;
      }
      .b-1{
        width: 50%;
        display: inline-block;
        p{
          height: 37px;
          padding: 5px 0 5px 10px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .b-1:nth-child(2n){
        padding-right: 2px;
      }
      .b-1:nth-child(2n+1){
        padding-left: 2px;
      }
    }
    .like{
      p{
        .rate{
          font-size: 14px;
        }
        .title{
          font-size: 16px;
          padding: 0;
          
        }
      }
    }
    .comment{
      padding-left: 10px;
      .text{
        font-size: 18px;
        padding: 10px 0;
      }
      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
</style>
