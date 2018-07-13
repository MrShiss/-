<template>
  <div class="home">
    <div class="home-page">
      <div class="home-list">
        <i>圈子</i>
      </div>
      <div class="icon-2">
        <i class="icon-plus icon-2"></i>
      </div>
    </div>
    <p class="btn-title">
      <router-link to="/hotCommit"><span :class="{active:isActive}">热门评论</span></router-link>
      <router-link to="/newCommit"><span :class="{active:isActive1}">最新评论</span></router-link>
      <router-link to="/wenDa"><span :class="{active:isActive2}">问答系统</span></router-link>
    </p>
    <router-view></router-view>
    <!-- <video height="200px" id="myvideo" :src="videoSrc" :poster="videoImg" :muted="muteStatus" :autoplay="playStatus" width="100%">
            your browser does not support the video tag
        </video>
        <span class="ico ico-sound" :class="{ active: isMute }" v-on:click="closeSoundClick()">1111</span>
        <span class="ico ico-skip">22222222</span>
        <span class="ico ico-video" :class="{ hide: isPlay }" v-on:click="playClick()">3333333</span> -->
    <div style="height:50px;"></div>
  </div>
</template>

<script>
import '../../common/css/nav.less'
  export default {
    data(){
        return {
          isActive:false,
          isActive1:false,
          isActive2:false
            // _dom:"",
            // videoSrc:'http://babylife.qiniudn.com/FtRVyPQHHocjVYjeJSrcwDkApTLQ',
            // videoImg:'http://static.fdc.com.cn/avatar/usercenter/5996999fa093c04d4b4dbaf1_162.jpg',
            // playStatus:'',
            // muteStatus:'',
            // isMute:true,
            // isPlay:false
        }
    },
    methods:{
    //     playClick(){
    //     this._dom = document.getElementById('myvideo');
    //     // this.isPlay = !this.isPlay;
    //     this._dom.play();
    // },
    //     closeSoundClick(){
    //         this.isMute = !this.isMute;
    //         if(this.isMute){
    //             this.muteStatus = '';
    //         }else{
    //             this.muteStatus = 'muted';
    //         }
    //     }
    },
    updated(){
      if (document.URL.split("/")[4] === 'hotCommit') {
        this.isActive = true
        this.isActive1 = false
        this.isActive2 = false
      }else if (document.URL.split("/")[4] === 'newCommit') {
        this.isActive = false
        this.isActive1 = true
        this.isActive2 = false
      }else{
        this.isActive = false
        this.isActive1 = false
        this.isActive2 = true
      }
    },
    mounted(){
      if (document.URL.split("/")[4] === 'hotCommit') {
        this.isActive = true
        this.isActive1 = false
        this.isActive2 = false
      }else if (document.URL.split("/")[4] === 'newCommit') {
        this.isActive = false
        this.isActive1 = true
        this.isActive2 = false
      }else{
        this.isActive = false
        this.isActive1 = false
        this.isActive2 = true
      }
    }
  }
</script>

<style lang="less" scoped>
.active{
    background-color: rgb(190, 46, 46)!important;
    color: white!important;
  }
.btn-title{
    left: 50%;
    width: 300px;
    margin-left: -150px;
    position: fixed;
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
</style>
