<template>
  <div class="header">
    <ul class="nav py-4">
      <li class="nav-item w-25"  v-bind:class="{ active: (setCurrentPage === 1)}" @click="calendar" id="calendar">
        <i class="fa fa-calendar fa-lg" aria-hidden="true"></i>
        <a class="nav-link active" id="forColor" href="#!" style="text-decoration:none;">calendar</a>
      </li>
      <li class="nav-item w-25" v-bind:class="{ active: (setCurrentPage === 2)}" @click="inquiries" id="inquiries">
        <i class="fa fa-envelope-open fa-lg" aria-hidden="true"></i>
        <a class="nav-link" id="forColor" href="#!" style="text-decoration:none;">Inquiries</a>
      </li>
      <li class="nav-item w-25" @click="invoices" id="invoices" v-bind:class="{ active: (setCurrentPage === 3)}">
        <i class="fa fa-signal fa-lg"></i>
        <a class="nav-link" id="forColor" href="#!" style="text-decoration:none;">Invoices</a>
      </li>
      <li class="nav-item w-25" @click="profile" id="profile" v-bind:class="{ active: (setCurrentPage === 4)}">
        <i class="fa fa-user fa-lg" aria-hidden="true"></i>
        <a class="nav-link " id="forColor" href="#!" style="text-decoration:none;">Profile</a>
  
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters} from "vuex";
export default {
  name: "Header",
  computed:{
...mapGetters({
  setCurrentPage: "setCurrentPage",
  classes: {
    first : "setCurrentPage" === 1
  }
})
  },
  methods: {
    ...mapActions(["sendId"]),
    calendar: function() {
      this.$router.push("/calendar");
      this.sendId(1)
    },
    inquiries: function() {
      this.$router.push("/inquiries");
      this.sendId(2)
    },
    invoices: function() {
      this.$router.push("/invoices");
      this.sendId(3)
    },
    profile: function() {
      this.$router.push("/profile");
      this.sendId(4)
    }
  },
  beforeMount() {
    if (!this.$store.state.login.userObject.email) {
      this.$router.push("login");
    }
  }
};
</script>

<style>
.nav > li > i {
  color: inherit !important;
}

.header .nav .nav-item {
  color: gray;
}

.header .nav .nav-item:hover {
  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-bottom-color: #00ccb7;
  color: #00ccb7 !important;
  background-color: transparent !important;
}

forColor {
  color: black !important;
}

.nav-item {
  text-align: center;
}

.nav > li > #forColor {
  border-radius: 0px;
  color: inherit;
}
.nav .nav-item.active{
      border-bottom-width: 4px;
    border-bottom-style: solid;
    border-bottom-color: #00ccb7;
    color: #00ccb7 !important;
    background-color: transparent !important;
    }
</style>
