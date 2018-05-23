<template>
  <div class="index">
      <m-header></m-header>
      <div class="content">
        <div class="leftMenu">
          <left-menu></left-menu>
        </div>
        <div class="rightContent">
          <router-view></router-view>
        </div>
      </div>
      <div class="bottom"></div>
  </div>
</template>

<script>
import mHeader from "@/components/m-header";
import leftMenu from "@/components/leftMenu";
export default {
  name:"index",
  data(){
    return {

    }
  },
  components:{
    mHeader,leftMenu
  }
}
</script>

<style lang="scss" scoped>
.index{
  .content{
    position: fixed;
    left: 0px;
    width: 100%;
    top: 50px;
    bottom: 70px;
    background-color: lightgreen;
    >.leftMenu{
      position: absolute;
      width: 200px;
      height: 100%;
      left: 0px;
      top: 0px;
      background-color: #F5F5F7;
    }
    >.rightContent{
      position: absolute;
      right: 0px;
      left: 200px;
      height: 100%;
      background-color: white;
      overflow-y: scroll;
    }
    
  }
  >.bottom{
      height: 70px;
      position: fixed;
      width: 100%;
      bottom: 0px;
      left: 0px;
      background-color: #F6F6F8;
      border-top: 1px solid lightgray;
    }
}
</style>
