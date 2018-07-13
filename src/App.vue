<template>
  <div id="app">
    <!-- <loading v-if="isLoading"></loading> -->
    <div class="navigation">
      <div class="navigation-li border">
        <div class="tab-item">
          <router-link to="/homepage">
            <i class="icon-home2 icon"><br>
              <i>首页</i>
            </i>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/find">
            <i class="icon-fire icon"><br>
              <i>发现</i>
            </i>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/follow">
            <i class="icon-star-empty icon"><br>
              <i>我的追剧</i>
            </i>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/hotCommit">
            <i class="icon-bubble2 icon "><br>
              <i>圈子</i>
            </i>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/mine">
            <i class="icon-github icon"><br>
              <i>我的</i>
            </i>
          </router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import loading from './components/loading/loading'
  export default {
    name: 'app',
    data () {
      return {
        isLoading:true
      }
    },
    components:{
      loading
    },
    mounted () {
      // console.log(window.location.href.slice(24) === '')
        // setTimeout(()=>{
        //   this.isLoading = false
        // },2000)
    }
  }
</script>

<style lang="less">
  @import "common/less/mixin";

  .navigation {
    position: fixed;
    width: 100%;
    height: 50px;
    bottom: -2px;
    left: 0;
    right: 0;
    line-height: 50px;
    z-index: 50;
    background-color: #fff;
    .navigation-li {
      display: flex;
      width: 100%;
      height: 50px;
      .border-1px(rgba(7, 17, 27, 0.1));
    }
    .tab-item {
      flex: 1;
      text-align: center;
      .icon {
        font-size: 25px;
        i {
          position: relative;
          top: -35px;
          font-size: 14px;
        }
      }
      & > a {
        display: inline-block;
        color: #929292;
        text-decoration: none;
        font-size: 14px;
        &.active {
          color: #fb7299;
        }
      }
    }
  }
</style>
