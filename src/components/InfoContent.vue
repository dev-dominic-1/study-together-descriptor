<template>
  <div class="wrapper pa-4 pt-8">
    <div class="heading-2 font-weight-500">Welcome to Study Together!</div>
    <div class="pt-6">
      Study Together is an application build to elucidate the nuances and 
      fundamental distinctions among the three major JavaScript frameworks: 
      React, Angular, and Vue, along with their respective material design libraries.
    </div>
    <div class="pt-4">
      <span class="font-weight-600">This application is an ongoing project</span>, 
      continuously evolving with daily revisions to its components in each iteration. 
      It will be consistently updated utilizing 
      <span class="font-weight-600">Continuous Integration via Netlify</span> to ensure 
      seamless enhancements and improvements.
    </div>
    <div class="pt-4">
      <a href="https://www.google.com" target="_blank">GOOGLE</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoContent',
}
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 1000px;
  margin: auto;
  background-color: #fcfdf6;
}
</style>