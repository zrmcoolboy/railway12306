import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPlugin from "pinia-plugin-persist";
import App from "./App.vue";
import router from "@/router";
import "@/assets/css/reset.css";
import "element-plus/theme-chalk/el-message.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
const pinia = createPinia();
pinia.use(piniaPlugin);
const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router).use(pinia).mount("#app");
