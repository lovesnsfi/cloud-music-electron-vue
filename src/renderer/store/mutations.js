export default {
  setUserInfo(state,userInfo){
    state.userInfo=userInfo;
  },
  logOut(state){
    state.userInfo={
      avatarUrl:"../../../static/images/userPhoto.svg",
      nickname:"未登陆",
      userId:""
    }
  }
}