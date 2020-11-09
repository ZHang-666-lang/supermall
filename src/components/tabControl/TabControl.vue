<template>
    <div class="tab-control">
       <div v-for="(item,index) in titles" 
       :key="index"
        class="tab-control-item"
        :class="{active :index === currentIndex }" @click="tabClick(index)">
          <span>{{item}}</span>
        </div>    
    </div>
</template>

<script>
export default {
    name:"TabControl",
    props: {
        titles: {
            type:Array,
            default () {
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        tabClick(index){
            this.currentIndex = index
            this.$emit('tabclick',index)
        }
    }
}
</script>
<style scoped>
.tab-control{
    display: flex;
    text-align: center;
}
.tab-control-item{
    flex: 1;
    height: 40px;
    font-size: 15px;
    line-height: 40px;
}
.active{
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
}
</style>