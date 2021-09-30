import Vote from './components/Vote.vue'

const components = [Vote]

export default {
  install: function(app, options) {
    app.component("vue-vote", Vote);
	components.forEach(item => {
		app.component(item.name, item)
	})
  }
}
