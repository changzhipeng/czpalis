<template>
  <div class="header clearfix">
    <div class="header-left">
      <span class="HDaddress">
        <i class="iconfont  icon-dizhi"></i>
      </span>
    </div>
    <div class="header-input">
      <p>输入城市/景点/游玩主题</p>
    </div>
    <div class="header-right">
      <span class="HDsaoyisao">
        <i class="iconfont  icon-saoyisao"></i>
      </span>
      <span class="HDxiaoxi">
        <i class="iconfont  icon-xiaoxi"></i>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="scss" scoped>
  .header{
    display: flex;
    background: $mainColor;
    color: #fff;
    line-height: .75rem;
    padding: 10px 0;
    // justify-content: space-between;
    .iconfont{
      @include fz(.7rem);
    }
    .header-left{
        width: 1.45rem;
        text-align: center;
        float: left;
    }
    .header-input{
        width: 65%;
        line-height: .85rem;
        height: .85rem;
        background: #fff;
        color: #ccc;
        border-radius: .125rem;
        padding-left: .3125rem;
    }
    .header-right{
      width: 2rem;
      text-align: center;
      float: right;
    }
  }
</style>
