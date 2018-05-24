<template>
  <div class=" container tuijian">
       <pic-swiper></pic-swiper>
       <loading-process v-if="showLoading"></loading-process>
       <music-list :result="tuijianMusicList">
         <span slot="music-list-type-name">推荐歌单</span>
       </music-list>
    </div>
</template>

<script>
import picSwiper from "@/components/pic-swiper";
import musicList from "@/components/music-list";
import loadingProcess from "@/components/loading-process";
export default {
  name:"tuijian",
  components:{
    musicList,picSwiper,loadingProcess
  },
  data(){
    return {
      tuijianMusicList:[],
      showLoading:true
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
          this.showLoading=false;
          this.tuijianMusicList=res.data.result;
        }
      }).catch(err=>{
          this.showLoading=false;
      });
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
