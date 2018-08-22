<template>
  <div id="ForgotPassword">
    <br/><br/>
    <div class="shadow p-3 mb-5 bg-white rounded w-50 " id="shadowBox">
      <div class="myEmail">
        <v-form>
          <v-text-field label="E-Mail Address*" required></v-text-field>
          <b-button type="submit" class="button w-100 border-0 border-dark" id="ResetButton">Reset Password</b-button>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPasswordForm",
  data() {
    return {
      form: {
        email: "",
        name: ""
      },
      show: true
    };
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
