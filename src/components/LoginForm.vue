<template>
  <div id="login">
    <br/><br/>
    <div class="shadow p-3 mb-5 bg-white rounded w-50 ">
      <br/><br/>
      <div class="form_container">
        <h3 class="text-lg-left font-weight-bold">Login</h3>
        <br/><br/>
        <b-form>
          <b-form-group id="exampleInputGroup1" label="E-Mail Address*" class="text-sm-left">
            <b-form-input class="border border-dark border-top-0 border-right-0 border-left-0 rounded-0" type="email" v-model="email" required placeholder="Enter email">
            </b-form-input>
          </b-form-group>
          <b-form-group id="exampleInputGroup2" label="Password*" class="text-sm-left">
            <b-form-input id="exampleInput2" type="password" v-model="password"  required placeholder="Enter Password" class="border border-dark border-top-0 border-right-0 border-left-0 rounded-0">
            </b-form-input>
          </b-form-group>
          <b-button type="button" @click="loginClick" class="button w-100 border-0 border-dark">Login</b-button>
        </b-form>
        <div class="center-link">
          <a href="#" @click="forgot">Forgot Password? Reset it!</a><br/>
          <a href="#" @click="signup">No Account yet? Register Now</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions,mapGetters } from "vuex";
import { mapFields } from "vuex-map-fields";
export default {
  name: "LoginForm",
  watch:{
    getUser: function(val){
      if(val.email){
        this.$router.push("/Home");
      }
    }
  },
  computed:{
    ...mapGetters({
      isLoggedIn:"isLoggedIn",
      getUser: "getUser"
    }),
...mapFields(["email", "password"]),
  },
  methods: {
    ...mapActions(["login"]),
    signup: function() {
      this.$router.push("/signUp");
    },
    forgot: function(){
      this.$router.push("/forgot");
    },
    loginClick: function(){  
      this.login({
        email:this.email,
        password: this.password
      })
    }
  }
};
</script>

<style>
.shadow {
  margin: 0 auto;
}

.button {
  background-color: #00ccb7 !important;
  padding-top: 13px !important;
  padding-bottom: 13px !important;
}

.form_container {
  width: 80%;
  margin: 0 auto;
}

h3 {
  color: black !important;
}

.center-link {
  margin-top: 45px !important;
}

a {
  text-decoration: underline;
  font-size: 15px !important;
}
</style>
