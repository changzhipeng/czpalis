<template>
    <div id="cart">
        <div class="cart_header">
            <h3>购物车</h3>
        </div>
        <div class="divT"></div>
        <div class="cart_main" v-if="cartGoods.length > 0">
            <div class="cart_mineItem" v-for="item in cartGoods" :key="item.id">
                <cart-list 
                    :itemId="item.id"
                    :imgUrl="item.img"
                    :title="item.title"
                    :content="item.content"
                    :price="item.price"
                    :count="item.count">
                </cart-list>
            </div>
            <div class="price_wrap">
                <ul >
                    <li class="goodsTotal">
                        <span>商品总价</span>
                        <i>&yen;{{amount}}</i>
                    </li>
                    <li class="packet" >
                        <span>红包</span>
                        <div class="select">
                            <input type="text" readonly class="redInput" @click="redInput" v-model="redPacketPlaceholder">
                            <div class="selectList" @click="offSelect" v-show="selectListShow" v-for="item in redPackets" 
                                            :key="item.id"
                                            :label="item.label"
                                            :value="item.money"
                                            :disabled="isRedPacketDisabled(item.limit)">
                                <p>{{item.label}}</p>
                            </div>
                        </div>
                        <span v-show="redPacket">-&yen;{{redPacket}}</span>
                    </li>
                    <li class="paid">
                        <span>商品实付</span>
                        <i>&yen;{{amount - redPacket}}</i>
                    </li>
                    <li class="freight">
                        <span>运费(实付满46包邮)</span>
                        <span class="float-right">
                            <span class="postage" v-show="needPostage">&yen;{{ postage }}</span>
                            <span class="postage" v-show="!needPostage">免邮</span>
                        </span>
                    </li>
                    <li class="total">
                        <span>合计</span>
                        <i>&yen;{{pay}}</i>
                    </li>
                </ul>
            </div>
        </div>
        <footer class="cart_footer" v-show="cartGoods.length > 0">
            <div class="toPay">
                <p>去结算<i class="iconfont icon-youjiantou"></i></p>
            </div>
        </footer>
        <div v-if="cartGoods.length === 0" class="empty-wrap">
            你还没有添加任何商品哦~
        </div>
    </div>
</template>

<script>
import cartList from '../components/cartList.vue'
export default {
    name: 'cart',
    data(){
        return{
            redPackets: [
                {id: 1, money: 10, limit: 70, label: '10元红包(满70可用)'},
                {id: 2, money: 20, limit: 100, label: '20元红包(满100可用)'},
                {id: 3, money: 30, limit: 150, label: '30元红包(满150可用)'}
            ],
            selectListShow: false,
            redPacket: '',
            redPacketPlaceholder: '无可用红包',
            postage: 6,
            needPostage: true
        }
    },
    credted(){

    },
    components:{
        cartList
    },
    computed:{
        cartGoods () {
            return this.$store.state.cartGoods;
        },
        amount(){
            let cartGoods = this.$store.state.cartGoods;
            let result = 0;
            cartGoods.forEach(good => {
                result = good.price * good.count;
            });
            return result;
        },
        pay(){
            let result = this.amount -this.redPacket;
            if (result >= 49) {
                this.needPostage = false;
            } else {
                this.needPostage = true;
            }
            if (this.needPostage) {
                result += this.postage
            }
            return result;
        }
    },
    methods:{
        redInput(){
            this.selectListShow = true;
        },
        offSelect(){
            this.selectListShow = false;
        },
        isRedPacketDisabled (limit){
            if (this.amount < limit) {
                if (this.amount < this.redPackets[0].limit) {
                    this.redPacket = '';
                    this.redPacketPlaceholder = '无可用红包';
                }
                return true;
            } else {
                //有红包可用时，默认选择最大优惠
                this.redPackets.concat().reverse().some( val => {
                    if (this.limit <= this.amount) {
                        this.redPacket = val.money;
                        return true;
                    }
                })
                return false;
            }

        }
    }
}
</script>

<style lang="scss" scoped>
    #app{
        background: #f5f5f5;
    }
    .cart_header{
        width: 100%;
        height: 48px;
        background: $mainColor;
        line-height: 1.25rem;
        text-align: center;
        position: fixed;
        top: 0;
        z-index: 999;
        color: #fff;
        @include fz(.5rem);
    }
    .cart_mineItem{
        background: #fff;
        margin-top:10px;
    }
    .empty-wrap{
        position: absolute;
        width: 100%;
        top: 50%;
        text-align: center;
    }
    .price_wrap{
        background: #fff;
        margin-top:10px;
    }
    .price_wrap ul{
        width: 100%;
        padding: 10px 20px;
        box-sizing: border-box;
        li{
            display: flex;
            justify-content: space-between;
            @include fz(.5rem);
            color: $mainFontColor;
            border-bottom: 1px solid #eee;
            padding: 10px 0;
        }
        .goodsTotal{
            padding: 14px 0;
        }
        .packet{
            display: flex;
            justify-content: space-between;
            input{
                width: 100%;
                @include fz(.4375rem);
                height: 25px;
                line-height: 25px;
                border-radius: 4px;
                border: 1px solid #eee;
                padding-left: 10px;
                box-sizing: border-box;
            }
            div.select{
                width: 60%;
                @include fz(.4375rem);
                div.selectList{
                    border: 1px solid #eee;
                }
                p{
                    box-sizing: border-box;
                    border-bottom: 1px solid #eee;
                    padding: 3px 0 3px 10px;                   
                }
            }
        }
    }
    .cart_footer{
        width: 100%;
        position: fixed;
        bottom: 50px;
        background: #fff;
        height: 40px;
        line-height: 40px;
        border-top: 1px solid #eee;
        .toPay{
            display: flex;
            justify-content: flex-end;
            p{
                width: 30%;
                @include fz(.5rem);
                color: #fff;
                background: $mainColor;
                text-align: center;
            }
        }
    }
</style>

