<template>
    <div class="bottom-tab">
        <div class="tab-item" @click="switchTo('/index')">
                <img :src="'/index' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="首页">
                <span :class="{on: '/index' === $route.path}">首页</span>
            </div>
        <div class="tab-item" @click="switchTo('/recommend')">
                <img :src="'/recommend' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="推荐">
                <span :class="{on: '/recommend' === $route.path}">推荐</span>
            </div>
        <div class="tab-item" @click="switchTo('/cart')">
                <img :src="'/cart' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt="订单">
                <span :class="{on: '/cart' === $route.path}">订单</span>
            </div>
        <div class="tab-item" @click="switchTo('/mine')">
                <img :src="'/mine' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].normal" alt="我的">
                <span :class="{on: '/mine' === $route.path}">我的</span>
            </div>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            tabBarImgArr:[   //图片切换
                {normal: require('../assets/image/tabbarIcon/index.png'), selected: require('../assets/image/tabbarIcon/indexSelected.png')},
                {normal: require('../assets/image/tabbarIcon/recommend.png'), selected: require('../assets/image/tabbarIcon/recommendSelected.png')},
                {normal: require('../assets/image/tabbarIcon/car.png'), selected: require('../assets/image/tabbarIcon/carSelected.png')},
                {normal: require('../assets/image/tabbarIcon/mine.png'), selected: require('../assets/image/tabbarIcon/mineSelected.png')}
            ]
        }
    },
    methods:{
        switchTo(path){
            this.$router.replace(path)
        }
    }
}
</script>

<style lang="scss" scoped>
    .bottom-tab{
    width: 100%;
    height: 50px;
    background-color: #fff;
    position: fixed;
    left: 0px;
    bottom: 0px;
    display: flex;
    z-index: 999;
    border-top: 1px solid #eee;
    .tab-item{
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @include fz(12px);
      color: $mainFontColor;
      img{
         width: 30%;
         margin-bottom: .0625rem;
      }
      .on{
        color: $mainColor;
      }
    }
    }
</style>


