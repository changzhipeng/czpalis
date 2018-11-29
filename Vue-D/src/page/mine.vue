<template>
    <div id="mine">
        <div class="login" v-if="!isLogin">
            <a class="login_btn" @click="toLogin">登 录</a>
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
            this.$store.state.isLogin
        }
    },
    methods:{
        toLogin(){
            this.$router.push({
                path:'/login'
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
</style>
