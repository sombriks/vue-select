const VueSelect = require('./components/Select.vue')
const mixins = require('./mixins/index')

const install = (Vue, opts) => {
  Vue.component('v-select', VueSelect)
}

module.exports = {
  install
}

global.vSelect = {
  VueSelect,
  mixins
}