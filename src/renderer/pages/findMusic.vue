<template>
  <div class="findMusic">
    <!-- 发现音乐 -->
    <ul class="musicType">
      <router-link active-class="active" tag="li" :to="{name:'tuijian'}">
        <a href="#">个性推荐</a>
      </router-link>
      <router-link active-class="active" tag="li" :to="{name:'playList'}">
        <a href="#">歌单</a>
      </router-link>
      <li><a href="#">主播电台</a></li>
      <li><a href="#">排行榜</a></li>
      <li><a href="#">歌手</a></li>
      <li><a href="#">最新音乐</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: "findMusic",
  data() {
    return {
    };
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
}
</style>
