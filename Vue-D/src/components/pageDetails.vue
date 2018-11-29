<template>
    <div class="page_detail">
        <div class="pd_header">
            <router-link to="/">
                <i class="iconfont icon-fanhui"></i>
            </router-link>
            <h3 class="detail_title">商品详情</h3>
        </div>
        <div class="divT"></div>
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
        <div class="divB"></div>
        <div class="pd_footer">
            <div class="footer_l">
                <router-link to="cart">
                    <span v-show="cartCounter > 0">{{ cartCounter }}</span>
                    <i class="iconfont icon-gouwuche-copy"></i>
                </router-link>
            </div>
            <div class="footer_r" @click="addGoodsToCart">
                加入购物车
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
    created(){
        
    },
    computed:{
        cartCounter () {
            return this.$store.state.cartCounter;
        },
        goods () {
            return this.$route.query;
        }
    },
    methods:{
        addGoodsToCart() {
            console.log(this.goods.isInCart)
            let isInCart = this.goods.isInCart;
            if(isInCart){
                this.$store.commit('addGoods',this.goods.id);
            } else {
                this.$store.commit('addGoodsToCart',this.goods);
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.page_detail{
    text-align: center;
    width: 100%;
    
}
    .pd_header{
        width: 100%;
        display: flex;
        background: $mainColor;
        color: #fff;
        line-height: .75rem;
        padding: 10px 0;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
        .detail_title{
            width: 100%;
            text-align: center;
            @include fz(.5rem);
        }
        .iconfont{
            @include fz(.8rem);
            color: #fff;
        }
    }
    .pd_footer{
        width: 100%;
        text-align: center;
        height:1.09375rem;
        line-height: 1.09375rem;
        display: flex;
        justify-content: space-between;
        position: fixed;
        left: 0px;
        bottom: 0px;
        z-index: 999;
        .footer_l{
            width: 20%;
            background: #eee;
            .icon-gouwuche-copy{
                @include fz(1rem);
            }
        }
        .footer_r{
            width: 80%;
            background: $mainColor;
            color: #fff;
            @include fz(.5rem)
        }
        
    }
</style>
