<template>
    <div class="cart_list clearfix">
        <div class="cartIMG">
            <img :src="imgUrl" alt="">
        </div>
        <div class="cartMSG">
            <div class="list_con">
                <h3 class="list_title">{{title}}</h3>
                <p class="list_msg">{{content}}</p>
                <div class="price">
                    &yen;<span class="price_number">{{price}}</span>
                </div>
            </div>
        </div>
        <div class="numBtn">
            <my-input-number :count="counter" @changeNumberEvent="getOperator"></my-input-number>
        </div>
        <div class="shadow" v-show="dialogVisible">
            <div class="shadow_main">
                <div class="shadow_top">提示<i class="iconfont icon-guanbi"></i></div>
                <div class="shadow_con">
                    <div class="shadow_msg">
                        <p class="content">你确定删除该商品么？</p>
                    </div>
                    <div class="shadow_btn">
                        <a class="confirm" @click="confirmDelete">确 定</a>
                        <a class="cancel" @click="dialogVisible = false">取 消</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import myInputNumber from './public/MyInputNumber'
export default {
    name: 'cartList',
    props: ['itemId','imgUrl', 'title', 'content', 'price', 'count'],
    data(){
        return{
            dialogVisible: false
        }
    },
    methods:{
        getOperator(op){
            if (op === 'plus') {
                this.$store.commit('addGoods',this.id);
            } else {
                if (this.counter === 1) {
                    this.dialogVisible = true;
                } else {
                    this.$store.commit('reduceGoods',this.id);
                }
            }
        },
        confirmDelete(){
            this.dialogVisible = false;
            this.$store.commit('deleteGoodsFromCart',this.id);
        }
    },
    computed: {
        id () {
            return this.itemId;
        },
        counter(){
            let that = this;
            let cartGoods = this.$store.state.cartGoods;
            let result = 0;
            cartGoods.some(good => {
                if (good.id === that.id) {
                    result = good.count
                }
            })
            return result;
        }
    },
    components:{
        myInputNumber
    }
}
</script>

<style lang="scss" scoped>
    .cart_list{
        width: 100%;
        padding: .3125rem 0;
        border: 1px solid #eee;
        margin-top: 5px;
        .cartIMG{
            float: left;
            width: 40%;
            img{
                width: 80%;
            }
        }
    .cartMSG{
        float: right;
        width: 60%;
        box-sizing: border-box;
        .list_title{
            @include fz(.5rem);
        }
        .list_msg{
            @include fz(.4375rem);
        }
        .price{
            @include fz(.375rem);
            color: #e94750;
        }
    }
    .shadow{
        width: 100%;
        height: 100%;
        background: rgba($color: #000000, $alpha: .4);
        position:fixed;
        top:0;
        left:0;
        z-index: 1001;
        .shadow_main{
            width: 80%;
            margin: 50% auto 0 auto;
            box-sizing: border-box;
            .shadow_con{
                background: #fff;                             
            }
            .shadow_top{
                padding: 5px 10px;               
                background: $mainColor;
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
                text-align: center;
                color: #fff;
                @include fz(.5rem);
                .icon-guanbi{
                    float: right;
                    @include fz(.625rem);
                }
            }
            .shadow_con{
                padding: 10px;
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
                .shadow_msg{
                    text-align: center;
                    @include fz(.5625rem);
                }
                .shadow_btn{
                    width: 65%;
                    display: flex;
                    justify-content: space-between;
                    margin: 30px auto 0;
                    a{
                        padding: 4px 16px;
                        border-radius: 4px;
                        @include fz(.5rem);
                    }
                    .confirm{
                        background: $mainColor;
                        color: #fff;
                    }   
                    .cancel{
                        background: #eee;
                    }
                }
            }
        }
    }
}
</style>


