const VueSelect =  require('./components/Select.vue')
const mixins = require('./mixins/index')

module.exports = { VueSelect, mixins }

global.VueSelect = VueSelect
global.VueSelectMixins = mixins
