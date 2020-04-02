<template lang="pug">
  .container
    v-select(:options="countryList")
</template>

<script>
import { fetchCountryList } from '../api/covidApi'
// Vue select
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

export default {
  name: 'country-picker',

  components: {
    vSelect
  },

  data: () => ({
    countryList: []
  }),

  mounted(){
    fetchCountryList().then(response => {
      this.countryList = response.countries.map(response => { 
        return response.name 
      })
    })
  }
}
</script>

<style>

</style>