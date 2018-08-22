<template>
  <div id="login">
    <br/><br/>
    <div class="shadow p-3 mb-5 bg-white rounded w-50 ">
      <br/><br/>
      <div class="form_container" id="loginForm">
        <h3 class="text-lg-left font-weight-bold" id="loginId">Login</h3>
        <br/><br/>
        <v-form v-model="valid" ref="form">
          <v-text-field v-model="email" label="E-Mail Address" :rules="emailRules" required></v-text-field>
          <v-text-field v-model="password" type="password" label="Password" :rules="passwordlRules" required></v-text-field>
          <h1></h1>
          <b-button type="button" @click="loginClick" :loading="loading" :disabled="!valid" class="button w-100 border-0 border-dark" id="loginButton">Login</b-button>
        </v-form>
        <div class="center-link">
          <a href="#" @click="forgot">Forgot Password? Reset it!</a><br/><br/>
          <a href="#" @click="signup">No Account yet? Register Now</a>
        </div>
      </div>
    </div>
    <!-- Alert Modal  -->
    <div class="modal" v-bind:class="{ 'is-active': responseError }">
      <div class="modal-background"></div>
      <div class="modal-card ">
        <header class="modal-card-head">
          <p class="modal-card-title">Alert!</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body has-background-danger has-text-white-bis">
          {{this.$store.state.login.messageError}}
        </section>
        <footer class="modal-card-foot">
          <button class="button">OK</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { mapFields } from "vuex-map-fields";
export default {
  name: "LoginForm",
  data() {
    return {
      valid: false,
      loading: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      passwordlRules: [
        v => !!v || "Password is required",
        v => v.length >= 8 || "Password should be minimum of 8 characters",
        v => v.length <= 12 || "Password should not exceed to 12 characters"
      ]
    };
  },
  watch: {
    getUser: function(val) {
      if (val.email) {
        this.$router.push("/calendar");
      }
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "isLoggedIn",
      getUser: "getUser",
      responseError: "responseError"
    }),
    ...mapFields(["email", "password"])
  },
  methods: {
    ...mapActions(["login"]),
    signup: function() {
      this.$router.push("/signUp");
    },
    forgot: function() {
      this.$router.push("/forgot");
    },
    loginClick: function() {
      this.$refs.form.validate();
      this.loading = true;
      this.login({
        email: this.email,
        password: this.password
      });
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
  text-align: center;
}

a {
  text-decoration: underline;
  font-size: 15px !important;
}

#loginForm {
  margin-bottom: 25px;
}

.v-messages__message {
  color: red !important;
}

#loginButton {
  font-size: 15px;
}

@media only screen and (max-width: 600px) {
  #loginButton {
    font-size: 10px;
  }
  .w-50{
    width: 100% !important;
    box-shadow: unset !important;
  }
  .v-form{
    text-align: center;
  }
}
</style>
