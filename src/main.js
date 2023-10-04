import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
// import './style.css'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'




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




// Zona de administrador
import RegitroHotel from "../src/components/Admin/RegitroHotel.vue";
import RegistroHabitaciones from "../src/components/Admin/RegistroHabitaciones.vue";
import EstadoHabitaciones from "../src/components/Admin/EstadoHabitaciones.vue";
import VistaReservas from "../src/components/Admin/VistaReservas.vue";




//definir rutas
const routes = [
  {
    path: "/", component: Home },
  { path: "/GaleriaHotel1", component: GaleriaHotel1 },

  { path: "/Hotel1", component: Hotel1 },

  { path: "/SaltoDelMico", component: SaltoDelMico },

  { path: "/Login", component: Login },

  { path: "/Registro", component: Registro },


  { path: "/RegitroHotel", component: RegitroHotel },

  { path: "/RegistroHabitaciones", component: RegistroHabitaciones },

  { path: "/EstadoHabitaciones", component: EstadoHabitaciones },

  { path: "/VistaReservas", component: VistaReservas },
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
