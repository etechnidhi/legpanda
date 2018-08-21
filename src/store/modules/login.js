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
    error: false //true the error modal
  },
  getters: {
    getField,
    getValid: state => (state.valid ? true : false),
    getUser: state => state.userObject,
    responseError: state => (state.error ? true : false),
    isLoggedIn: state => (state.email ? true : false)
  },
  actions: {
    async login({ commit }, payload) {
      commit("login", payload);
      commit("blankform", "");
    },
    async signup({ commit }, payload) {
      commit("signUp", payload);
      commit("blankform", "");
    },
    logout({ commit }) {
      commit("logout");
    }
  },
  mutations: {
    updateField,
    login: (state, data) => {
      for (var i = 0; i <= state.users.length; i++) {
        if (
          state.users[i].email == data.email ||
          state.users[i].password == data.password
        ) {
          state.userObject = data;
        } else {
          state.error = true;
          state.messageError = "Invalid Name or Password";
        }
      }
    },
    signUp: (state, data) => {
      state.users.push(data);
    },
    blankform: (state, data) => {
      (state.email = data),
        (state.password = data),
        (state.fName = data),
        (state.lName = data),
        (state.mobile = data);
    },
    logout: state => {
      state.user = {};
    }
  }
};
