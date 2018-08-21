<template>
    <div class="aboutMe">
        <div class="shadow p-3 mb-5 bg-white rounded w-50" id="shadowDiv">
            <div class="container my-5">
                <div class="form_container">
                    <h3 class="text-lg-left font-weight-bold">About Me</h3>
                    <v-subheader class="text-sm-left">
                        Tell everyhting about yourself that potentiel client should Know about you
                    </v-subheader>
                    <v-textarea name="input-7-1" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></v-textarea>
                    <b-button type="submit" class="button w-100 border-0 border-dark" id="buttonId">Save</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "AboutMe"
};
</script>

<style>
#shadowDiv {
  margin-top: 50px;
}

#buttonId {
  font-size: 15px;
}

.v-subheader {
  padding: 0px !important;
  font-size: 18px;
  margin-top: 35px !important;
}

.v-textarea textarea {
  opacity: 0.6 !important;
  font-size: 15px;
}
</style>
