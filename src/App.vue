<template>
  <div id="app" class="w-screen h-screen">
    <router-view v-if="appIsReady" class="w-full overflow-auto" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { authModule } from "@/store/auth";
import { Locale } from "@/i18n";
import { ViewName } from "./router";

@Component({
  components: {},
})
export default class App extends Vue {
  appIsReady = true;

  created() {
    this.setLocale();
  }

  setLocale() {
    // Set locale depending on localstorage item.
    const locale = localStorage.getItem("localization") ?? Locale.SWEDISH;
    if (locale) {
      this.$root.$i18n.locale = locale;
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
