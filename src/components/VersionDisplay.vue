<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="col text-black-50">
    {{ getVersion() }}
    {{ getBuidDateTime() }}
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class VersionDisplay extends Vue {
  version: string | undefined = "";
  buidDateTime: string | undefined = "";

  getVersion() {
    return process.env.VUE_APP_GIT_HASH;
  }
  getBuidDateTime() {
    return process.env.VUE_APP_BUILD_DATETIME;
  }
}
</script>

<style lang="less"></style>
