<template>

  <game></game>
  
</template>

<script>
import Game from "views/Game"
export default {
  components:{
Game
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration-line: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
