<template>
    <div id="login">
        <header>
            <i class="iconfont icon-fanhui" @click="toPrePage"></i>
            <h3 class="detail_title">登 录</h3>
        </header>
        <div class="divT"></div>
        <main>
            <form>
                <div class="form_content">
                    <input type="text" name="username" v-model="username" class="username" placeholder="请输入用户名">
                    <input type="password" name="password" v-model="password" class="password" placeholder="请输入密码">
                    <div class="login_btn">
                        <a class="login" @click="login">登 录</a>
                        <a class="register">注册</a>
                    </div>
                </div>
            </form>
        </main>
    </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return {
            username: '王小明',
            password: '123456',
        }
    },
    methods:{
        login(){
            this.$store.commit('login',this.username);
            this.$router.go(-1);
        },
        toPrePage(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
    header{
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
    form{      
        .form_content{
            width: 70%;
            margin: 40% auto;
        }
       input{
           display: block;
           width: 100%;
           height: 34px;
           border-radius: 4px;
           line-height: 34px;
           border: 1px solid #eee;
           margin-top:30px;
           box-sizing: border-box;
           padding-left:10px;
       }
       .login_btn{
           width: 80%;
           display: flex;
           justify-content: space-around;
           margin-top:24px;
           a{
               padding: 6px 20px;
               border-radius: 4px;
               text-align: center;
                @include fz(.5rem);
                display: block;
           }
           .login{
               background: $mainColor;
               color: #fff;
           }
           .register{
               color: $mainFontColor;
               background: #eee;
           }
       }
    }
</style>
