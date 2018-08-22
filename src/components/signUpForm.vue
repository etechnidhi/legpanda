<template>
    <div class="signUpForm">
        <br/><br/>
        <div class="shadow p-3 mb-5 bg-white rounded w-50 ">
            <div class="container my-5">
                <div class="form_container">
                    <h3 class="text-lg-left font-weight-bold" id="registratioHeading">Finish Registration</h3>
                    <b-container class="bv-example-row">
                        <v-form v-model="valid" ref="form">
                            <b-row id="inputRow">
                                <b-col>
                                    <v-text-field v-model="email" :rules="emailRules" label="E-Mail Address" required></v-text-field>
                                </b-col>
                                <b-col>
                                    <v-text-field type="password" :rules="passwordRules" v-model="password" label="Password" required></v-text-field>
                                </b-col>
                            </b-row>
                            <b-row id="inputRow">
                                <b-col>
                                    <v-text-field v-model="fName" :rules="nameRules" label="First Name" required></v-text-field>
                                </b-col>
                                <b-col>
                                    <v-text-field v-model="lName" :rules="nameRules" label="Last Name" required></v-text-field>
                                </b-col>
                            </b-row>
                            <b-row id="inputRow">
                                <b-col>
                                    <v-text-field v-model="mobile" :rules="numberRules" label="Mobile Phone Number" required></v-text-field>
                                </b-col>
                                <b-col></b-col>
                            </b-row>
                        </v-form>
                    </b-container>
                    <p class="text-sm-left"><strong>Important Note:</strong>We will never publish your phone number - we just use it, when we receive specific booking requests for you. By clicking the save button, you accept our general terms and our data protection regulations.</p>
                    <b-button type="submit" @click="save" class="button w-100 border-0 border-dark" :disabled="!valid" id="signupButton">Save Now and start for free</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { mapFields } from "vuex-map-fields";
export default {
  name: "SignUpForm",
  data() {
    return {
      valid: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password  is required",
        v => v.length >= 8 || "Password should be minimum of 8 characters",
        v => v.length <= 12 || "Password should not exceed to 12 characters"
      ],
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 15 || "Can't be more than 15 characters",
        v => /^[a-zA-Z]+$/.test(v) || "Name accepts alphabets only"
      ],
      numberRules: [
        v => !!v || "Number is required",
        v => /^[0-9]+$/.test(v) || "Phone number accepts number only",
        v => v.length >= 10 || "Phone number can't be less than 10 digits",
        v => v.length <= 12 || "Phone number can't be more than 12 digits"
      ]
    };
  },
  watch: {
    getUser: function(val) {
      if (val.email) {
        this.$router.push("/login");
      }
    }
  },
  computed: {
    ...mapGetters({
      getUser: "getUser"
    }),
    ...mapFields(["email", "password", "fName", "lName", "mobile"])
  },
  methods: {
    ...mapActions(["signup"]),
    save: function() {
      this.$refs.form.validate();
      this.$router.push("/login");
      this.signup({
        email: this.email,
        password: this.password,
        fName: this.fName,
        lName: this.lName,
        mobile: this.mobile
      });
    }
  }
};
</script>

<style>
.container {
  margin-right: 0px !important;
  margin-left: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}

#signupButton {
  font-size: 15px;
}

@media only screen and (max-width: 600px) {
  #signupButton {
    font-size: 10px;
  }
  #inputRow {
    display: block;
  }
  #registratioHeading {
    font-size: 20px;
  }
}
</style>
