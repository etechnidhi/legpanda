import { getField, updateField } from "vuex-map-fields";

export default {
  state: {
    users: [], //array of users
    email: "", //email field for updateField
    password: "", //password field for updateField
    fName: "", //first name field for updateField
    lName: "", //last Name field for updateField
    mobile: "", //mobile field for updateField
    userObject: {}, //contains the loggedin user
    messageError: "", //contain message error
    error: false, //true the error modal
    currentPage: "",
  },
  getters: {
    getField,
    getValid: state => (state.valid ? true : false),
    getUser: state => state.userObject,
    responseError: state => (state.error ? true : false),
    isLoggedIn: state => (state.email ? true : false),
    setCurrentPage: state => state.currentPage
  },
  actions: {
    async login({ commit }, payload) {
      commit("login", payload);
      commit("blankform");
    },
    async signup({ commit }, payload) {
      commit("signUpForm", payload);
      commit("blankform");
    },
    logout({ commit }) {
      commit("logout");
    },
    sendId({commit},payload){
      commit("setId",payload);      
    },
    errorBlank({commit},payload){
      commit("noError",payload);
      
    }
  },
  mutations: {
    updateField,
    login: (state, data) => {
      state.error = false;
      state.messageError ="";
      for (var i = 0; i < state.users.length; i++) {
        if (
          state.users[i].email == data.email &&
          state.users[i].password == data.password
        ) {
          state.userObject = data;
          state.error = false;
          state.currentPage = 1;
        } else {
          state.error = true;
          state.messageError = "Invalid id or password";
        }
      }
    },
    signUpForm: (state, data) => {
      state.users.push(data);
    },
    blankform: state => {
      state.email = "";
      state.password = "";
      state.fName = "";
      state.lName = "";
      state.mobile = "";
    },
    logout: state => {
      state.userObject = {};
      state.currentPage = "";
    },
    setId: (state,data)=>{
      state.currentPage = data;
    },
    noError: (state,data)=>{
      state.error = data.error;
      state.messageError = data.message;
    }
  }
};
