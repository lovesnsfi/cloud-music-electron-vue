<template>
  <div class=" container tuijian">
       <pic-swiper></pic-swiper>
       <music-list :result="tuijianMusicList">
         <span slot="music-list-type-name">推荐歌单</span>
       </music-list>
    </div>
</template>

<script>
import picSwiper from "@/components/pic-swiper";
import musicList from "@/components/music-list";
export default {
  name:"tuijian",
  components:{
    musicList,picSwiper
  },
  data(){
    return {
      tuijianMusicList:[]
    }
  },
   created(){
     console.log(this.$router);
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
}
</script>

<style lang="scss" scoped>

</style>
