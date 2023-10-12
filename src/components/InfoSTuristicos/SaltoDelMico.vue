<template>
  <div class="contenedor-imagenes">
    <!-- Img 1 -->
    <div class="imagen">
      <img src="https://i.ibb.co/R77C9hC/1.jpg" alt="" />
    </div>

    <!-- Img 2 -->
    <div class="imagen">
      <img src="https://i.ibb.co/bWNfBGX/salto-del-mico-3.jpg" alt="" />
    </div>

    <!-- Img 3 -->
    <div class="imagen">
      <img
        src="https://i.ibb.co/2YZyyn6/salto-del-mico-portada-1280x720.jpg"
        alt=""
      />
    </div>

    <!-- Img 4 -->
    <div class="imagen">
      <img
        src="https://i.ibb.co/qkZ1NcJ/59654668-447424319135365-1355230976015611055-n.jpg"
        alt=""
      />
    </div>

    <!-- Descripción del sitio -->
    <div class="galeria">
      <div class="Hoteles"><h5>Descripción</h5></div>
      <p style="padding: 10px">
        Salto del Mico: un mirador de ensueño en Barichara. A unos kilómetros de
        Barichara se encuentra uno de los miradores naturales más importantes y
        hermosos del país, el Salto del Mico. Este es el lugar idóneo para vivir
        una aventura y experiencia única.Hoy, te invitamos a visitar este
        maravilloso mirador.
      </p>
      <div class="Hoteles"><h5>Proveedores</h5></div>
    </div>

    <div style="margin-top: 20px" class="proveedores">
      <!-- Contenedor de prov1, prov2, prov3 -->
      <div style="margin-top: -20px" class="pro-container">
        <!-- prov1 -->
        <div
          class="pro"
          style="
            padding: 10px;
            padding-bottom: 1px;
            background-color: #ffffff;
            border-radius: 0 10px 10px 0;
            border-left: 5px solid #fd3838;
            box-shadow: 0px 5px 10px 1px #0000002e;
            margin-bottom: 20px;
          "
        >
          <center>
            <div style="float: center">
              <img
                style="object-fit: cover; border-radius: 100%; border-color: #fd3838; border-style: solid;"
                src="https://th.bing.com/th/id/OIG.IkfOuRHhwhRzXmOnFN9y?pid=ImgGn'"
                alt="Proveedor 1"
                width="100"
                height="100"
              />
            </div>
          </center>
          <hr />
          <h6 style="">
            Nombre:
            <p>Hormiga recorridos Santander</p>
          </h6>
          <h6>
            Telefono:
            <p>3222431444</p>
          </h6>
        </div>

        <!-- prov2 -->
        <div
          class="pro"
          style="
            padding: 10px;
            padding-bottom: 1px;
            background-color: #ffffff;
            border-left: 5px solid #fd3838;
            border-radius: 0 10px 10px 0;
            box-shadow: 0px 5px 10px 1px #0000002e;
            margin-bottom: 20px;
          "
        >
          <center>
            <div style="float: center">
              <img
                style="object-fit: cover; border-radius: 100%; border-color: #fd3838; border-style: solid;"
                src="https://th.bing.com/th/id/OIG.CO2sHWK_IEYIwzXsC2hX?pid=ImgGn"
                alt="Proveedor 1"
                width="100"
                height="100"
              />
            </div>
          </center>
          <hr />
          <h6>
            Nombre:
            <p>Los corre caminos</p>
          </h6>
          <h6>
            Telefono:
            <p>3134738712</p>
          </h6>
        </div>

        <!-- prov3 -->
        <div
          class="pro"
          style="
            padding: 10px;
            padding-bottom: 1px;
            background-color: #ffffff;
            border-left: 5px solid #fd3838;
            border-radius: 0 10px 10px 0;
            box-shadow: 0px 5px 10px 1px #0000002e;
          "
        >
          <center>
            <div style="float: center">
              <img
                style="object-fit: cover; border-radius: 100%; border-color: #fd3838; border-style: solid;"
                src="https://th.bing.com/th/id/OIG.Z1Z.XXzP91MG18xmF3dm?pid=ImgGn"
                alt="Proveedor 1"
                width="100"
                height="100"
              />
            </div>
          </center>
          <hr />
          <h6>
            Nombre:
            <p>Agencia de turismo las rosas</p>
          </h6>
          <h6>
            Telefono:
            <p>3134717972</p>
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
hr {
  border: none; /* Quita el borde predeterminado */
  background-color: #fd3838; /* Cambia el color de fondo a azul (puedes usar cualquier color que desees) */
  height: 2px; /* Define el grosor de la línea horizontal */
}

.galeria {
  padding: 16px;
  margin-top: 8px;
}

h5 {
  padding: 5px;
  margin-left: 5px;
  color: #fff;
}

.pro {
  transition: 1s;
}

.pro:hover {
  transition: 1s;
}

.Hoteles {
  background: linear-gradient(to right, #fd3838, transparent);
  align-items: center;
  border-radius: 10px;
  transition: 1s;
}

/* CSS para dispositivos con un ancho mínimo de 800px */
@media (min-width: 800px) {
  .pro-container {
    display: flex; /* Utilizamos flexbox para los elementos hijos */
    gap: 100px;
  }
  .pro {
    flex: 1; /* Los elementos ocuparán el mismo espacio en el contenedor */
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 500px) {
  .Hoteles {
    background-color: #fd3838;
    align-items: left;
    border-radius: 10px;
  }
}

h6 {
  color: #000000;
}

h6 p {
  color: #000000a7;
}

.btn.btn-custom {
  background-color: #fd3838;
  border-radius: 20px;
  color: #fff;
}

hr {
  border: none; /* Quita el borde predeterminado */
  background-color: #fd3838; /* Cambia el color de fondo a azul (puedes usar cualquier color que desees) */
  height: 2px; /* Define el grosor de la línea horizontal */
  margin: 20px 0; /* Añade margen superior e inferior para separar del contenido */
}

body {
  margin: 0;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

/* .galeria{
          font-family:'open sans';
      } */

/* .galeria h1{
          text-align: center;
          margin: 20px 0 15px 0;
          font-weight: 300px;
      } */

/* .linea{
          border-top: 5px solid #dc7633;
          margin-bottom: 40px;
      } */

.contenedor-imagenes {
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: space-around;
  flex-wrap: wrap;
  border-radius: 10px;
}

.contenedor-imagenes .imagen {
  width: 32%;
  position: relative;
  height: 250px;
  margin-bottom: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.283);
  border-radius: 10px;
}

.imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #fd383872;
  width: 100%;
  height: 0%;
  transition: 0.5s ease;
  overflow: hidden;
}

.overlay button {
  color: #fff;
  font-weight: 30;
  font-size: 20px;
  position: absolute;
  top: 92%;
  right: -10px;
  text-align: center;
  transform: translate(-50%, -50%);
}

.round-btn {
  border-radius: 50%; /* Hace que el botón sea redondo */
  width: 30px; /* Define el ancho del botón */
  height: 30px; /* Define la altura del botón */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px; /* Tamaño del icono */
  background-color: #fd383872;
  border-style: none;
}

.overlay h2 {
  color: #fff;
  font-weight: 30;
  font-size: 20px;
  position: absolute;
  top: 60%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
}

.overlay h3 {
  color: #fff;
  font-weight: 30;
  font-size: 20px;
  position: absolute;
  top: 35%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
}

/* .overlay h4 {
        color: #fff;
        font-weight: 30;
        font-size: 20px;
        position: absolute;
        top: 5%;
        left: 50%;
        text-align: center;
        transform: translate(-50%, -50%);
      } */

.imagen:hover .overlay {
  height: 100%;
  cursor: pointer;
}

@media screen and (max-width: 2000px) {
  .contenedor-imagenes {
    width: 90%;
  }

  .contenedor-imagenes .imagen {
    width: calc(25% - 10px); /* Dividir en filas de 4 con espaciado */
  }
}

@media screen and (max-width: 800px) {
  .contenedor-imagenes {
    width: 90%;
  }
  .contenedor-imagenes .imagen {
    width: 48%;
  }

  .contenedor-imagenes .imagen {
    width: calc(33.333% - 10px);
    /* width: calc(50% - 10px); Dividir en filas de 2 con espaciado */
  }
}

@media screen and (max-width: 600px) {
  .contenedor-imagenes {
    width: 100%;
  }
  .contenedor-imagenes .imagen {
    width: 80%;
  }

  .contenedor-imagenes .imagen {
    /* width: calc(33.333% - 10px); Dividir en filas de 3 con espaciado */
    width: calc(50% - 10px); /* Dividir en filas de 2 con espaciado */
  }

  .overlay {
    height: 100%;
    background-color: #dc773300;
  }
}
</style>
