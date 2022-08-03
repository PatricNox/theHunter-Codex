<template>
  <div id="app" class="w-screen h-screen">
    <router-view v-if="appIsReady" class="w-full overflow-auto" />
    <div v-else>
      <LoadingSymbol />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Locale } from "@/i18n";
import { ViewName } from "./router";
import { application } from "@/store/application";

@Component({
  components: {},
})
export default class App extends Vue {
  appIsReady = false;

  created() {
    this.setLocale();
    application.init().then(() => {
      this.appIsReady = true;
    })
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
