<template>
  <transition enter-active-class=" animated fadeInUpBig" leave-active-class=" animated flipOutY">
    <div class="login-box">
      <a href="#" class=" close" @click="$emit('closeLoginBox')">&times;</a>
      <h2 class=" text-center text-danger">手机号登陆</h2>
      <form role="form">
        <div class=" form-group">
          <div class=" input-group">
            <div class=" input-group-addon">
              <span class=" glyphicon glyphicon-phone"></span>
            </div>
            <input type="text" class=" form-control" placeholder="请输入手机号" v-model="formData.phone">
          </div>
        </div>
        <div class=" form-group">
          <div class=" input-group">
            <div class=" input-group-addon">
              <span class=" glyphicon glyphicon-lock"></span>
            </div>
            <input type="password" class=" form-control" placeholder="请输入密码" v-model="formData.password">
          </div>
        </div>
        <div class=" form-group">
          <button type="button" class=" btn btn-danger btn-block" :disabled="isLogin"  @click="loginSys">{{isLogin?'正在登陆...':'登陆'}}</button>
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
import {remote} from 'electron';
export default {
  name:"loginBox",
  data(){
    return {
      formData:{
        phone:"",
        password:""
      },
      isLogin:false    //登陆按钮的状态
    }
  },

  methods:{
    //点击登陆以后的事件
    loginSys(){
      this.isLogin=true;
      this.$http.get("/login/cellphone",{
        params:this.formData
      }).then(res=>{
        if(res.data.code==200){
          //设置用户信息
          this.$store.dispatch("setUserInfo",res.data.profile);   
          this.$emit('closeLoginBox'); //关闭登陆框  
        }
        else{
          remote.dialog.showMessageBox(null,{
            title:"错误",
            message:"账号或密码错误",
            buttons:["确定"]
          });
        }
        this.isLogin=false;
      }).catch(err=>{
        this.isLogin=false;
        remote.dialog.showErrorBox("错误","服务器错误"+err);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.login-box{
  width: 350px;
  height: 300px;
  background-color: white;
  box-shadow: 5px 5px 15px lightgray;
  position: fixed;
  left: 50%;
  top: 50%;
  box-sizing: border-box;
  padding: 20px;
  margin-left: -175px;
  margin-top: -150px;
  z-index: 1000;
}
</style>

