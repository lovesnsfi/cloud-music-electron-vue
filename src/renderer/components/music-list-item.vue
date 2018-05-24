<template>
  <div class="music-item">
    <img :src="item.picUrl||item.coverImgUrl" alt="" class=" img-responsive">
    <span>{{item.name}}</span>
  </div>
</template>

<script>
export default {
  name:"musicListItem",
  props:["item"]
}
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
  .music-item{
        width: 19.5%;
        box-sizing: border-box;
        padding: .5%;
        >img{
          padding: 5px;
         
        }
        >span{
          font-size: 12px;
        }
      }
</style>

