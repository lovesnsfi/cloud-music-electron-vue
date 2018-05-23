<template>
  <div class="findMusic">
    <!-- 发现音乐 -->
    <ul class="musicType">
      <li class="active"><a href="#">个性推荐</a></li>
      <li><a href="#">歌单</a></li>
      <li><a href="#">主播电台</a></li>
      <li><a href="#">排行榜</a></li>
      <li><a href="#">歌手</a></li>
      <li><a href="#">最新音乐</a></li>
    </ul>
    <div class=" container">
       <pic-swiper></pic-swiper>
       <music-list :result="tuijianMusicList">
         <span slot="music-list-type-name">推荐歌单</span>
       </music-list>
    </div>
  </div>
</template>

<script>
import picSwiper from "@/components/pic-swiper";
import musicList from "@/components/music-list";

export default {
  name: "findMusic",
  data() {
    return {
      tuijianMusicList:[]
    };
  },
  created(){
    this.gettuijianMusicList();
  },
  mounted() {
    
  },
  methods:{
    gettuijianMusicList(){
      this.$http.get("/personalized").then(res=>{
        if(res.data.code==200){
          this.tuijianMusicList=res.data.result;
        }
      });
    }
  },
  components:{
    picSwiper,musicList
  }
};
</script>

<style lang="scss" scoped>

@import "../scss/common.scss";
.findMusic {
  .musicType {
    margin: 0px;
    padding: 0px;
    list-style-type: none;
    border-bottom: 1px solid lightgray;
    @include flexbox() {
      justify-content: center;
    }
    li {
      > a {
        color: black;
        text-decoration: none;
      }
      @include flexbox() {
        align-items: center;
      }
      height: 40px;
      margin: 0 10px;
      box-sizing: border-box;
      &.active {
        border-bottom: 2px solid $primaryColor;
        > a {
          color: $primaryColor;
        }
      }
    }
  }
  .container{
    
  }
}
</style>
