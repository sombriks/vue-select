const main = require("./index")

const Vue = require('vue')
const vSelect = require('./components/Select.vue')
const resource = require('vue-resource')

Vue.use(resource)
Vue.component('v-select', vSelect)

new Vue({
  el: '#app',
  render: (createElement) => createElement(require('./dev.vue'))
})