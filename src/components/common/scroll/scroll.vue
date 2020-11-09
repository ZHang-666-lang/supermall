<template>
    <div ref="waper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name:"scroll",
    data() {
        return{
            scroll:null
        }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
        this.scroll = new BScroll (this.$refs.waper,{
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad
        })
        this.scroll.on('scroll',(options)=>{
            // console.log(options)
            this.$emit('scrolls',options)
        })
        //监听上拉事件
         this.scroll.on('pullingUp',()=>{
            // console.log('上拉加载更多')
            this.$emit('pullingUp')
         })
    },
    methods:{
        //返回顶部
        backClick(x,y,time) {
            this.scroll.scrollTo(x,y,time=500)
        },
        //
        finishPullUp(){
            this.scroll.finishPullUp()
        }
    }
}
</script>