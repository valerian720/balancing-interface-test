<template>
  <div class="home">
    <Ballancing msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Ballancing from "@/components/Ballancing.vue"; // @ is an alias to /src

@Options({
  components: {
    Ballancing,
  },
})
export default class HomeView extends Vue {}
</script>
