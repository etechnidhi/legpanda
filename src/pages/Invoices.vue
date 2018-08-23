<template>
    <div class="invoice">
        <Header/>
        <div class="shadow p-3 mb-5 bg-white rounded w-50 ">
            <div class="container my-5">
                <div class="invpoiceContainer">
                    <h2 class="font-weight-bold text-left">Soon</h2>
                    <p class="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proi deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions} from "vuex";
import Header from "./../components/Header.vue";
export default {
  name: "Invoices",
  components: {
    Header
  },
  methods:{
       ...mapActions(["sendId"])
  },
  beforeMount() {
    if (!this.$store.state.login.userObject.email) {
      this.$router.push("login");
    }
    this.sendId(3)
  }
};
</script>

<style>
.invpoiceContainer {
  width: 80%;
  margin: 0 auto;
  color: black !important;
}
</style>
