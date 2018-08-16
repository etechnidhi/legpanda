<template>
   <div id="Header">
        <b-tabs>
  <b-tab title="first" active>
    <br>I'm the first fading tab
   <icon name="sync" spin></icon>
  </b-tab>
  <b-tab title="second" >
    <br>I'm the second tab content
  </b-tab>
  <b-tab title="disabled" >
    <br>Disabled tab!
  </b-tab>
</b-tabs>
   </div>

</template>

<script>
export default {
name: "Header",
}
</script>

<style>

</style>
