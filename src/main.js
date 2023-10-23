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

// Galeria de habitaciones de BellaVista
import BellaVista from "../src/components//Hoteles/BellaVista.vue";

// Info habitaciones BellaVista
import BellaVistaH1 from "../src/components/Habitaciones/BellaVistaH1.vue";

// Info Info sitios turisticos
import SaltoDelMico from "../src/components/InfoSTuristicos/SaltoDelMico.vue";





// Zona de administrador
import RegitroHotel from "../src/components/Formularios/RegitroHotel.vue";
import RegistroHabitaciones from "../src/components/Formularios/RegistroHabitaciones.vue";

import VistaReservas from "../src/components/Formularios/VistaReservas.vue";
import RegistroSitio from "../src/components/Formularios/RegistroSitio.vue";
import RegistroProveedores from "../src/components/Formularios/RegistroProveedores.vue";

// Paneles Roles
import PanelAdmin from "../src/components/Admin/PanelAdmin.vue";
import PanelDueno from "../src/components/Admin/PanelDueno.vue";


import PanelHoteles from "../src/components/Admin/AdminHoteles/PanelHoteles.vue";
import PanelProveedores from "../src/components/Admin/AdminProveedores/PanelProveedores.vue";
import PanelSitios from "../src/components/Admin/AdminSitios/PanelSitios.vue";
import PanelHabitaciones from "../src/components/Admin/AdminHabitaciones/PanelHabitaciones.vue";
import PanelUsuarios from "../src/components/Admin/AdminUsuarios/PanelUsuarios.vue";





//definir rutas
const routes = [
  {
    path: "/", component: Home },
  { path: "/BellaVista", component: BellaVista },

  { path: "/BellaVistaH1", component: BellaVistaH1 },

  { path: "/SaltoDelMico", component: SaltoDelMico },

  { path: "/Login", component: Login },

  { path: "/Registro", component: Registro },


  { path: "/RegitroHotel", component: RegitroHotel },

  { path: "/RegistroHabitaciones", component: RegistroHabitaciones },



  { path: "/VistaReservas", component: VistaReservas },

  { path: "/RegistroSitio", component: RegistroSitio },

  { path: "/RegistroProveedores", component: RegistroProveedores },


// Paneles Roles
  { path: "/PanelAdmin", component: PanelAdmin},

  { path: "/PanelDueno", component: PanelDueno},



  { path: "/PanelHoteles", component: PanelHoteles},

  { path: "/PanelProveedores", component: PanelProveedores},

  { path: "/PanelSitios", component: PanelSitios},

  { path: "/PanelHabitaciones", component: PanelHabitaciones},

  { path: "/PanelUsuarios", component: PanelUsuarios},
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
