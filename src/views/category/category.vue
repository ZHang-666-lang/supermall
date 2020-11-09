
<template>
  <div class="wrapper">
    <ul class="contet">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'category',
  data(){
    return{
      scroll:null
    }
  },
  mounted () {
    this.scroll = new BScroll ('.wrapper',{
      pullDownRefresh: {
        probeType: 2
      },
      pullUpLoad: {
        threshold: 1200
      }
    })
    this.scroll.on('scroll',(options) =>{
      console.log(options)
    })
    this.scroll.on('pullingUp',()=>{
      console.log('加载数据')
    })
  }
}
</script>
<style scoped>
.wrapper{
  height: 150px;
  background: red;
}
</style>
