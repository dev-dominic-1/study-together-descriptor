<template>
  <div class="wrapper pa-4">
    <content-section>
      <template #title>
        Welcome to Study Together!
      </template>
      <div>
        Study Together is an application built to uncover the nuances and
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
        Study Together currently features two published versions implemented in two leading modern JavaScript frameworks,
        Angular and Vue. A third version, utilizing React, is in active development and will soon be released as well.
      </div>
    </content-section>
    <content-section class="pt-4">
      <template #title>
        Current Published Versions
      </template>
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
    </content-section>
    <content-section class="pt-4">
      <template #title>
        State of Current Published Versions
      </template>
      <v-tabs
        v-model="tab"
        fixed-tabs
        :color="tabs[tab].color"
        background-color="background"
      >
        <v-tab
          v-for="tab of tabs"
          :key="tab.key"
          :disabled="tab.disabled"
        >
          {{ tab.text }}
        </v-tab>
      </v-tabs>
      <v-divider />
      <v-tabs-items v-model="tab" class="background">
        <v-tab-item :key="tabs[0].key">
          <angular-tab-content />
        </v-tab-item>
        <v-tab-item :key="tabs[1].key">
          <react-tab-content />
        </v-tab-item>
        <v-tab-item :key="tabs[2].key">
          <vue-tab-content />
        </v-tab-item>
      </v-tabs-items>
    </content-section>
    <content-section class="pt-4">
      <template #title>
        State of the Back End
      </template>
      The backend infrastructure of this application is built using a
      <span class="font-weight-bold">.NET Core Web API</span>, complemented by
      <span class="font-weight-bold">Microsoft SQL Server</span> as the chosen database solution using
      <span class="font-weight-bold">Code-First Migrations</span>. Rigorous testing has been conducted on the backend
      code within a locally hosted environment. Upon finalizing a web-hosting service, the backend will seamlessly
      transition to a live environment, making registration and content customization possible withing the Study
      Together application!
      <div class="pt-3 px-3">
        <link-button :config="backendRepositoryLinkButton" />
      </div>
    </content-section>
  </div>
</template>

<script>
import LinkButton from './LinkButton.vue'
import LinkButtonModel from '@/models/LinkButton.js'
import { COMMON_COLORS } from "@/data/commonColors"
import ContentSection from "@/components/ContentSection.vue";
import AngularTabContent from "@/components/tabItemContent/AngularTabContent.vue";
import VueTabContent from "@/components/tabItemContent/VueTabContent.vue";
import ReactTabContent from "@/components/tabItemContent/ReactTabContent.vue";
export default {
  name: 'InfoContent',
  components: {ReactTabContent, VueTabContent, AngularTabContent, ContentSection, LinkButton},
  data () {
    return {
      tab: 0,
      tabs: [
        {key: 'ANGULAR', color: COMMON_COLORS.ANGULAR, text: 'Angular'},
        {key: 'REACT', color: COMMON_COLORS.REACT, text: 'React'},
        {key: 'VUE', color: COMMON_COLORS.VUE, text: 'Vue'},
      ]
    }
  },
  computed: {
    linkButtons () {
      return [
        [
          new LinkButtonModel({text: 'Angular', color: COMMON_COLORS.ANGULAR, iconName: 'angular-custom.png', link: 'master--study-together-angular.netlify.app/'}),
          new LinkButtonModel({text: 'Repository', color: COMMON_COLORS.GITHUB, iconName: 'github-custom.png', link: 'github.com/dev-dominic-1/study-together-angular'})
        ],
        [
          new LinkButtonModel({text: 'React', color: COMMON_COLORS.REACT, iconName: 'react-custom.png', link: 'study-together-react.netlify.app/'}),
          new LinkButtonModel({text: 'Repository', color: COMMON_COLORS.GITHUB, iconName: 'github-custom.png', link: 'github.com/dev-dominic-1/study-together-react'})
        ],
        [
          new LinkButtonModel({text: 'Vue', color: COMMON_COLORS.VUE, iconName: 'vuejs-custom.png', link: 'study-together-vue.netlify.app/'}),
          new LinkButtonModel({text: 'Repository', color: COMMON_COLORS.GITHUB, iconName: 'github-custom.png', link: 'github.com/dev-dominic-1/study-together-vue'})
        ],
      ]
    },
    backendRepositoryLinkButton () {
      return new LinkButtonModel({text: '.NET Repository', color: COMMON_COLORS.GITHUB, iconName: 'github-custom.png', link: 'github.com/dev-dominic-1/study_together_api'})
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