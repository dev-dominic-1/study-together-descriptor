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
      <v-row no-gutters>
        <v-col 
          v-for="(stack, stackIndex) of linkButtons" 
          :key="`link-stack-${stackIndex}`" 
          cols="4"
          class="link-stack px-2"
        >
          <div
            v-for="(button, buttonIndex) of stack"
            :key="`link-stack-${stackIndex}-element-${buttonIndex}`"
          >
            <link-button :config="button" />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import LinkButton from './LinkButton.vue'
import LinkButtonModel from '@/models/LinkButton.js'
import { COMMON_COLORS } from "@/data/commonColors"
export default {
  name: 'InfoContent',
  components: {LinkButton},
  computed: {
    linkButtons () {
      return [
        [
          new LinkButtonModel({text: 'Angular', color: COMMON_COLORS.ANGULAR, iconName: 'angular-custom.png'}),
          new LinkButtonModel({text: 'Repository', color: COMMON_COLORS.GITHUB, iconName: 'github-custom.png'})
        ],
        [
          new LinkButtonModel({text: 'Vue', color: COMMON_COLORS.VUE, iconName: 'vuejs-custom.png'}),
          new LinkButtonModel({text: 'Repository', color: COMMON_COLORS.GITHUB, iconName: 'github-custom.png'})
        ],
        [
          new LinkButtonModel({text: 'React', color: COMMON_COLORS.REACT, iconName: 'react-custom.png', disabled: true}),
          new LinkButtonModel({text: 'Repository', color: COMMON_COLORS.GITHUB, iconName: 'github-custom.png', disabled: true})
        ]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 1000px;
  margin: auto;
  background-color: #fcfdf6;
}
.link-stack {
  &>*:not(:first-child) {
    margin-top: 8px;
  }
}
</style>