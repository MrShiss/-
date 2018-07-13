<template>
  <div>
    <div class="home">
      <div class="home-page">
        <div @click="changekindsShow" class="icon-1">
          <i class="icon-list2"></i>
          <span>所有类别</span>
        </div>
        <div class="home-list">
          <i>发现</i>
        </div>
        <div class="icon-2">
          <router-link to="/searchPort">
            <i class="icon-search icon-2"></i>
          </router-link>
        </div>
        <router-view></router-view>
        <div v-show="kindsShow" class="all-kinds">
          <a v-for="(v,i) in allKinds" :key="i" href="javascript:void(0)" @click="ttt(v)">{{v}}</a>
        </div>
      </div>
    </div>
    <!-- 小剧场 -->
    <div @click="addRecord(item)" v-for="(item,index) in res0" v-if="index === 0" :key="index">
      <div>
        <img width="100%" :src="item.pic_ori_16x9" alt="">
      </div>
      <div class="channel-name">
        <span v-html="item.title"></span>
      </div>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad" v-for="(item,index) in res0" v-if="index != 0" :key="index">
      <div>
        <img width="100%" height="106px" :src="item.pic_ori_16x9" alt="">
      </div>
      <div class="channel-name">
        <span class="channel-name" v-html="item.title"></span>
      </div>
    </div>
    <!-- 谈资 -->
    <div id="tanzi" class="distance" style="height:50px"></div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>{{resTitle0}}</span>
      </h4>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad-2" v-for="(item,index) in res1" :key="index">
      <div class="img">
        <img width="100%" height="106px" :src="item.pic_ori_16x9" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
    </div>
    <!-- 明星 -->
    <div id="mingxing" class="distance" style="height:50px"></div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>{{resTitle1}}</span>
      </h4>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad-2" v-for="(item,index) in res2" :key="index">
      <div class="img">
        <img width="100%"  height="106px" :src="item.pic_ori_16x9" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
    </div>
    <!-- 爱豆 -->
    <div id="aidou" class="distance" style="height:50px"></div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>{{aidouTitle0}}</span>
      </h4>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad-2" v-for="(item,index) in aidou0" :key="index">
      <div class="img">
        <img width="100%"  height="106px" :src="item.pic_ori_16x9" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
    </div>
    <!-- 新鲜 -->
    <div id="xinxian" class="distance" style="height:50px"></div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>{{aidouTitle1}}</span>
      </h4>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad-2" v-for="(item,index) in aidou1" :key="index">
      <div class="img">
        <img width="100%"  height="106px" :src="item.pic_ori_16x9" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
    </div>
    <!-- moxing -->
    <div id="tanzi" class="distance" style="height:50px"></div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>{{aidouTitle2}}</span>
      </h4>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad-2" v-for="(item,index) in aidou2" :key="index">
      <div class="img">
        <img width="100%"  height="106px" :src="item.pic_ori_16x9" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
    </div>
    <!-- 作品 -->
    <div id="zuopin" class="distance" style="height:50px"></div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>{{proTitle0}}</span>
      </h4>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad-2" v-for="(item,index) in pro0" :key="index">
      <div class="img">
        <img width="100%" height="106px" :src="item.pic_498x280" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
    </div>
    <!-- 鲜肉 -->
    <div id="xianrou" class="distance" style="height:50px"></div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>{{proTitle1}}</span>
      </h4>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad-2" v-for="(item,index) in pro1" :key="index">
      <div class="img">
        <img width="100%" height="106px" :src="item.pic_498x280" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
    </div>
    <!-- 娱乐 -->
    <div id="yule" class="distance" style="height:50px"></div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>{{proTitle2}}</span>
      </h4>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad-2" v-for="(item,index) in pro2" :key="index">
      <div class="img">
        <img width="100%" height="106px" :src="item.pic_498x280" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
    </div>
    <!-- 作 -->
    <div id="xuewo" class="distance" style="height:50px"></div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>{{zuoTitle0}}</span>
      </h4>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad-2" v-for="(item,index) in zuo0" :key="index">
      <div class="img">
        <img width="100%" height="106px" :src="item.pic_498x280" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
    </div>
    <!-- 周一见 -->
    <div id="yueni" class="distance" style="height:50px"></div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>{{zuoTitle1}}</span>
      </h4>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad-2" v-for="(item,index) in zuo1" :key="index">
      <div class="img">
        <img width="100%" height="106px" :src="item.pic_498x280" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
    </div>
    <!-- 尖叫吧 -->
    <div id="jianjiaoba" class="distance" style="height:50px"></div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>{{zuoTitle2}}</span>
      </h4>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad-2" v-for="(item,index) in zuo2" :key="index">
      <div class="img">
        <img width="100%" height="106px" :src="item.pic_498x280" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
    </div>
    <!-- 课程表 -->
    <div id="kechengbiao" class="distance" style="height:50px"></div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>{{keTitle0}}</span>
      </h4>
    </div>
    <div @click="addRecord(item)" v-for="(item,index) in ke0" v-if="index === 0" :key="index">
      <div>
        <img width="100%" height="150px" :src="item.pic_460x260" alt="">
      </div>
      <div class="channel-name">
        <span v-html="item.title"></span>
      </div>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad-5" v-for="(item,index) in ke0" v-if="index != 0" :key="index">
      <div>
        <img width="100%" height="106px" :src="item.pic_460x260" alt="">
      </div>
      <div class="channel-name">
        <span v-html="item.title"></span>
      </div>
    </div>
    <!-- 演讲 -->
    <div id="yanjiang" class="distance" style="height:50px"></div>
    <div class="title-1">
      <h4>
        <i class="icon-heart icon-2"></i>
        <span>{{keTitle1}}</span>
      </h4>
    </div>
    <div @click="addRecord(item)" class="content-1-1 pad-5" v-for="(item,index) in ke1" :key="index">
      <div class="img">
        <img width="100%" height="106px" :src="item.pic_460x260" alt="">
        <p>{{item.timelong = "" ? '更新至20集' : item.timelong}}</p>
      </div>
      <div class="description">
        <span class="d-1" v-html="item.title"></span><br>
        <span v-html="item.stitle" class="d-2"></span>
      </div>
    </div>
    <div style="height:50px"></div>
  </div>
</template>

<script>
import qs from 'qs'
  import '../../common/css/nav.less'
  import {getYule,getAidou,getPro,getZuo,getKe} from '../../api/channel'
  export default{
    name:'find',
    data(){
      return{
        resTitle0:[],
        resTitle1:[],
        res0:[],
        res1:[],
        res2:[],
        aidouTitle0:[],
        aidouTitle1:[],
        aidouTitle2:[],
        aidou0:[],
        aidou1:[],
        aidou2:[],
        proTitle0:[],
        proTitle1:[],
        proTitle2:[],
        pro0:[],
        pro1:[],
        pro2:[],
        zuoTitle0:[],
        zuoTitle1:[],
        zuoTitle2:[],
        zuo0:[],
        zuo1:[],
        zuo2:[],
        keTitle0:[],
        keTitle1:[],
        ke0:[],
        ke1:[],
        str:'',
        kindsShow:false,
        allKinds:["谈资","明星","爱豆","新鲜","魔性","作品","鲜肉","娱乐","学我","约你","尖叫吧","课程表","演讲"]
      }
    },
    mounted(){
      getYule().then(res=>{
        // console.log(res)
        this.resTitle0 = res.list[1].ZT_leaf_head
        this.resTitle1 = res.list[2].ZT_leaf_head
        this.res0 = res.list[0].ZT_leaf_video
        this.res1 = res.list[1].ZT_leaf_video
        this.res2 = res.list[2].ZT_leaf_video
      })
      getAidou().then(res=>{
        // console.log(res)
        this.aidouTitle0 = res.list[0].ZT_leaf_head
        this.aidouTitle1 = res.list[1].ZT_leaf_head
        this.aidouTitle2 = res.list[2].ZT_leaf_head
        this.aidou0 = res.list[0].ZT_leaf_video
        this.aidou1 = res.list[1].ZT_leaf_video
        this.aidou2 = res.list[2].ZT_leaf_video
      })
      getPro().then(res=>{
        // console.log(res)
        this.proTitle0 = res.list[0].ZT_leaf_head
        this.proTitle1 = res.list[1].ZT_leaf_head
        this.proTitle2 = res.list[2].ZT_leaf_head
        this.pro0 = res.list[0].ZT_leaf_video
        this.pro1 = res.list[1].ZT_leaf_video
        this.pro2 = res.list[2].ZT_leaf_video
      })
      getZuo().then(res=>{
        // console.log(res)
        this.zuoTitle0 = res.list[0].ZT_leaf_head
        this.zuoTitle1 = res.list[1].ZT_leaf_head
        this.zuoTitle2 = res.list[2].ZT_leaf_head
        this.zuo0 = res.list[0].ZT_leaf_video
        this.zuo1 = res.list[1].ZT_leaf_video
        this.zuo2 = res.list[2].ZT_leaf_video
      })
      getKe().then(res=>{
        // console.log(res)
        this.keTitle0 = res.list[0].ZT_leaf_head
        this.keTitle1 = res.list[1].ZT_leaf_head
        this.ke0 = res.list[0].ZT_leaf_video
        this.ke1 = res.list[1].ZT_leaf_video
      })
    },
    methods:{
      changekindsShow(){
        this.kindsShow = !this.kindsShow
      },
      addRecord(e){
        // console.log(e)
        // let username = document.cookie.split("=")[1];
        // let arr = e;
        // let obj = {
        //   username,arr
        // }
        // if(username){
        //   this.$axios.post('/api/recordTv',qs.stringify(obj)).then(res=>{
        //     console.log(res.data.msg)
        //   })
        // }
      },
      ttt(e){
        if(e === '谈资'){
          this.str = 'tanzi'
        }
        if(e === '明星'){
          this.str = 'mingxing'
        }
        if(e === '爱豆'){
          this.str = 'aidou'
        }
        if(e === '新鲜'){
          this.str = 'xinxian'
        }
        if(e === '魔性'){
          this.str = 'huaxu'
        }
        if(e === '作品'){
          this.str = 'zuopin'
        }
        if(e === '鲜肉'){
          this.str = 'xianrou'
        }
        if(e === '娱乐'){
          this.str = 'yule'
        }
        if(e === '娱乐'){
          this.str = 'yule'
        }
        if(e === '学我'){
          this.str = 'xuewo'
        }
        if(e === '约你'){
          this.str = 'yueni'
        }
        if(e === '尖叫吧'){
          this.str = 'jianjiaoba'
        }
        if(e === '课程表'){
          this.str = 'kechengbiao'
        }
        if(e === '演讲'){
          this.str = 'yanjiang'
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
.home-list{
  margin-left: -70px!important;
}
.content-1-1{
      display: inline-block;
      width: 50%;
      padding: 5px;
      padding-left: 0;
      padding-right: 0;
      text-align: center;
      .img{
        position: relative;
        p{
          position: absolute;
          bottom: 0;
          right: 0;
          color: rgba(255, 255, 255, 95%);
          background-color: rgba(0, 0, 0, 35%);
        }
      }
      .description{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top: 10px;
        text-align: left;
        padding-left: 5px;
        .d-1{
          font-weight: 700;
        }
        .d-2{
          color: rgba(0, 0, 0, 75%);
        }
      }
    }
    .title-1{
      margin-top: 10px;
      text-align: center;
      font-weight: 700;
      padding: 5px 0;
      i{
        color: #fb7299;
      }
    }
    .pad:nth-child(2n+1){
      padding-right: 2px;
    }
    .pad:nth-child(2n){
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
    .pad-3:nth-child(2n){
      padding-right: 2px;
    }
    .pad-3:nth-child(2n+1){
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
    .distance{
      background-color: rgba(0, 0, 0, 5%)
    }
    .channel-name{
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;;
    }
</style>
