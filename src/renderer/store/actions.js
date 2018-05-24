export default {
  setUserInfo({commit},userInfo){
    commit("setUserInfo",userInfo);
  },
  logOut({commit}){
    commit('logOut')
  }
}