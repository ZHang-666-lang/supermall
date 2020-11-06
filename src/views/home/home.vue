<template>
   <div id="home">
     <nav-bar class="home-nav">
       <div slot="center">
         淘宝商城
       </div>
     </nav-bar>
     <!--banner-->
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
     
     <tab-control class="tab-control" :titles="['流行','新款','精选']" ></tab-control>
     <ul>
       <li>1</li>
        <li>1</li>
         <li>1</li>
          <li>1</li>
           <li>1</li>
            <li>1</li>
         <li>1</li>
        <li>1</li>
        <li>1</li>
          <li>1</li>
           <li>1</li>
            <li>1</li>
         <li>1</li>
         <li>1</li>
          <li>1</li>
           <li>1</li>
            <li>1</li>
         <li>1</li>
        <li>1</li>
        <li>1</li>
          <li>1</li>
           <li>1</li>
            <li>1</li>
         <li>1</li>
        <li>1</li>
        <li>1</li>
          <li>1</li>
           <li>1</li>
            <li>1</li>
         <li>1</li>
        <li>1</li>
        <li>1</li>
          <li>1</li>
           <li>1</li>
            <li>1</li>
         <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
          <li>1</li>
           <li>1</li>
            <li>1</li>
         <li>1</li>
        <li>1</li>
     </ul>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import RecommendView from './childComps/RecommendView'
import TabControl from '@/components/tabControl/TabControl'
import {getHomeMultidata} from '@/network/home.js'
export default {
  name: 'Home',
  components: {
    NavBar,
    RecommendView,
    TabControl
  },
  data() {
    return {
      recommends:[], //热销商品
      banners:[]
    }
  },
  created(){
    //组件创建完成时 请求数据 
    getHomeMultidata().then(res =>{
      //将请求回来的数据保存到 data中
      this.banners = res.data.banner.list;
      // console.log(this.banners.image)
      this.recommends = res.data.recommend.list;
      // console.log(this.recommends.link)
      console.log(this.banners)
    })
    
  }
}
</script>
<style scoped>
.home-nav{
  color: #ffffff;
  background-color: var( --color-tint);
  box-shadow: 0 1px 3px rgba(100, 100,100, .3);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
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
</style>
