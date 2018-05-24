export default {
  setUserInfo({commit},userInfo){
    //登陆以后，提交到Vuex的时候，保存到cookie当中
    localStorage.setItem("userInfo",JSON.stringify(userInfo));
    commit("setUserInfo",userInfo);
  },
  logOut({commit}){
    localStorage.removeItem("userInfo");
    commit('logOut');
  }
}