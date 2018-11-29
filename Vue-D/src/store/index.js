import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username:'',
        isLogin:  false,
        cartCounter:0,
        cartGoods:[]  // 添加到购物车中的商品
    },
    mutations:{
        addGoodsToCart (state, item) {
            item.isInCart = true;
            item.count++;
            state.cartGoods.push(item);
            state.cartCounter++;
        },
        deleteGoodsFromCart(state,itemId){
            state.cartCounter--;
            state.cartGoods.some((val,index,Goods) => {
                console.log(val)
                console.log(index)
                console.log(Goods)
                if (val.id === itemId) {
                    val.isInCart = false;
                    val.count--;
                    Goods.slice(index,1);
                    return true;
                }
            })
        },
        addGoods(state,itemId){
            state.cartCounter ++;
            state.cartGoods.some(val => {
                if (val.id === itemId) {
                    val.count ++;
                    return true;
                }
            })
        },
        reduceGoods(state, itemId){
            state.cartCounter--;
            state.cartGoods.some(val => {
              if (val.id === itemId) {
                val.count--;
                return true;
              }
            })
        },
        login(state,username){
            state.username = username;
            state.isLogin = true;
        }
    }
})