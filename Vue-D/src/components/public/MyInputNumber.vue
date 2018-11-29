<template>
    <div id="MyInputNumber" @click.stop="">
        <i class="iconfont icon-jia" @click="plus"></i>
        <span class="number">{{number}}</span>
        <i class="iconfont icon-jian" @click="minus"></i>
    </div>
</template>

<script>
export default {
    name: 'MyInputNumber',
    props:['count'],
    data(){
        return{
            operator:''
        }
    },
    computed:{
        number(){
            return this.count
        }
    },
    methods:{
        minus(){
            console.log(this.operator)
            this.operator = 'minus';
            this.changeNumber();
        },
        plus(){
            console.log(this.operator)
            this.operator = 'plus';
            this.changeNumber();
        },
        changeNumber(){
            this.$emit('changeNumberEvent',this.operator);
        }
    }
}
</script>

<style lang="scss" scoped>
    #MyInputNumber{
        .iconfont{
            color: $mainColor;
        }
        .icon-jia{
            @include fz(1rem);
            margin-right: .3125rem;
        }
        .icon-jian{
            @include fz(1.2rem);
            margin-left: .3125rem;
        }
    }
</style>
