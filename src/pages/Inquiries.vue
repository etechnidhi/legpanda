<template>
    <div class="inquries">
        <Header/>
        <div class="shadow p-3 mb-5 bg-white rounded w-50 ">
            <div class="container my-5">
                <div class="myContainer">
                    <h2 class="font-weight-bold text-left">Soon</h2>
                    <p class="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./../components/Header.vue";
export default {
  name: "Inquiries",
  components: {
    Header
  }
};
</script>

<style>
h1 {
  float: left;
}

.myContainer {
  width: 80% !important;
  margin: 0 auto !important;
  color: black !important;
}
</style>
