<template>
   <div id="home">
     <nav-bar class="home-nav">
       <div slot="center">
         淘宝商城
       </div>
     </nav-bar>
     <!--滚动封装-->
     <scroll class="waper" ref="scolls" :probe-type="3" @scrolls="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
        <div class="banner">
          <div v-for="(item,index) in banners" :key="index">
            <a :href="item.link">
              <img :src="item.image" alt="">
            </a>
          </div>
        </div>
        <!--热销-->
        <recommend-view :recommends="recommends" />
        <!---->
        <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabclick="tabclick"></tab-control>
        <!---->
        <goods-list :goods="goods[currentType].list"></goods-list>
     </scroll>
     <!--返回顶部-->
     <back-top @click.native="backClick" v-show="backflag"></back-top>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import scroll from '@/components/common/scroll/scroll'
import RecommendView from './childComps/RecommendView'
import TabControl from '@/components/tabControl/TabControl'
import goodsList from '@/components/content/goods/goodsList'
import backTop from '@/components/common/backTop/backTop'
import {getHomeMultidata,getHomeGoods} from '@/network/home.js'
export default {
  name: 'Home',
  components: {
    NavBar,
    scroll,
    RecommendView,
    TabControl,
    goodsList,
    backTop
  },
  data() {
    return {
      banners:[],
      recommends:[], //热销商品
      goods:{
        //流行商品
        'pop' :{page:0,list:[]},
        'new':{page:0,list:[]},
        "sell":{page:0,list:[]}
      },
      currentType:'pop',
      backflag:false
    }
  },
  created(){
    //组件创建完成时 请求数据 
    this.getmultidata()    
    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    //
    tabclick(index){
      // console.log(index)
      switch(index){
        case 0:
         this.currentType = "pop"
         break
        case 1:
          this.currentType = "new"
          break
        case 2:
          this.currentType = "sell"
      }
    },

    getmultidata(){
      getHomeMultidata().then(res =>{
        //将请求回来的数据保存到 data中
        this.banners = res.data.banner.list;
        // console.log(this.banners.image)
        this.recommends = res.data.recommend.list;
        // console.log(this.recommends.link)
        console.log(this.banners)
      })
    },
    getHomeGoods(type){
      const page =this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scolls.finishPullUp()
      })
    },
    // 点击返回
    backClick() {
      // console.log('返回顶部')
      this.$refs.scolls.backClick(0,0,600)
      // console.log(this.$refs.scolls.scroll.scrollTo)
    },

    //滚动监听
    contentScroll(options){
      // console.log((-options.y) > 300 )
      this.backflag = (-options.y) > 300  
    },

    //
    loadMore(){
      this.getHomeGoods(this.currentType)
      this.$refs.scolls.scroll.refresh()
    }
  }
}
</script>
<style scoped>
#home{
  height: 100vh;
  position: relative;
}
.home-nav{
  color: #ffffff;
  background-color: var( --color-tint);
  box-shadow: 0 1px 3px rgba(100, 100,100, .3);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999;
}
.banner {
  height: 200px;
  width: 400px;
  overflow: hidden;
  margin-top: 44px;
}
.banner div{
  height: 200px;
  width: 400px;
}
.banner div img{
  float: left;
  height: 200px;
  width: 100%;
}
.tab-control{
  position: sticky;
  top: 44px;
  background: #ffffff;
}
.waper{
  position: absolute;
  top: 0px;
  bottom: 50px;
  overflow: hidden;
}
</style>
