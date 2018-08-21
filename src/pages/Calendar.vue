<template>
    <div id="clendar">
        <Header/>
        <CalendarForm/>
    </div>
</template>

<script>
import Header from "./../components/Header.vue";
import CalendarForm from "./../components/CalendarForm.vue";
export default {
  name: "Calendar",
  components: {
    Header,
    CalendarForm
  }
};
</script>

<style>
</style>
