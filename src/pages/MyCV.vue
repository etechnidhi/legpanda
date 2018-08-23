<template>
  <div class="mycv">
    <Header/>
    <MyCvForm/>
  </div>
</template>

<script>
import MyCvForm from "./../components/MyCvForm";
import Header from "./../components/Header.vue";
export default {
  name: "MyCV",
  components: {
    MyCvForm,
    Header
  }
};
</script>

<style>
</style>
