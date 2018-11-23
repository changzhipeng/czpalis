<template>
    <div id="container">  
        <home-header></home-header>
        <swiperComponent :swiperOption="swiperOption"></swiperComponent>
        <div class="home_main">
            <transition-group enter-active-class="slideInRight">
                <ul class="goods animated" key="animatedCurrentKey">
                    <li v-for="item in goods" class="one_com" :key="item.id">
                        <index-list 
                            :itemId="item.id"
                            :imgUrl="item.img"
                            :title="item.title"
                            :content="item.content"
                            :price="item.price"
                            :count="0">
                        </index-list>
                    </li>
                </ul>
            </transition-group>
        </div>
    </div>
</template>

<script>
import HomeHeader from '../components/header'
import swiperComponent from '../components/swiper'
import indexList from './indexList'
export default {
    data() {
        return {
            goods:[],
            swiperOption: {
                pagination: {
                    el:'.swiper-pagination',
                    type: 'bullets',
                },     
                 autoplay: {
                    delay: 2000, //自动切换的时间间隔，单位ms
                    stopOnLastSlide: false, //当切换到最后一个slide时停止自动切换
                    disableOnInteraction: true, //用户操作swiper之后，是否禁止autoplay。
                    reverseDirection: false, //开启反向自动轮播。
                    waitForTransition: true, //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
                },
            }
            
        }
    },
    components:{
        swiperComponent,
        HomeHeader,
        indexList
    },
    methods:{
        fetchData(){
            //搜索
            this.$axios.get('static/data/goods.json')
            //成功返回
            .then(response=>{
                this.goods = response.data;
                // console.log(this.goods);
            })
            //失败返回
            .catch(error=>{
                console.log(error);
            })
        }
    },
    mounted(){
        this.fetchData();
    }
    
  }
</script>

<style lang="scss">
#container{padding-bottom: 1.111rem;}

</style>