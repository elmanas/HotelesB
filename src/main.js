import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
// import './style.css'

//componentes
import App from "./App.vue";
import Home from "../src/components/Home.vue";
import GaleriaHotel1 from "../src/components/GaleriaHotel1.vue";
import Hotel1 from "../src/components/InfoHabitaciones/Hotel1.vue";
import SaltoDelMico from "../src/components/InfoSTuristicos/SaltoDelMico.vue";

//definir rutas
const routes = [
  {
    path: "/",
    component: Home,
  },
  { path: "/GaleriaHotel1", component: GaleriaHotel1 },

  { path: "/Hotel1", component: Hotel1 },

  { path: "/SaltoDelMico", component: SaltoDelMico },
];

//objeto rutas - vue router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//instancia de vue
const app = createApp(App);

app.use(router);

app.mount("#app");
