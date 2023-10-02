import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
// import './style.css'




//componentes




// Navbar y footer (Elementos que se muestran siempre)
import App from "./App.vue";

// Login y registro
import Login from "../src/components/Login.vue";
import Registro from "../src/components/Registro.vue";

// Pagina principal o home
import Home from "../src/components/Home.vue";

// Galeria de habitaciones del primer hotel
import GaleriaHotel1 from "../src/components/GaleriaHotel1.vue";

// Info habitaciones hotel1
import Hotel1 from "../src/components/InfoHabitaciones/Hotel1.vue";

// Info Info sitios turisticos
import SaltoDelMico from "../src/components/InfoSTuristicos/SaltoDelMico.vue";




//definir rutas
const routes = [
  {
    path: "/", component: Home },
  { path: "/GaleriaHotel1", component: GaleriaHotel1 },

  { path: "/Hotel1", component: Hotel1 },

  { path: "/SaltoDelMico", component: SaltoDelMico },

  { path: "/Login", component: Login },

  { path: "/Registro", component: Registro },
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
