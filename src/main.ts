import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/index.css";
import "@/assets/styles/fonts.css";
import "@/assets/styles/transitions.css";
import i18n from "./i18n";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import LoadingSymbol from "@/components/common/LoadingSymbol.vue";

library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("LoadingSymbol", LoadingSymbol);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount("#app");
