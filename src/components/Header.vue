<template>
  <div class="header">
    <ul class="nav py-4">
      <li class="nav-item w-25" @click="calendar">
        <i class="fa fa-calendar fa-lg" aria-hidden="true"></i>
        <a class="nav-link active" id="forColor" href="#!" style="text-decoration:none;">calendar</a>
      </li>
      <li class="nav-item w-25" @click="inquiries">
        <i class="fa fa-envelope-open fa-lg" aria-hidden="true"></i>
        <a class="nav-link" id="forColor" href="#!" style="text-decoration:none;">Inquiries</a>
      </li>
      <li class="nav-item w-25" @click="invoices">
        <i class="fa fa-signal fa-lg"></i>
        <a class="nav-link" id="forColor" href="#!" style="text-decoration:none;">Invoices</a>
      </li>
      <li class="nav-item w-25" @click="profile">
        <i class="fa fa-user fa-lg" aria-hidden="true"></i>
        <a class="nav-link " id="forColor" href="#!" style="text-decoration:none;">Profile</a>
  
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    calendar: function() {
      this.$router.push("/calendar");
    },
    inquiries: function() {
      this.$router.push("/inquiries");
    },
    invoices: function() {
      this.$router.push("/invoices");
    },
    profile: function() {
      this.$router.push("/profile");
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
</style>
