<template>
  <div>
    <v-select placeholder="multiple"
              multiple
              :options="options"></v-select>
    <v-select placeholder="multiple, taggable"
              multiple
              taggable
              :options="options"
              no-drop></v-select>
    <v-select placeholder="multiple, taggable, push-tags"
              multiple
              push-tags
              taggable
              :options="[{label: 'Foo', value: 'foo'}]"></v-select>
    <v-select placeholder="unsearchable"
              :options="options"
              :searchable="false"></v-select>
    <v-select placeholder="search github.."
              label="full_name"
              @search="search"
              :options="ajaxRes"></v-select>
  </div>
</template>
<style>
html,
body,
#app {
  height: 100vh;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.v-select {
  width: 25em;
  margin: 1em;
}
</style>
<script>
const debounce = require('lodash/debounce')
const countries = require('../docs/data/advanced.js')

module.exports = {
  name: "DevCanvas",
  data() {
    return {
      placeholder: "placeholder",
      value: null,
      options: countries,
      ajaxRes: []
    }
  },
  methods: {
    search(search, loading) {
      loading(true)
      this.getRepositories(search, loading, this)
    },
    getRepositories: debounce((search, loading, vm) => {
      vm.$http.get(`https://api.github.com/search/repositories?q=${search}`).then(res => {
        vm.ajaxRes = res.data.items
        loading(false)
      })
    }, 250)
  }
}
</script>