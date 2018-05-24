<template>
  <header class="header" style="-webkit-app-region: drag">
      <div class="left" style="-webkit-app-region: no-drag">
        <div class="header_title">
          <span class=" glyphicon glyphicon-music" style="margin:0 10px"></span>网易云音乐
        </div>
        <div class="btn-navigator">
          <label class=" label label-danger btn" @click="$router.back()" >
            <span class=" glyphicon glyphicon-arrow-left"></span>
          </label>
          <label class=" label label-danger btn" @click="$router.forward()">
            <span class=" glyphicon glyphicon-arrow-right"></span>
          </label>
        </div>
        <input type="text" placeholder="搜索歌手、歌词、电台、歌曲" class="txtQuery">
      </div>
      <div class="right" style="-webkit-app-region: no-drag">
        <ul class=" list-inline list-unstyled">
          <li>
            <img :src="userInfo.avatarUrl" alt="" class=" img-circle" style="width:30px;height:30px">
          </li>
          <li class=" dropdown">
            <a href="#" data-toggle="dropdown" class=" dropdown-toggle" style="color:white">
              {{userInfo.nickname}}<span class="caret"></span>
            </a>
            <ul class=" dropdown-menu" v-if="userInfo.userId==''">
              <li><a href="#" @click="loginByUserId">账号登陆</a></li>
              <li><a href="#" @click="$emit('loginByPhone')">手机号登陆</a></li>
            </ul>
            <ul class=" dropdown-menu" v-if="userInfo.userId!=''">
              <li><a href="#" @click="logOut">退出登陆</a></li>
            </ul>
            
          </li>
          <li><a href="#" style="color:white"><span class="glyphicon glyphicon-eye-open"></span></a></li>
          <li><a href="#" style="color:white"><span class=" glyphicon glyphicon-envelope"></span></a></li>
          <li><a href="#" style="color:white"><span class="glyphicon glyphicon-cog"></span></a></li>
        </ul>
        <span style="color:white;margin:0 10px">|</span>
        <ul class=" list-inline list-unstyled">
          <li @click="windowMin"> <a href="#" style="color:white"><span   class="	glyphicon glyphicon-collapse-down	"></span></a></li>
          <li @click="windowMax"><a href="#" style="color:white"><span class="glyphicon glyphicon-fullscreen"></span></a></li>
          <li @click="exitSys"><a href="#" style="color:white"><span class="glyphicon glyphicon-off"></span></a></li>
        </ul>
      </div>
    </header>
</template>

<script>
import {ipcRenderer,remote} from "electron";
import {mapGetters} from "vuex";
export default {
  name:"m-header",
  data(){
    return {

    }
  },
  computed:{
    ...mapGetters(["userInfo"])
  },
  methods:{
    exitSys(){
      let id = remote.dialog.showMessageBox(null,{
        title:"请确认",
        message:"确定要退出网易云音乐吗？",
        buttons:["我要退出","我点错了"],
        defaultId:1
      });
      if(id===0){
        ipcRenderer.send("window-close");
      }

    },
    windowMin(){
      console.log("min");
      ipcRenderer.send("window-min");
    },
    windowMax(){
      ipcRenderer.send("window-max");
    },
    loginByUserId(){
      remote.dialog.showMessageBox(null,{
        title:"提示",
        message:"暂不支持账号登陆，请使用手机号登陆",
        buttons:["确定"]
      });
    },
    logOut(){
      this.$store.dispatch("logOut")
    }
  }
}
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
}
@import "../scss/common.scss";
.header{
  background-color: #C62F2F;
  height: 50px;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 10;
  @include flexbox(){
    align-items: center;
    justify-content: space-between;
  }
  >.left{
    color: white;
    @include flexbox(){
      align-items: center;
      height: 100%;
    }
    >.header_title
    {
      margin: 0 10px;
    }
    >.btn-navigator{
      @extend .header_title;
      >label{
        cursor: pointer;
      }
    }
    >.txtQuery{
      width: 250px;
      border:none;
      border-radius: 50px;
      outline: none;
      box-sizing: border-box;
      padding: 2px 15px;
      background-color:#A82828;
      color: white;
    }
  }
  >.right{
    margin-right: 10px;
    height: 100%;
    @include flexbox(){
      align-items: center;
    }
    >ul{
      margin: 0;
    }
  }
}
</style>
