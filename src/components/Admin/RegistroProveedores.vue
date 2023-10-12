<template>
  <div class="contenedor-imagenes">
    <!-- Img 1 -->
    <div class="imagen">
      <img :src="imageUrlA || ''" alt="Img1" />
    </div>
    <!-- Img 2 -->
    <div class="imagen">
      <img :src="imageUrlB || ''" alt="Img2" />
    </div>

    <!-- Img 3 -->
    <div class="imagen">
      <img :src="imageUrlC || ''" alt="Img3" />
    </div>

    <!-- Img 4 -->
    <div class="imagen">
      <img :src="imageUrlD || ''" alt="Img4" />
    </div>

    <!-- menu subida de imagenes del sitio -->









    

    <div class="galeria col-12">
      <div class="Hoteles"><h5>Descripción</h5></div>
      <textarea
        style="margin-top: 20px; margin-bottom: 20px"
        class="form-control"
        id="descripcionSitio"
        placeholder="Escriba aquí una descripción detallada del sitio..."
        name="descripcionSitio"
        rows="4"
        required=""
      ></textarea>
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
            border-left: 5px solid #fd3838;
            border-radius: 0 10px 10px 0;
            box-shadow: 0px 5px 10px 1px #0000002e;
            margin-bottom: 20px;
          "
        >
          <center>
            <div style="float: center">
              <img
                style="object-fit: cover; border-radius: 5px; border-radius: 100%; border-color: #fd3838; border-style: solid;"
                :src="
                  imageUrl ||
                  'https://th.bing.com/th/id/OIG.IkfOuRHhwhRzXmOnFN9y?pid=ImgGn'
                "
                alt="Proveedor 1"
                width="100"
                height="100"
              />
            </div>
          </center>
          <hr />
          <div class="mb-3">
            <label class="form-label" for="nombreProveedor1"
              ><strong>Nombre:</strong></label
            >
            <input
              class="form-control"
              type="text"
              id="nombreProveedor1"
              name="nombreProveedor1"
              value=""
              placeholder="Proveedor 1"
            />
          </div>
          <div class="mb-3">
            <label class="form-label" for="telefonoProveedor1"
              ><strong>Teléfono:</strong></label
            >
            <input
              class="form-control"
              type="number"
              id="telefonoProveedor1"
              name="telefonoProveedor1"
              value=""
              placeholder="Ej: 3222431440"
            />
          </div>

          <div class="mb-3">
            <strong>Logo *</strong>
            <div class="logo">
              <p class="logop">
                <i
                  style="color: #fd3838; font-size: 30px"
                  class="bi bi-file-earmark-arrow-up-fill"
                ></i>
              </p>
              <br />
              <input
                class="foto"
                style="margin-top: 13px"
                :required="imagesSelected !== 1"
                type="file"
                accept="image/*"
                @change="handleFileUpload"
              />
            </div>
          </div>
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
                :src="
                  imageUrl2 ||
                  'https://th.bing.com/th/id/OIG.CO2sHWK_IEYIwzXsC2hX?pid=ImgGn'
                "
                alt="Proveedor 2"
                width="100"
                height="100"
              />
            </div>
          </center>
          <hr />
          <div class="mb-3">
            <label class="form-label" for="nombreProveedor2"
              ><strong>Nombre:</strong></label
            >
            <input
              class="form-control"
              type="text"
              id="nombreProveedor2"
              name="nombreProveedor2"
              value=""
              placeholder="Proveedor 2"
            />
          </div>
          <div class="mb-3">
            <label class="form-label" for="telefonoProveedor2"
              ><strong>Teléfono:</strong></label
            >
            <input
              class="form-control"
              type="number"
              id="telefonoProveedor2"
              name="telefonoProveedor2"
              value=""
              placeholder="Ej: 3222431440"
            />
          </div>

          <div class="mb-3">
            <strong>Logo *</strong>
            <div class="logo">
              <p class="logop">
                <i
                  style="color: #fd3838; font-size: 30px"
                  class="bi bi-file-earmark-arrow-up-fill"
                ></i>
              </p>
              <br />
              <input
                class="foto"
                style="margin-top: 13px"
                :required="imagesSelected2 !== 1"
                type="file"
                accept="image/*"
                @change="handleFileUpload2"
              />
            </div>
          </div>
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
            margin-bottom: 20px;
          "
        >
          <center>
            <div style="float: center">
              <img
                style="object-fit: cover; border-radius: 5px; border-radius: 100%; border-color: #fd3838; border-style: solid;"
                :src="
                  imageUrl3 ||
                  'https://th.bing.com/th/id/OIG.Z1Z.XXzP91MG18xmF3dm?pid=ImgGn'
                "
                alt="Proveedor 3"
                width="100"
                height="100"
              />
            </div>
          </center>
          <hr />
          <div class="mb-3">
            <label class="form-label" for="nombreProveedor3"
              ><strong>Nombre:</strong></label
            >
            <input
              class="form-control"
              type="text"
              id="nombreProveedor3"
              name="nombreProveedor3"
              value=""
              placeholder="Proveedor 3"
            />
          </div>
          <div class="mb-3">
            <label class="form-label" for="telefonoProveedor3"
              ><strong>Teléfono:</strong></label
            >
            <input
              class="form-control"
              type="number"
              id="telefonoProveedor3"
              name="telefonoProveedor3"
              value=""
              placeholder="Ej: 3222431440"
            />
          </div>

          <div class="mb-3">
            <strong>Logo *</strong>
            <div class="logo">
              <p class="logop">
                <i
                  style="color: #fd3838; font-size: 30px"
                  class="bi bi-file-earmark-arrow-up-fill"
                ></i>
              </p>
              <br />
              <input
                class="foto"
                style="margin-top: 13px"
                :required="imagesSelected3 !== 1"
                type="file"
                accept="image/*"
                @change="handleFileUpload3"
              />
            </div>
          </div>

          <!-- Fin de proveedores -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "", // Para almacenar la URL de la imagen cargada
      imagesSelected: 0, // Para validar que se haya seleccionado una imagen

      imageUrl2: "",
      imagesSelected2: 0,

      imageUrl3: "",
      imagesSelected3: 0,

      // Para imagenes de sitio
      imageUrlA: "",
      imagesSelectedA: 0,

      imageUrlB: "",
      imagesSelectedB: 0,

      imageUrlC: "",
      imagesSelectedC: 0,

      imageUrlD: "",
      imagesSelectedD: 0,
    };
  },
  methods: {
    handleFileUpload(e) {
      const file = e.target.files[0];
      if (file) {
        this.imagesSelected = 1; // Actualiza la validación
        // Puedes usar FileReader para mostrar la imagen en el elemento <img>
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    handleFileUpload2(e) {
      const file = e.target.files[0];
      if (file) {
        this.imagesSelected2 = 1; // Actualiza la validación
        // Puedes usar FileReader para mostrar la imagen en el elemento <img>
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl2 = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    handleFileUpload3(e) {
      const file = e.target.files[0];
      if (file) {
        this.imagesSelected3 = 1; // Actualiza la validación
        // Puedes usar FileReader para mostrar la imagen en el elemento <img>
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl3 = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    // Para imagenes de sitio

    handleFileUploadA(e) {
      const file = e.target.files[0];
      if (file) {
        this.imagesSelectedA = 1; // Actualiza la validación
        // Puedes usar FileReader para mostrar la imagen en el elemento <img>
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrlA = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    handleFileUploadB(e) {
      const file = e.target.files[0];
      if (file) {
        this.imagesSelectedB = 1; // Actualiza la validación
        // Puedes usar FileReader para mostrar la imagen en el elemento <img>
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrlB = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    handleFileUploadC(e) {
      const file = e.target.files[0];
      if (file) {
        this.imagesSelectedC = 1; // Actualiza la validación
        // Puedes usar FileReader para mostrar la imagen en el elemento <img>
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrlC = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    handleFileUploadD(e) {
      const file = e.target.files[0];
      if (file) {
        this.imagesSelectedD = 1; // Actualiza la validación
        // Puedes usar FileReader para mostrar la imagen en el elemento <img>
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrlD = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },


  },
};
</script>

<style scoped>
.logo {
  position: relative;
  max-width: 30px;
  max-height: 40px;
  margin-top: 5px;
  transition: 1s;
}

.logo:hover {
  position: relative;
  max-width: 30px;
  max-height: 40px;
  margin-top: 5px;
  transform: scale(1.5); /* Cambia el tamaño al pasar el mouse */
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.235); /* Agrega la sombra de fondo */
}

.logop {
  color: #fff;
  text-align: center;
}

.foto {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

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

  .pro{
    min-width: 350px;
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
