<template>
  <div id="app">
    <router-view v-if="appIsReady" class="overflow-x-hidden" />
    <div v-else class="w-screen text-center mt-12">
      <LoadingSymbol class=" w-3/4 h-32 text-accent-orange" size="2xl" />
      <p class="mt-4">Loading application data..</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Locale } from "@/i18n";
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
    });
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
  font-family: "Copperplate", Helvetica, Arial;
  text-shadow: 1px 1px black;
}

@font-face {
  font-family: "Copperplate";
  src: local("Copperplate"),
    url(./assets/fonts/copperplate.ttf) format("truetype");
}
</style>
