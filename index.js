import Vote from './components/Vote.vue'

const components = [Vote]

export default {
  install: function(app, options) {
	components.forEach(item => {
		app.component(item.name, item)
	})
  }
}
