<template>
    <div class="goods">
        <!-- {{goods}} -->
        <goods-list-item class="item" v-for="(items,index) in goods" :key="index" :itemdata="items" />
    </div>
</template>
<script>
import goodsListItem from  './goodsListItem'
export default {
    name:"goodsList",
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components: {
        goodsListItem
    }
}
</script>
<style scoped>
.goods{
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2px;
}
</style>