<template>
  <v-app>
    <v-main>
      <info-content />
    </v-main>
  </v-app>
</template>

<script>
import InfoContent from "@/components/InfoContent.vue";

export default {
  name: 'App',
  components: {InfoContent}
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
//noinspection ALL
#app {
  @for $i from 1 through 9 {
    $calc: #{$i * 100};
    & .font-weight-#{$calc} {
      font-weight: $calc;
    }
  }
  & *[type=button] {
    text-transform: capitalize;
  }
  font-family: 'Montserrat', serif;
  font-size: 16px;
  & .body-2 {
    font-family: 'Hind', serif;
  }
  & .body-3 {
    font-family: 'Hind', serif;
    font-size: 14px;
  }
  & .body-4 {
    font-weight: bold;
    font-family: 'Hind', serif;
    font-size: 14px;
  }
  & *[role=button] {
    font-weight: 600;
  }
  & .heading-1 {
    font-size: 32px;
  }
  & .heading-2 {
    font-size: 24px;
  }
  & .heading-3 {
    font-size: 24px;
    font-weight: 600;
  }
}
</style>