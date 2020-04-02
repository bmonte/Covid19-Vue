<template lang="pug">
  .container
    .row
      .col-12
        .local-cases
          .local-cases-header.p-2
            .col-10.col-md-6.offset-1.offset-md-3.my-2
              v-select(v-model="selected" :options="countryList" @input="getDetailsByCountry")
            h6.pt-2 Ultima atualização: {{localCasesInfo.lastUpdate | formatData}}
          .row
            .col-10.col-md-4.offset-1.offset-md-0.my-2
              .card.p-4
                h4.text-warning {{localCasesInfo.confirmed.value | formatPrice}}
                h6 Confirmados
            .col-10.col-md-4.offset-1.offset-md-0.my-2
              .card.p-4
                h4.text-success {{localCasesInfo.recovered.value | formatPrice}}
                h6 Recuperados
            .col-10.col-md-4.offset-1.offset-md-0.my-2
              .card.p-4
                h4.text-danger {{localCasesInfo.deaths.value | formatPrice}}
                h6 Mortes
</template>

<script>
// Vue select
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

import { fetchCountryList } from '../api/covidApi'
import { fetchLocalCases } from '../api/covidApi'

export default {
  name: 'info-local',

  components: {
    vSelect
  },

  data: () => ({
    localCasesInfo: [],
    selected: 'Brazil'
  }),

  mounted() {
    this.getDetailsByCountry(),

    fetchCountryList().then(response => {
      this.countryList = response.countries.map(response => { 
        return response.name 
      })
    })
  },

  methods: {
    getDetailsByCountry: function() {
      fetchLocalCases(this.selected).then( response => {
        this.localCasesInfo = response
      }) 
    }
  },

  filters: {
    formatPrice: (value)  => {
      return (value / 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },

    formatData: (_data) => {
      return new Date(Date.parse(_data)).toLocaleString()
    }
  }
}
</script>

<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";

.local-cases-header, 
.global-cases-header {
  h6 {
    font-weight: 300;
  }
}

.card {
  transition: box-shadow 0.5s;
  
  &:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.1);
  }
}

.v-select {
  font: 400 16px Roboto, sans-serif;
  background: white;

  .vs__dropdown-menu,
  .vs__search::placeholder,
  .vs__dropdown-toggle {
    max-height: 270px;
    border: none;
  }
}
</style>