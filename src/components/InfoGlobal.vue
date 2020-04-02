<template lang="pug">
  .container
    .row
      .col-12
        .global-cases
          .global-cases-header.p-2
            h3 {{title}}
            h6.pt-2 Ultima atualização: {{globalCasesInfo.lastUpdate | formatData}}
          .row
            .col-10.col-md-4.offset-1.offset-md-0.my-2
              .card.p-4
                h4.text-warning {{globalCasesInfo.confirmed.value | formatPrice}}
                h6 Confirmados
            .col-10.col-md-4.offset-1.offset-md-0.my-2
              .card.p-4
                h4.text-success {{globalCasesInfo.recovered.value | formatPrice}}
                h6 Recuperados
            .col-10.col-md-4.offset-1.offset-md-0.my-2
              .card.p-4
                h4.text-danger {{globalCasesInfo.deaths.value | formatPrice}}
                h6 Mortes
</template>

<script>
import { fetchGlobalCases } from '../api/covidApi'

export default {
  name: 'info-global',

  props: {
    title: String
  },

  data: () => ({
    globalCasesInfo: []
  }),

  mounted() {
    fetchGlobalCases().then( response => {
      this.globalCasesInfo = response
    })
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