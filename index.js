import Vote from './components/Vote'

const components = [Vote]

module.exports = {
  install: function(Vue, options) {
    components.forEach(item => {
      console.log(item.name)
      app.component(item.name, item)
    })
  }
}
