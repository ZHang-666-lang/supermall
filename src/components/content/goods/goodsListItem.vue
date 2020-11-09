<template>
    <div class="goods-item">
        <img :src="itemdata.show.img" alt="">
        <div>
            <p>{{itemdata.title}}</p>
            <span class="price">{{itemdata.price}}</span>
            <span class="collect">{{itemdata.cfav}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:"goodsListItem",
    props:{
        itemdata:{
            type:Object,
            default() {
                return {}
            }
        }
    }
}
</script>
<style scoped>
.goods-item{
    width:50%;
    text-align: center;
}
.goods-item img{
    height: 220px;
    width: 170px;
    border-radius: 3px;
}
</style>