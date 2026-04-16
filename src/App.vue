<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Баллансиор</a>
      <small class="super-small"><VersionDisplay /></small>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/"
            >общий балланс через модули</router-link
          >
          <!-- <router-link class="nav-link" to="/about">About</router-link> -->
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import VersionDisplay from "@/components/VersionDisplay.vue";

@Options({
  components: {
    VersionDisplay,
  },
})
export default class App extends Vue {}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.super-small {
  font-size: 0.5em;
}
</style>
