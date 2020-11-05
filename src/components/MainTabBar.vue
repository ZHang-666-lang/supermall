<template>
    <div>
        <tab-bar>
      <tab-bar-item urls="/home">
        <img slot="item-icon" src="../assets/img/home_active.png" alt="">
        <img slot="item-icon-active" src="../assets/img/home.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item urls="/cart">
        <img slot="item-icon" src="../assets/img/home_active.png" alt="">
        <img slot="item-icon-active" src="../assets/img/home.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
    </tab-bar>
    </div>
</template>
<script>
import TabBar from './content/TabBar'
import TabBarItem from './content/TabBarItem'
export default {
    name:"MainTabBar",
    components: {
        TabBarItem,
        TabBar
    }
}
</script>
