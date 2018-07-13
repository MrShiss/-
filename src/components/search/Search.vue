<template>
  <transition :name="transitionName">
    <div class="search child-view-search">
      <div @click="goBack" class="return"><i class="icon-circle-left"></i></div>
      <div class="search-input">
        <font class="inputting">
          <span class="icon-search"></span>
          <input type="search" v-model="keyword" placeholder="结爱" @input="selectKey(keyword)" @keydown.enter="getSearch">
        </font>
        <div class="search-list" v-show="keyword != ''">
          <ul>
            <li ref="keyWord" @click="selectWord(index)" v-for="(item,index) in searchList" :key="index">
              {{item.word}}
            </li>
          </ul>
        </div>
      </div>
      <div class="top-search">
        <span class="everybody">大家都在搜</span>
        <div class="top-search-list" ref="topSearch">
          <div class="ul-top">
            <p class="top-list" v-for="(item,index) in dataTop" :key="index" @click="getTitle(index)">
              <a :href="'http://m.v.qq.com/search.html?act=2&keyWord='+item.c_title">
              <span class="top-content">
                {{item.c_title}}
              </span>
              </a>
            </p>
          </div>
        </div>
        <div class="check-more">
          <span class="check-left"></span>
          <span class="check-out-more" @click="checkMore">
            <i class="icon-circle-down search-down" ref="icon">&nbsp;查看更多</i>
          </span>
          <span class="check-right"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  import {
    getHotkey,
    search
  } from "../../api/channel";
  export default {
    data () {
      return {
        transitionName: 'slide-left',
        dataTop: {},
        searchList:[],
        topScroll: false,
        keyword: '',
        togglePanel: true
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
      checkMore () {
        let topSearch = this.$refs.topSearch
        let icon = this.$refs.icon
        this.topScroll = !this.topScroll
        if (this.topScroll === true) {
          topSearch.style.height = '500px'
          icon.className = 'icon-circle-up search-down'
          icon.innerHTML = '&nbsp;收起'
          this.topSearchScroll = new IScroll(topSearch, {
            click: true,
            probeType: 3
          })
        } else if (this.topScroll === false) {
          topSearch.style.height = '200px'
          icon.className = 'icon-circle-down search-down'
          icon.innerHTML = '&nbsp;查看更多'
          this.topSearchScroll = new IScroll(topSearch, {
            click: true,
            probeType: 3
          })
          this.topSearchScroll.destroy()
        }
      },
      selectKey(e){
        search(e).then(res=>{
          this.searchList = res.item
        })
      },
      getSearch (keyword) {
        location.href = 'http://m.v.qq.com/search.html?act=2&keyWord=' + this.keyword
      },
      selectWord(e){
        // console.log(e)
        // this.keyword = this.$refs.keyWord[e].innerHTML;
        location.href='http://m.v.qq.com/search.html?act=2&keyWord='+this.keyword
      }
    },
    mounted(){
      getHotkey().then(res=>{
        // console.log(res.words)
        this.dataTop = res.words
      })
    }
  }
</script>

<style lang="less" scoped>
  .child-view-search {
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

  .search {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #fb7299;
    z-index: 50;
    .return {
      position: relative;
      top: 2px;
      font-size: 20px;
      margin: 8px 0 0 12px;
      color: white;
    }
    .search-input {
      position: relative;
      width: 85%;
      height: 30px;
      border-radius: 8px;
      line-height: 30px;
      left: 40px;
      top: -38px;
      background-color: white;
      .search-list{
        background-color: white;
        position: absolute;
        width: 100%;
        border-radius: 8px;
        z-index: 999;
        padding: 10px;
      }
      .inputting {
        position: relative;
        width: 100%;
        height: 40px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding-left: 10px;
        .icon-search {
          position: relative;
          font-size: 10px;
          color: black;
        }
        input {
          position: absolute;
          width: 1300%;
          padding: 0 10px 0 5px;
          border-radius: 8px;
          border: none;
          font-size: 12px;
          z-index: 3;
          color: black;
          letter-spacing: 1px;
          background-color: white;
          outline: none;
        }
      }
    }
    .top-search {
      position: relative;
      z-index: 5;
      top: -38px;
      .everybody {
        position: relative;
        width: 100%;
        left: 13px;
        color: white;
        letter-spacing: 2px;
        font: 14px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
      }
      .top-search-list {
        position: relative;
        top: -8px;
        width: 100%;
        height: 200px;
        overflow: hidden;
        .ul-top {
          .top-list {
            position: relative;
            float: left;
            margin: 10px 0 0 8px;
            .top-content {
              position: relative;
              display: inline-block;
              width: 100%;
              height: 100%;
              background-color: #FB8EAD;
              color: white;
              border-radius: 8px;
              padding: 0 8px 0 8px;
              letter-spacing: 1px;
            }
          }
        }
      }
      .check-more {
        position: relative;
        display: flex;
        width: 95%;
        left: 10px;
        top: -10px;
        z-index: 888;
        .check-left, .check-right {
          position: relative;
          display: inline-block;
          top: 22px;
          flex: 1;
          width: 50%;
          height: 1px;
          border: 0.5px solid white;
        }
        .check-out-more {
          position: relative;
          display: inline-block;
          flex: 1;
          text-align: center;
          color: white;
          width: 100%;
          height: 100%;
          .search-down {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 45px;
            vertical-align: text-bottom;
          }
        }
      }
    }
  }
</style>
