<template>
  <v-card
    class="px-0 pb-4 rounded-xl transparent elevation-0"
  >
    <v-card-title class="heading-2 px-0 pb-0 mb-4 pt-4">
      <slot name="title">
        {{ title }}
      </slot>
    </v-card-title>
    <slot />
  </v-card>
</template>
<script>
export default {
  name: 'ContentSection',
  props: {
    title: String,
  }
}
</script>