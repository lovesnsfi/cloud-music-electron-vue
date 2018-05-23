<template>
  <div class="music-list">
    <div class="music-list-type">
      <h4 style="font-weight:bold"><slot name="music-list-type-name"></slot></h4>
      <a href="#">更多<span class=" glyphicon glyphicon-menu-right"></span></a>
    </div>
    <div class="music-item-list">
      <div class="music-item" v-for="(item,index) in result" :key="index">
        <img :src="item.picUrl" alt="" class=" img-responsive">
        <span>{{item.name}}</span>
      </div>
      <!-- <div class="music-item">
        <img src="../assets/h-02.jpg" alt="" class=" img-responsive">
        <span>这是说明性的文字</span>
      </div>
      <div class="music-item">
        <img src="../assets/h-03.jpg" alt="" class=" img-responsive">
        <span>这是说明性的文字</span>
      </div>
      <div class="music-item">
        <img src="../assets/h-04.jpg" alt="" class=" img-responsive">
        <span>这是说明性的文字</span>
      </div>
      <div class="music-item">
        <img src="../assets/h-05.jpg" alt="" class=" img-responsive">
        <span>这是说明性的文字</span>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name:"musicList",
  data(){
    return {

    }
  },
  props:["result"]
}
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
.music-list{
  .music-list-type{
      @include flexbox(){
        justify-content: space-between;
        align-items: center;
      }
      border-bottom: 1px solid lightgray;
      height: 35px;
      >a{
        text-decoration: none;
        color: gray;
      }
    }
    .music-item-list{
      @include flexbox(){
        flex-wrap: wrap;
        justify-content: center;
      }
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
    }
}
</style>

