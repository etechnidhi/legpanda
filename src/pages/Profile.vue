<template>
    <div class="profile">
        <Header/>
        <ProfileForm/>
    </div>
</template>

<script>
import Header from "./../components/Header.vue";
import ProfileForm from "./../components/ProfileForm.vue";
export default {
  name: "Profile",
  components: {
    Header,
    ProfileForm
  }
};
</script>

<style>
</style>
