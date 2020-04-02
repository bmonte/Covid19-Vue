<template lang="pug">
  #app
    //- Flag do github
    github-corner
    //- Roteamento do Vue
    router-view
</template>

<script>
import GithubCorner from './components/GithubCorner' 

export default {
  components: {
    GithubCorner
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

#app {
  // Altura e background
  min-height: 100vh;
  background-color: #ceebf5;
  // Font
  font: 400 1.5em Roboto, sans-serif;
  text-align: center;
  color: rgb(33, 43, 54);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
