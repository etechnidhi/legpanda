<template>
    <div class="profileform">
        <div class="shadow p-3 mb-5 bg-white rounded w-50 ">
            <div class="container my-5">
                <div class="profileContainer">
    
                    <div class="myContainerProfile">
                        <div class="myLeft">
                            <h2 class="text-left font-weight-bold" id="profileName">asd asd</h2>
                        </div>
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
      dologout: "logout",sendId:"sendId"
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
      this.$router.push("login");
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
.list-group {
  margin-top: 190px !important;
}

.myRight {
  float: right;
}

.myLeft {
  width: 100%;
}

i {
  color: #a9a9a9 !important;
}

.myContainerProfile {
  width: 100%;
  display: flex;
}

.profileContainer {
  width: 80%;
  margin: 0 auto;
}

#ulList {
  margin-top: 80px !important;
}

@media only screen and (max-width: 600px) {
  .myContainerProfile {
    display: block;
  }
  #profileName {
    text-align: center !important;
  }
  .myRight {
    float: none;
    text-align: center;
  }
  #ulList {
    margin-top: 45px !important;
  }
}
</style>
