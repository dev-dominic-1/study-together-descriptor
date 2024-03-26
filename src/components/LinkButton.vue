<template>
	<v-btn
		:color="config.color"
		block
		:class="[`${config.textColor}--text`]"
		class="link-button"
    :disabled="config.disabled"
    @click="goTo"
	>
		<div class="link-button-content">
			<div>
				<v-img :src="icon" max-height="38" max-width="38" />
			</div>
			<div>{{ config.text }}</div>
			<div></div>
		</div>
	</v-btn>
</template>

<script>
import LinkButtonModel from '@/models/LinkButton'
export default {
	name: 'LinkButton',
	props: {
		config: {
      type: LinkButtonModel,
      required: true,
    },
	},
	data () {
		return {
			icon: undefined,
		}
	},
	mounted () {
		if (!this.config.iconName) return
		import(`@/assets/${this.config.iconName}`).then(data => {
			let img = new Image()
			img.onload = () => this.icon = img.src
			img.src = data.default
		})
	},
  methods: {
    goTo () {
      let {link} = this.config
      if (!link.startsWith('https://')) link = 'https://' + link
      const el = document.createElement('a')
      el.href = link
      el.target = '_blank'
      el.click()
    }
  }
}
</script>

<style lang="scss" scoped>
.link-button {
	height: 44px !important;
	font-size: 24px;
}
.link-button-content {
	display: grid;
	grid-template-columns: 38px calc(100% - 38px * 2) 38px;
	width: 100%;
	align-items: center;
}
</style>