<template>
    <div id="mine">
        <div class="login" v-if="!isLogin">
            <a class="login_btn" @click="toLogin">登 录</a>
        </div>
        <div class="user" v-else>
            <header>
                <h3>当前用户：{{username}}</h3>
            </header>
            <div class="mine_body">
                <div class="address" @click="toEditAddressPage">
                    <p>我的地址</p><i class="iconfont icon-youjiantou"></i>
                </div>
            </div>
            <div class="mine_footer">
                <div>
                    <p @click="logout">退出登录</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'mine',
    data(){
        return{

        }
    },
    computed:{
        isLogin(){
            return this.$store.state.isLogin;
        },
        username(){
            return this.$store.state.username;
        }
    },
    methods:{
        toLogin(){
            this.$router.push({
                path:'/login'
            })
        },
        logout(){
            this.$store.commit('logout');
            this.$router.push({
                path:'/mine'
            });
        },
        toEditAddressPage(){
            this.$router.push({
                path:'/editAddressPage'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .login_btn{
        display: block;
        width: 100px;
        height: 36px;
        @include fz(16px);
        text-align: center;
        line-height: 36px;
        background: $mainColor;
        color: #fff;
        border-radius: 4px;
        margin: 50% auto;
    }
    .user{
        text-align: center;
        width: 100%;
        margin-top: 50%;
        h3{
            @include fz(.625rem);
            font-weight: 600;
            padding: 10px 0;
        }
        .address{
            width: 100%;
            display: flex;
            justify-content: space-between;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
            padding: 15px 20px;
            @include fz(.5rem);
            box-sizing: border-box;
        }
        .mine_footer{
            width: 70%;
            margin: 0 auto;
            background: $mainColor;
            color: #fff;
            padding: 8px 20px;
            border-radius: 4px;
            margin-top: 26px;
            @include fz(.5rem);
        }
    }
</style>
