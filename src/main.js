import Vue from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import "ant-design-vue/dist/antd.css";
import "./utils/reset.less";

Vue.use(Antd);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
