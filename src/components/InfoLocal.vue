<template lang="pug">
  .container
    .row
      .col-12
        .local-cases
          .local-cases-header.p-2
            h3 Brasil
            h6.pt-2 Ultima atualização: {{localCasesInfo.dt}}
          .row
            .col-10.col-md-4.offset-1.offset-md-0.my-2
              .card.p-4
                h4.text-warning {{localCasesInfo.data.confirmed | formatPrice}}
                h6 Confirmados
            .col-10.col-md-4.offset-1.offset-md-0.my-2
              .card.p-4
                h4.text-success {{localCasesInfo.data.recovered | formatPrice}}
                h6 Recuperados
            .col-10.col-md-4.offset-1.offset-md-0.my-2
              .card.p-4
                h4.text-danger {{localCasesInfo.data.deaths | formatPrice}}
                h6 Mortes
</template>

<script>
import { fetchLocalCases } from '../api/covidApi'

export default {
  name: 'info-local',

  data: () => ({
    localCasesInfo: []
  }),

  mounted() {
    fetchLocalCases('Brazil').then( response => {
      this.localCasesInfo = response
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
.local-cases-header {
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