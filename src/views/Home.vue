<template lang="pug">
  .container
    h3 Casos de Covid-19
    .content-box
      //- Cards com detalhes globaais
      info-global.my-4(title="Mundo")
      //- Cards com os detalhes para cada pais
      info-local.my-4
</template>

<script>
import InfoGlobal from '../components/InfoGlobal'
import InfoLocal from '../components/InfoLocal'

export default {
  name: 'Home',

  components: {
    InfoGlobal,
    InfoLocal
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 12px;

  h3 {
    font-weight: 300;
  }

  .content-box {
    margin-top: 32px;
  }
}
</style>
