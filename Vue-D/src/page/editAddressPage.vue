<template>
    <div id="editAddressPage">
        <div class="header">
            <router-link to="/">
                <i class="iconfont icon-fanhui"></i>
            </router-link>
            <h3 class="detail_title">我的收货地址</h3>
        </div>
        <div class="divT"></div>
        <div class="addressMain" v-if="allAddress.length > 0">
            <div class="addressItem" v-for="(item,index) in allAddress" :key="item.index">
                <div class="addressL">
                    <P>{{item.name}}</P>
                    <P>{{item.phone}}</P>
                    <P>{{item.city + item.detailAdd}}</P>
                </div>
                <a class="edit" @click="toModifyAddress(index)">编辑</a>
            </div>
        </div>
        <div class="footerBtn">
            <a @click="toAdressInputForm">新增收货地址</a>
        </div>
    </div>
</template>

<script>
export default {
    name:'editAddressPage',
    data(){
        return{

        }
    },
    computed:{
        allAddress(){
            return this.$store.state.address;
        }
    },
    methods:{
        toAdressInputForm(){
            this.$router.push({
                path:'/AddNewAddress'
            })
        },
        toModifyAddress(index){
            this.$router.push({
                path:'/ModifyAddress',
                query:{
                    index:index
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    #editAddressPage{
        width: 100%;
        height: 100%;
        background: #f3f3f3;
    }
    .header{
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
    .addressMain{
        width: 100%;
        margin-top:10px;
        .addressItem{
            display: flex;
            justify-content: space-between;
            background: #fff;
            box-sizing: border-box;
            padding: 15px 20px;
            @include fz(.4375rem);
            color: $mainFontColor;
            border-bottom: 1px solid #eee;
            p{
                padding: 5px 0;
            }
            a{
                color: $mainColor;
            }
        }
    }
    .footerBtn{
        width: 100%;
        position: absolute;
        @include fz(.5rem);
        text-align: center;
        bottom: 20px;
        a{
            display: block;
            width: 80%;
            margin: 0 auto;
            background: $mainColor;
            color: #fff;
            padding: 8px 20px;
            box-sizing: border-box;           
            border-radius: 4px;
        }
    }
</style>
