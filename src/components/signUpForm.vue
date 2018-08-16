<template>
    <div class="signUpForm">
        <br/><br/>
        <div class="shadow p-3 mb-5 bg-white rounded w-50 ">
            <br/><br/>
            <div class="container my-5">
                <div class="form_container">
                    <h3 class="text-lg-left font-weight-bold">Finish Registration</h3>
                    <br/><br/>
                    <b-container class="bv-example-row">
                        <b-row>
                            <b-col>
                                <div class="form-group">
                                    <input type="text" id="name" class="form-control border border-dark border-top-0 border-right-0 border-left-0 rounded-0" required>
                                    <label class="form-control-placeholder " label-for="name">Email Address</label>
                                </div>
                            </b-col>
                            <b-col>
                                <div class="form-group">
                                    <input type="text" id="name" class="form-control border border-dark border-top-0 border-right-0 border-left-0 rounded-0" required>
                                    <label class="form-control-placeholder " label-for="name">Password</label>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <div class="form-group">
                                    <input type="text" id="name" class="form-control border border-dark border-top-0 border-right-0 border-left-0 rounded-0" required>
                                    <label class="form-control-placeholder " label-for="name">First Name</label>
                                </div>
                            </b-col>
                            <b-col>
                                <div class="form-group">
                                    <input type="text" id="name" class="form-control border border-dark border-top-0 border-right-0 border-left-0 rounded-0" required>
                                    <label class="form-control-placeholder " label-for="name">Last Name</label>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <div class="form-group">
                                    <input type="text" id="name" class="form-control border border-dark border-top-0 border-right-0 border-left-0 rounded-0" required>
                                    <label class="form-control-placeholder " label-for="name">Mobile Phone Number</label>
                                </div>
                            </b-col>
                            <b-col></b-col>
                        </b-row>
                        <p><strong>Important Note:</strong>We will never publish your phone number - we just use it, when we receive specific booking requests for you. By clicking the save button, you accept our general terms and our data protection regulations.</p>
                        <b-button type="submit" @click="save" class="button w-100 border-0 border-dark">Save Now and start for free</b-button>
                    </b-container>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "SignUpForm",
  data() {
    return {
      show: true
    };
  },
  methods:{
      save: function(){
          this.$router.push("/home");
      }
  }

};
</script>

<style>
.form-group {
  position: relative;
  margin-bottom: 1.5rem;
}

.form-control-placeholder {
  position: absolute;
  top: 0;
  padding: 7px 0 0 13px;
  transition: all 200ms;
  opacity: 0.5;
}

.form-control:focus + .form-control-placeholder,
.form-control:valid + .form-control-placeholder {
  font-size: 75%;
  transform: translate3d(0, -100%, 0);
  opacity: 1;
}

p {
  text-align: left;
  margin-top: 25px;
  font-size: 15px;
}

.row {
  margin-top: 35px !important;
}

.form-control-placeholder {
  font-size: 18px;
}

.container {
  margin-right: 0px !important;
  margin-left: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
</style>
