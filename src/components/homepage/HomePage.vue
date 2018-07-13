<template>
  <div class="home">
    <div class="home-page">
      <div @click="changekindsShow" class="icon-1">
        <i class="icon-list2"></i>
        <span>所有类别</span>
      </div>
      <div class="home-search">
        <router-link to="/search">
          <i class="icon-search icon-2"></i>
        </router-link>
      </div>
      <router-view></router-view>
      <div v-show="kindsShow" class="all-kinds">
        <a v-for="(v,i) in allKinds" :key="i" href="javascript:void(0)" @click="ttt(v)">{{v}}</a>
      </div>
    </div>
    <!--剧集-->
    <div>
      <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide v-for="(item,index) in res" :key="index" class="swiper-item">
          <router-link :to="{
            path:'video',
            query:{
              obj:item
            }
          }">
            <img width="100%" :src="item.feature_cover_pic" alt="">
          </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>猜你喜欢</span>
      </h4>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad" v-for="(item,index) in res1" :key="index">
      <router-link :to="{
            path:'video',
            query:{
              obj:item
            }
          }">
        <div class="img">
          <img width="100%" :src="item.pic_ori_16x9" alt="">
          <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
        </div>
        <div class="description">
          <span class="d-1" v-html="item.title"></span><br>
          <span v-html="item.stitle" class="d-2"></span>
        </div>
      </router-link>
    </div>
    <!-- 热剧 -->
    <div id="reju" class="distance" style="height:50px"></div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>明星推荐热剧</span>
      </h4>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad-1" v-for="(item,index) in res2" :key="index">
      <router-link :to="{
            path:'video',
            query:{
              obj:item
            }
          }">
      <div class="img">
        <img width="100%" :src="item.pic_ori_16x9" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
      </router-link>
    </div>
    <!-- 花絮 -->
    <div id="huaxu"  class="distance" style="height:50px"></div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>{{yugaoTitle}}</span>
      </h4>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad-2" v-for="(item,index) in yugao" :key="index">
      <router-link :to="{
            path:'video',
            query:{
              obj:item
            }
          }">
      <div class="img">
        <img width="100%" :src="item.pic_ori_16x9" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
      </router-link>
    </div>
    <!-- 泰剧 -->
    <div id="taiju"  class="distance" style="height:50px"></div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>泰剧</span>
      </h4>
    </div>
    <div @click="addRecord(item)" class="c-top" v-for="(item,index) in yugao1" :key="index" v-if="index === 0">
      <router-link :to="{
            path:'video',
            query:{
              obj:item
            }
          }">
      <div class="img">
        <img width="100%" :src="item.pic_ori_16x9" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
      </router-link>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad-3" v-for="(item,index) in yugao1" v-if="index != 0" :key="index">
      <router-link :to="{
            path:'video',
            query:{
              obj:item
            }
          }">
      <div class="img">
        <img width="100%" :src="item.pic_ori_16x9" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
      </router-link>
    </div>
    <!-- 美剧 -->
    <div id="meiju"  class="distance" style="height:50px"></div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>美剧</span>
      </h4>
    </div>
    <div @click="addRecord(item)" class="c-top" v-for="(item,index) in yugao2" :key="index" v-if="index === 0">
      <router-link :to="{
            path:'video',
            query:{
              obj:item
            }
          }">
      <div class="img">
        <img width="100%" :src="item.pic_ori_16x9" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
      </router-link>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad-4" v-for="(item,index) in yugao2" v-if="index != 0" :key="index">
      <router-link :to="{
            path:'video',
            query:{
              obj:item
            }
          }">
      <div class="img">
        <img width="100%" :src="item.pic_ori_16x9" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
      </router-link>
    </div>
    <!-- 网络剧 -->
    <div id="wangluoju"  class="distance" style="height:50px"></div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>{{inteTitle}}</span>
      </h4>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad-2" v-for="(item,index) in inte" :key="index">
      <router-link :to="{
            path:'video',
            query:{
              obj:item
            }
          }">
      <div class="img">
        <img width="100%" :src="item.pic_ori_16x9" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
      </router-link>
    </div>
    <!-- 口碑剧 -->
    <div id="koubeiju"  class="distance" style="height:50px"></div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>{{inteTitle1}}</span>
      </h4>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad-5" v-for="(item,index) in inte1" :key="index">
      <router-link :to="{
            path:'video',
            query:{
              obj:item
            }
          }">
      <div class="img">
        <img width="100%" :src="item.pic_ori_16x9" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
      </router-link>
    </div>
    <!-- 小美好 -->
    <div id="xiaomeihao"  class="distance" style="height:50px"></div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>{{inteTitle2}}</span>
      </h4>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad-6" v-for="(item,index) in inte2" :key="index">
      <router-link :to="{
            path:'video',
            query:{
              obj:item
            }
          }">
      <div class="img">
        <img width="100%" :src="item.pic_ori_16x9" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
      </router-link>
    </div>
    <div style="height:50px"></div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import qs from 'qs'
 import '../../common/css/nav.less'
import { swiper, swiperSlide ,swiperOption} from 'vue-awesome-swiper'
import {getRecommend,getYuGao,getInte,getBenefit,getComment,getOther,getVideo} from '../../api/channel'
import {ERR_OK} from '../../api/config'
  export default{
    name:'home',
    data(){
      return{
        res:[],
        res1:[],
        res2:[],
        yugao:[],
        yugaoTitle:[],
        yugao1:[],
        yugao2:[],
        inte:[],
        inteTitle:[],
        inteTitle1:[],
        inteTitle2:[],
        inte1:[],
        inte2:[],
        str:'',
        kindsShow:false,
        allKinds:["热剧","花絮","泰剧","美剧","网络剧","口碑剧","小美好"],
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        }
      }
    },
    components:{
      swiper,swiperSlide,swiperOption
    },
    mounted(){
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
        // console.log(res.list[0].ZT_leaf_video)
        // console.log(res.list[1].ZT_leaf_video)
        // console.log(res.list[2].ZT_leaf_video)
        this.res = res.list[0].ZT_leaf_video
        this.res1 = res.list[1].ZT_leaf_video
        this.res2 = res.list[2].ZT_leaf_video
        }
      })
      getYuGao().then((res) => {
        if (res.code === ERR_OK) {
        // console.log(res.list)
        this.yugaoTitle = res.list[0].ZT_leaf_head
        this.yugao = res.list[0].ZT_leaf_video
        this.yugao1 = res.list[1].ZT_leaf_video
        this.yugao2 = res.list[2].ZT_leaf_video
        }
      })
      getInte().then((res) => {
        if (res.code === ERR_OK) {
        // console.log(res.list)
        this.inteTitle = res.list[0].ZT_leaf_head
        this.inteTitle1 = res.list[1].ZT_leaf_head
        this.inteTitle2 = res.list[2].ZT_leaf_head
        this.inte = res.list[0].ZT_leaf_video
        this.inte1 = res.list[1].ZT_leaf_video
        this.inte2 = res.list[2].ZT_leaf_video
        }
      })
    },
    methods:{
      changekindsShow(){
        this.kindsShow = !this.kindsShow
      },
      addRecord(e){
        // console.log(e)
        let username = document.cookie.split("=")[1];
        let arr = e;
        let obj = {
          username,arr
        }
        if(username){
          this.$axios.post('/api/recordTv',qs.stringify(obj)).then(res=>{
            // console.log(res.data.msg)
          })
        }
      },
      ttt(e){
        if(e === '热剧'){
          this.str = 'reju'
        }
        if(e === '花絮'){
          this.str = 'huaxu'
        }
        if(e === '泰剧'){
          this.str = 'taiju'
        }
        if(e === '美剧'){
          this.str = 'meiju'
        }
        if(e === '网络剧'){
          this.str = 'wangluoju'
        }
        if(e === '口碑剧'){
          this.str = 'koubeiju'
        }
        if(e === '小美好'){
          this.str = 'xiaomeihao'
        }
        // console.log(this.str)
        this.kindsShow = !this.kindsShow
        // 找到锚点
        let anchorElement = document.getElementById(this.str);
        // 如果对应id的锚点存在，就跳转到锚点
        if(anchorElement) { 
          anchorElement.scrollIntoView(true); 
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.pad:nth-child(2n){
      padding-right: 2px;
    }
    .pad:nth-child(2n+1){
      padding-left: 2px;
    }
    .pad-1:nth-child(2n){
      padding-right: 2px;
    }
    .pad-1:nth-child(2n+1){
      padding-left: 2px;
    }
    .pad-2:nth-child(2n+1){
      padding-right: 2px;
    }
    .pad-2:nth-child(2n){
      padding-left: 2px;
    }
    .pad-3:nth-child(2n+1){
      padding-right: 2px;
    }
    .pad-3:nth-child(2n){
      padding-left: 2px;
    }
    .pad-4:nth-child(2n){
      padding-right: 2px;
    }
    .pad-4:nth-child(2n+1){
      padding-left: 2px;
    }
    .pad-5:nth-child(2n){
      padding-right: 2px;
    }
    .pad-5:nth-child(2n+1){
      padding-left: 2px;
    }
    .pad-6:nth-child(2n){
      padding-right: 2px;
    }
    .pad-6:nth-child(2n+1){
      padding-left: 2px;
    }
</style>
