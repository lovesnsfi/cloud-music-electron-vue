<template>
  <div class="leftMenu">
    <div class="menu-header">推荐</div>
    <ul class=" list-unstyled menu-item">
      <router-link tag="li" active-class="active" :to="{name:'findMusic'}">
        <a href="#"><span class=" glyphicon glyphicon-music"></span>发现音乐</a>
      </router-link>
      <li><a href="#"><span class=" glyphicon glyphicon-signal"></span>私人FM</a></li>
      <li><a href="#"><span class=" glyphicon glyphicon-facetime-video"></span>视频</a></li>
      <li><a href="#"><span class=" glyphicon glyphicon-music"></span>朋友</a></li>
    </ul>

    <div class="menu-header">我的音乐</div>
    <ul class=" list-unstyled menu-item">
      <li><a href="#"><span class=" glyphicon glyphicon-open-file"></span>本地音乐</a></li>
      <li><a href="#"><span class=" glyphicon glyphicon-download-alt"></span>下载管理</a></li>
    </ul>

    <div class="menu-header">创建的歌单
      <label style=" background-color:transparent;color:gray " class=" btn label label-default pull-right" >
        <span class=" glyphicon glyphicon-plus "></span>
      </label>
    </div>
    <ul class=" list-unstyled menu-item">
      <li ><a href="#"><span class=" glyphicon glyphicon-heart-empty"></span>我喜欢的音乐</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"leftMenu",
  data(){
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
a{
  color: gray;
  text-decoration: none;
}
@import "../scss/common.scss";
.leftMenu{
  .menu-header{
    box-sizing: border-box;
    padding: 10px;
    height: 35px;
    line-break: 35px;
  }
  .menu-item{
    li{
      height:35px;
      @include flexbox(){
        align-items: center;
      }
      box-sizing: border-box;
      padding-left: 10px;
      .glyphicon{
        margin: 0 5px;
      }
      &.active{
        background-color: #E6E7EA;
        border-left: 3px solid #C62F2F;
      }
      >a{
        font-size: 12px;
      }
    }
  }
}
</style>

