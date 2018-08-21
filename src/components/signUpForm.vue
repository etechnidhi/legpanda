<template>
    <div class="signUpForm">
        <br/><br/>
        <div class="shadow p-3 mb-5 bg-white rounded w-50 ">
            <div class="container my-5">
                <div class="form_container">
                    <h3 class="text-lg-left font-weight-bold">Finish Registration</h3>
                    <b-container class="bv-example-row">
                        <v-form v-model="valid">
                            <b-row id="inputRow">
                                <b-col>
                                    <v-text-field v-model="email" label="E-Mail Address" required></v-text-field>
                                </b-col>
                                <b-col>
                                    <v-text-field v-model="password" label="Password" required></v-text-field>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                    <v-text-field v-model="fName" label="First Name" required></v-text-field>
                                </b-col>
                                <b-col>
                                    <v-text-field v-model="lName" label="Last Name" required></v-text-field>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                    <v-text-field v-model="mobile" label="Mobile Phone Number" required></v-text-field>
                                </b-col>
                                <b-col></b-col>
                            </b-row>
                        </v-form>
                    </b-container>
                    <p class="text-sm-left"><strong>Important Note:</strong>We will never publish your phone number - we just use it, when we receive specific booking requests for you. By clicking the save button, you accept our general terms and our data protection regulations.</p>
                    <b-button type="submit" @click="save" class="button w-100 border-0 border-dark">Save Now and start for free</b-button>
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
      show: true
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
      this.$router.push("/home");
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
</style>
