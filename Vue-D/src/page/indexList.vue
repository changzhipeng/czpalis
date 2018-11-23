<template>
    <div class="index_list clearfix" @click="goToPageDetails">
        <div class="list_left">
            <img :src="imgUrl" alt="">
        </div>
        <div class="list_right">
            <div class="list_con">
                <h3 class="list_title">{{title}}</h3>
                <p class="list_msg">{{content}}</p>
                <div class="price">
                    &yen;<span class="price_number">{{price}}</span>
                </div>
            </div>
            <div class="carBtn">
                <i class="iconfont icon-jiarugouwuche"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'indexList',
    props: ['itemId','imgUrl','title','content','price','count'],
    data(){
        return {
            indexList:{
                id: this.itemId,
                img: this.imgUrl,
                title: this.title,
                content: this.content,
                price: this.price,
                count: this.count
            }
        }
        console.log(indexList)
    },
    methods:{
        goToPageDetails(){
            console.log(this.indexList)
            this.$router.push({
                path: '/pageDetails',
                query: this.indexList
            })
        }
    }
    
}
</script>

<style lang='scss' scoped>
.index_list{
    width: 100%;
    padding: .3125rem 0;
    border: 1px solid #eee;
    margin-top: 5px;
    .list_left{
        float: left;
        width: 40%;
        img{
            width: 80%;
        }
    }
    .list_right{
        float: right;
        width: 60%;
        box-sizing: border-box;
        .list_title{
            @include fz(.5rem);
        }
        .list_msg{
            @include fz(.4375rem);
        }
        .price{
            @include fz(.375rem);
            color: #e94750;
        }
        .carBtn{
            padding-right: .9375rem;
            box-sizing: border-box;
            width: 100%;
            text-align: right;
            .icon-jiarugouwuche{
                @include fz(.9375rem);
                color: $mainColor;
            }
        }
    }

}
</style>
