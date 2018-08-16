import { getField, updateField } from "vuex-map-fields";

export default {
  state: {
    user: [],
    email:"",
    password:"",
    userObject:{}
  },
  getters: {
      getField,
      getUser: state => state.userObject,
      isLoggedIn: state => (state.email ? true : false)
  },
  actions:{
      async login({ commit},payload){
          commit("login",payload);
          
      }
  },
  mutations:{
      updateField,
      login:(state,data)=>{
        state.user.push(data);
        state.userObject = data;
      }
  }
};
