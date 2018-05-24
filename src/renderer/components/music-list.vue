<template>
  <div class="music-list">
    <div class="music-list-type">
      <h4 style="font-weight:bold"><slot name="music-list-type-name"></slot></h4>
      <a href="#">更多<span class=" glyphicon glyphicon-menu-right"></span></a>
    </div>
    <div class="music-item-list">
      <music-list-item v-for="(item,index) in result" :key="index" :item="item"></music-list-item>
    </div>
  </div>
</template>

<script>
import musicListItem from "@/components/music-list-item";
export default {
  name:"musicList",
  data(){
    return {
    }
  },
  props:["result"],
  components:{
    musicListItem
  }
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
      
    }
		
}
</style>

