<template>
    <div class="profileform">
        <div class="shadow p-3 mb-5 bg-white rounded w-50 ">
            <div class="container my-5">
                <div class="profileContainer">
    
                    <div>
                        <h2 class="text-left font-weight-bold" id="makeMargin">asd asd</h2>
                        <div class="myRight">
                            <i class="fa fa-picture-o fa-3x" aria-hidden="true"></i>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush text-left" id="ulList">
                        <li class="list-group-item">
                            <h6>My Website</h6>
                        </li>
                        <li class="list-group-item" @click="aboutMe">
                            <h6>About Me</h6>
                        </li>
                        <li class="list-group-item" @click="Signalment">
                            <h6>Signalment</h6>
                        </li>
                        <li class="list-group-item" @click="myCv">
                            <h6>My CV</h6>
                        </li>
                        <li class="list-group-item">
                            <h6>Payment</h6>
                        </li>
                        <li class="list-group-item">
                            <h6>Verification</h6>
                        </li>
                        <li class="list-group-item">
                            <h6>Valuations</h6>
                        </li>
                        <li class="list-group-item" @click="logout">
                            <h6>Logout</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ProfileForm",
  methods: {
    ...mapActions({
      dologout: "logout"
    }),
    aboutMe: function() {
      this.$router.push("/aboutMe");
    },
    Signalment: function() {
      this.$router.push("/Signalment");
    },
    myCv: function() {
      this.$router.push("/mycv");
    },
    logout: function() {
      this.dologout();
      this.$router.push("/");
    }
  }
};
</script>

<style>
.list-group {
  margin-top: 190px !important;
}

#makeMargin {
  margin-left: 15px;
}

.myRight {
  width: 25%;
  float: right;
  margin-top: -40px !important;
}

i {
  color: #a9a9a9 !important;
}

.profileContainer {
  width: 80%;
  margin: 0 auto;
}

#ulList {
  margin-top: 80px !important;
}
</style>
