<template lang="pug">
  .container
    .row
      .col-12
        .global-cases
          .global-cases-header.p-2
            h3 {{title}}
            h6.pt-2 Ultima atualização: {{globalCasesInfo.dt}}
          .row
            .col-10.col-md-4.offset-1.offset-md-0.my-2
              .card.p-4
                h4.text-warning {{globalCasesInfo.data.confirmed | formatPrice}}
                h6 Confirmados
            .col-10.col-md-4.offset-1.offset-md-0.my-2
              .card.p-4
                h4.text-success {{globalCasesInfo.data.recovered | formatPrice}}
                h6 Recuperados
            .col-10.col-md-4.offset-1.offset-md-0.my-2
              .card.p-4
                h4.text-danger {{globalCasesInfo.data.deaths | formatPrice}}
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
    formatPrice: function(value) {
      const val = (value / 1)
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>