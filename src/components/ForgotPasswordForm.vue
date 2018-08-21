<template>
    <div id="ForgotPassword">
        <br/><br/>
        <div class="shadow p-3 mb-5 bg-white rounded w-50 " id="shadowBox">
            <div class="myEmail">
                <v-form v-model="valid">
                    <v-text-field v-model="name" label="E-Mail Address*" required></v-text-field>
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

#shadowBox {
  margin-top: 50px;
}

#ResetButton {
  font-size: 15px;
}
</style>
