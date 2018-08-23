<template>
    <div class="aboutMe">
        <div class="shadow p-3 mb-5 bg-white rounded w-50" id="shadowDiv">
            <div class="container my-5">
                <div class="form_container">
                    <h3 class="text-lg-left font-weight-bold" id="about">About Me</h3>
                    <v-subheader class="text-sm-left" id="subheader">
                        Tell everyhting about yourself that potentiel client should Know about you
                    </v-subheader>
                    <v-textarea name="input-7-1" id="inputField" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud exercitation ullamco laboris commodo consequat."></v-textarea>
                    <b-button type="submit" id="aboutButton" class="button w-100 border-0 border-dark">Save</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "AboutMe",
  beforeMount() {
    if (!this.$store.state.login.userObject.email) {
      this.$router.push("login");
    }
  }
};
</script>

<style>
#shadowDiv {
  margin-top: 50px;
}

.v-subheader {
  padding: 0px !important;
  font-size: 18px;
  margin-top: 35px !important;
}

#aboutButton {
  font-size: 15px;
}

.v-textarea textarea {
  opacity: 0.6 !important;
  font-size: 15px;
}

@media only screen and (max-width: 600px) {
  #subheader {
    font-size: 15px;
    margin-top: 50px !important;
  }
  #about {
    font-size: 22px;
  }
  #inputField {
    margin-top: 25px;
  }
  #aboutButton {
    font-size: 10px;
  }
}
</style>
