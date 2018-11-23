<template>
	<swiper :options="swiperOption" class="swiper-box">
        <swiper-slide class="swiper-item"></swiper-slide>
        <swiper-slide class="swiper-item"></swiper-slide>
        <swiper-slide class="swiper-item"></swiper-slide>
        <swiper-slide class="swiper-item"></swiper-slide>
		<swiper-slide class="swiper-item"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
    data(){
    	return{
    		
    	}	    
    },
    props:{
    	swiperOption:{
    		type:Object
    	}
    }
};
</script>

<style lang="scss">
@import '../base/css/base.scss';
	.swiper-box {
	    width: 100%;
	    height: 100%;
	    margin: 0 auto;
	    .swiper-item {
	        height: 5rem;
	        background: url() no-repeat center/cover;
	         &:nth-of-type(1){
	       	 @include dpr-img("../assets/image/banner/","swiper1"); 
	       } 
	        &:nth-of-type(2){
	        	@include dpr-img("../assets/image/banner/","swiper2");
	        }
	        &:nth-of-type(3){
	        	@include dpr-img("../assets/image/banner/","swiper3");
	        }
	        &:nth-of-type(4){
	        	@include dpr-img("../assets/image/banner/","swiper4");
			}  
			&:nth-of-type(5){
	        	@include dpr-img("../assets/image/banner/","swiper5");
	        } 
	    }	   
	}
	
</style>