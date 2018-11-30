<template>
    <div id="AddNewAddress">
        <div class="header">
            <i class="iconfont icon-fanhui" @click="tomine"></i>
            <h3 class="detail_title">新增收货地址</h3>
        </div>
        <div class="divT"></div>
        <div class="addnew_main">
            <ul ref="newAddForm" :model="newAddForm">
                <li>
                    <span><i>*</i>收货人</span>
                    <input type="text" v-model="newAddForm.name">
                </li>
                <li>
                    <span><i>*</i>电话</span>
                    <input type="text" v-model="newAddForm.phone">
                </li>
                <li>
                    <span><i>*</i>所在城市</span>
                    <input type="text" v-model="newAddForm.city">
                </li>
                <li>
                    <span><i>*</i>收货地址</span>
                    <input type="text" v-model="newAddForm.detailAdd">
                </li>
            </ul>
        </div>
        <div class="addnew_btn">
            <a class="saveAddress" @click="saveAddress('newAddForm')">保存收货地址</a>
            <a class="replacement" @click="replacement('newAddForm')">重置</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddNewAddress',
    data(){
        return{
            newAddForm:{
                name: '',
                phone: '',
                city: '',
                detailAdd: ''
            }
        }
    },
    methods:{
        tomine(){
            this.$router.push({
                path:'/EditAddressPage'
            })
        },
        saveAddress(formName){
            // this.$refs[formName].validate((valid) => {
            // this.$refs[formName].validate((valid) => {
                // console.log(valid)
                // if (valid) {
                    this.$store.commit('addNewAddress',this.newAddForm);
                    this.$router.push({
                        path: '/editAddressPage'
                    })                     
                // } else {
                    // return false;
                // }
            // })
        }
    }
}
</script>

<style lang="scss" scoped>
#AddNewAddress{
    width: 100%;
    height: 100%;
    background: #f1f1f1;
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
    .addnew_main{
        background: #fff;
        margin-top: 10px;
        ul{
            width: 100%;
            li{
                display: flex;
                justify-content: space-between;
                @include fz(.4375rem);
                color: $mainFontColor;
                box-sizing: border-box;
                padding: 20px 10px;
                i{
                    color: #e94750;
                    margin-right: 4px;
                }
                span{
                    width: 40%;
                   display: flex;
                    justify-content: flex-start;
                    align-items: center;
                }
                input{
                    width: 60%;
                    border-radius: 4px;
                    border: 1px solid #eee;
                    height: 40px;
                    line-height: 40px;
                    padding-left: 10px;
                    box-sizing: border-box;
                }
            }
        }
    }
    .addnew_btn{
        margin-top: 30px;
        a{
            padding: 8px 20px;
            color: #fff;
            @include fz(.4375rem);
            border-radius: 4px;
        }
        .saveAddress{
            background: $mainColor;
            margin-left: 15%;
        }
        .replacement{
            background: #e94750;
            margin-left: 30px;
        }
    }
</style>
