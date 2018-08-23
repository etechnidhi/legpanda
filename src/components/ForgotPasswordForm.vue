<template>
  <div id="ForgotPassword">
    <br/><br/>
    <div class="shadow p-3 mb-5 bg-white rounded w-50 " id="shadowBox">
      <div class="myEmail">
        <v-form v-model="valid" ref="form">
          <v-text-field label="E-Mail Address*" :rules="emailRules" required></v-text-field>
          <b-button type="submit" :disabled="!valid" class="button w-100 border-0 border-dark" id="ResetButton" @click="forgotPassword">Reset Password</b-button>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  name: "ForgotPasswordForm",
  data() {
    return {
      valid: false,
        emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      show: true
    };
  },
  computed:{
    ...mapFields(["email"])
  },
  methods:{
    forgotPassword: function(){
      this.$refs.form.validate();
      this.$router.push("/login");
    }
  },
  beforeMount(){
    if(this.$store.state.login.userObject.email){
      this.$router.push("calendar");
    }
  }
};
</script>

<style>
.myEmail {
  width: 85%;
  margin: 0 auto;
  margin-bottom: 50px;
}

.w-100 {
  width: 100%;
}

#shadowBox {
  margin-top: 50px;
}

#ResetButton {
  font-size: 15px;
}

@media only screen and (max-width: 600px) {
  #ResetButton {
    font-size: 10px !important;
    width: auto !important;
  }
}
</style>
