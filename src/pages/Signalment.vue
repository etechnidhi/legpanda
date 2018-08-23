<template>
  <div class="Signalment">
    <Header/>
    <SignalmentForm/>
  </div>
</template>

<script>
import Header from "./../components/Header.vue";
import SignalmentForm from "./../components/SignalmentForm.vue";
export default {
  name: "Signalment",
  components: {
    SignalmentForm,
    Header
  }
};
</script>

<style>
</style>
