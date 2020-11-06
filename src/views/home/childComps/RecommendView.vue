<template>
    <div class="recommend">
        <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:'RecommendView',
    props:{
        recommends :{
            type:Array,
            default() {
                return []
            }
        }
    }
}
</script>
<style scoped>
.recommend{
    display: flex;
    text-align: center;
    padding: 15px 0;
    box-shadow: 0px 8px 0px rgba(189, 189, 189, 0.3);
}
.recommend-item{
    flex: 1;
    font-size: 13px;
}
.recommend-item img{
    height: 70px;
    width: 70px;
}
</style>