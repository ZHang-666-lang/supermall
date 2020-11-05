<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!flage">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :style="activeStyel">
            <slot name="item-text" ></slot>
        </div>
    </div>
</template>
<script>

export default {
    name:"TabBarItem",
    data () {
        return {
            // flage:true
        }
    },
    
    methods:{
        itemClick(){
            //this.$router 指当前活跃路由
           this.$router.push(this.urls)
        }
    },
    computed:{
        flage () {
            return this.$route.path.indexOf(this.urls)  !== -1
        },
        activeStyel () {  
            // 将活跃状态搞成计算属性  默认为红色 
            return this.isactive ? {color: this.activeColor} : {}
        }
    },
    props: {
        urls : String,
        activeColor:{ //默认为红色
            default:'red',
            type:String
        }
    }
}
</script>
<style scoped>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
}
.tab-bar-item img{
    height: 24px;
    width: 24px;
}
</style>