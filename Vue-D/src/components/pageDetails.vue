<template>
    <div class="page_detail">
        <div class="pd_header">
            <span>
                <i class="iconfont icon-fanhui"></i>
            </span>
            <h3 class="detail_title">商品详情</h3>
        </div>
        <div class="pd_main">
            <img :src="goods.img" alt="">
            <div class="main_msg">
                <h3 class="main_title">{{goods.title}}</h3>
                <h3 class="main_con">{{goods.content}}</h3>
                <h3 class="main_price">&yen;{{goods.price}}</h3>
            </div>
            <div class="goods-intruction">
            <p v-for="item in 30" :key="item.index">
                这是{{ goods.title }} 的商品详细介绍
            </p>
      </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pageDetail',
    data(){
        return{

        }
    },
    computed:{
        goods () {
            return this.$route.query;
        }
    }

}
</script>

<style lang="scss" scoped>
.page_detail{
    text-align: center;
}
    .pd_header{
        display: flex;
        background: $mainColor;
        color: #fff;
        line-height: .75rem;
        padding: 10px 0;
        .detail_title{
            width: 100%;
            text-align: center;
            @include fz(.5rem);
        }
        .iconfont{
            @include fz(.8rem);
        }
    }
</style>
