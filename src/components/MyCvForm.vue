<template>
    <div id="MyCvForm">
        <div class="shadow p-3 mb-5 bg-white rounded w-50" id="shadowDiv">
            <div class="container my-5">
                <div class="form_container">
                    <h3 class="text-lg-left font-weight-bold">My CV</h3>
                    <div class="signalmentContainer">
                        <p class="paragraph"> When did you finish your professional education and when did you start to work as a freelancer?</p>
                        <b-row id="cvRow">
                            <b-col>
                                <v-select label="Professional Since"></v-select>
                            </b-col>
                            <b-col>
                                <v-select label="Freelance Since"></v-select>
                            </b-col>
                        </b-row>
                    </div>
                    <p class="paragraph"> Where you have been employed before? Please add your employment history here.</p>
                    <div class="boxAdditional" v-if="additional">
                        <div class="close" @click="closeButton">
                            <i class="fa fa-times-circle-o fa-lg" id="close" aria-hidden="true"></i>
                        </div>
                        <div class="secondAddinional">
                            <v-form class="form">
                                <v-text-field label="Name of my employer" required></v-text-field>
                                <b-row id="cvRow">
                                    <b-col>
                                        <v-select class="text-sm-left" label="City"></v-select>
                                    </b-col>
                                    <b-col>
                                        <v-select class="text-lg-left" label="From"></v-select>
                                    </b-col>
                                    <b-col>
                                        <v-select class="text-lg-left" label="Till"></v-select>
                                    </b-col>
                                </b-row>
                            </v-form>
                        </div>
                    </div>
    
                    <div class="add" @click="add">
                        <a class="employerAdder" href="#">Add additional employer</a>
                    </div>
                    <b-button type="submit" class="button w-100 border-0 border-dark" id="buttonId">Save</b-button>
                </div>
    
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MyCvForm",
  data() {
    return {
      additional: false
    };
  },
  methods: {
    ...mapActions(["sendId"]),
    add: function() {
      this.additional = true;
    },
    closeButton: function() {
      this.additional = false;
    }
  },
  beforeMount() {
    if (!this.$store.state.login.userObject.email) {
      this.$router.push("login");
    }
    this.sendId(4)
  }
};
</script>

<style>
.paragraph {
  text-align: left;
  font-size: 15px;
  margin-top: 20px;
}

.add {
  margin-bottom: 30px;
  margin-top: 25px;
  text-align: center;
}

#buttonId {
  font-size: 15px;
}

.employerAdder {
  text-decoration: none;
  color: black;
}

a:hover {
  color: #a9a9a9;
}

.boxAdditional {
  width: 100%;
  background-color: #f8f8f8;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
}

.secondAddinional {
  width: 80%;
  margin: 0 auto;
  color: #b0b0b0;
}

#close {
  float: right;
  margin-top: 20px;
  margin-right: 20px;
}

.form {
  margin-top: 50px;
}

@media only screen and (max-width: 600px) {
  #cvRow {
    display: block;
  }
  #buttonId {
    font-size: 10px;
  }
}
</style>
