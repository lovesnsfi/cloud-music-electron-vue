<template>
  <div class="playList container">
    <!--歌单 -->
    <ul class="play-list-tag list-unstyled list-inline text-center">
      <li>热门标签:</li>
      <li v-for="(t,index) in hotPlayList" :key="index">{{t.name}}</li>
    </ul>
    <!--歌曲列表 -->
    <div class="play-list-content">
      <music-list-item v-for="(item,index) in playlists" :key="index" :item="item"></music-list-item>
    </div>
  </div>
</template>

<script>
import musicListItem from "@/components/music-list-item";
export default {
  name:'playList',
  data(){
    return {
      hotPlayList:[],
      playlists:[]
    }
  },
  created(){
    this.getHotPlayList();
    this.gethighquality();
  },
  methods:{
    //获取热门歌单标签
    getHotPlayList(){
      this.$http.get("/playlist/hot").then(res=>{
        this.hotPlayList=res.data.tags;
      })
    },
    //获取精品歌单
    gethighquality(){
      this.$http.get("/top/playlist/highquality?limit=30").then(res=>{
        this.playlists=res.data.playlists;
      });
    }
  },
  components:{
    musicListItem
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
.playList{
  .play-list-tag{
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 12px;
    margin: 10px 0;
    >li:not(:first-child){
      padding: 0 10px;
      border-right: 1px solid lightgray;
    }
  }
  .play-list-content{
     @include flexbox(){
        flex-wrap: wrap;
        justify-content: center;
      }
  }
}
</style>
