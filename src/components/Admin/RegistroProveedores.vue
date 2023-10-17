<template>
  <main>
    <div class="galeria">
      <div class="Hoteles"><h5>Registra un sitio</h5></div>
      <!-- Start: Ludens - Create-Edit Form -->
      <div class="container" style="margin-top: 20px; margin-bottom: 20px">
        <form enctype="multipart/form-data" method="post">
          <div class="card shadow mb-3">
            <div class="card-header py-3">
              <p class="text-primary m-0 fw-bold">
                <span style="color: rgb(253, 56, 56)"
                  >Rellene los campos obligatorios *</span
                >
              </p>
            </div>

            <div class="card-body">
              <div class="row">
                <div class="col-15">
                  <div class="mb-3">
                    <strong>Imagenes del sitio *</strong>
                    <p>
                      {{ imagesSelected }} imágenes seleccionadas (Máximo 4)
                    </p>
                    <div style="margin-top: -15px" class="logo">
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
                        :required="imagesSelected !== 4"
                        type="file"
                        ref="fileInput"
                        accept="image/*"
                        multiple
                        @change="handleFileUpload"
                      />
                    </div>

                    <!-- Contenedor de las imágenes con margen -->
                    <div
                      style="margin-top: 20px"
                      class="d-flex flex-wrap gap-1"
                    >
                      <div
                        v-for="(image, index) in uploadedImages"
                        :key="index"
                        class="image-preview"
                      >
                        <img
                          class="fixed-size-image"
                          :src="image.src"
                          :alt="image.alt"
                        />
                      </div>
                    </div>

                    <button
                      style="
                        background-color: #fd3838;
                        color: #fff;
                        margin-top: 20px;
                      "
                      class="btn btn-custom btn"
                      @click="clearImages"
                      v-if="uploadedImages.length > 0"
                    >
                      <i class="bi bi-trash3-fill"></i> Limpiar Imágenes
                    </button>
                  </div>
                </div>

                <div class="col-6">
                  <div class="mb-3">
                    <label class="form-label" for="nombre_sitio"
                      ><strong>Nombre *</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="id_name_snombre_Sitioervice"
                      placeholder="Ej: Salto del mico"
                      name="nombre_Sitio"
                      required=""
                    />
                  </div>
                </div>

                <div class="col-6">
                  <div class="mb-3">
                    <label class="form-label" for="i_proveedores"
                      ><strong>Proveedores *</strong></label
                    >
                    <select
                      class="form-select"
                      id="i_proveedores"
                      name="i_proveedores"
                      v-model="incluyeProveedores"
                      required=""
                    >
                      <option value="1">No</option>
                      <option value="2">Si</option>
                    </select>
                  </div>
                </div>

                <!-- Descripción del sitio -->
                <div
                  style="margin-bottom: 15px"
                  class="col-sm-12 col-md-12 col-lg-7"
                >
                  <label class="form-label" for="nombre_hotel"
                    ><strong>Descripción *</strong></label
                  >
                  <textarea
                    class="form-control"
                    id="descripcionSitio"
                    placeholder="Describa el sitio..."
                    name="descripcionSitio"
                    rows="1"
                    required=""
                  ></textarea>
                </div>
              </div>

              <div
                style="margin-top: 10px"
                class="contenedor-proveedores"
                v-if="incluyeProveedores === '2'"
              >
                <!-- prov 1 -->
                <div class="proveedor">
                  <div class="elemento">
                    <img
                      :src="
                        imageUrl1 ||
                        'https://th.bing.com/th/id/OIG.IkfOuRHhwhRzXmOnFN9y?pid=ImgGn'
                      "
                      alt="Proveedor 1"
                      width="100"
                      height="100"
                      class="proveedor-imagen"
                    />
                    <div class="info-proveedor">
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
                      <label
                        style="margin-top: 10px"
                        class="form-label"
                        for="telefonoProveedor1"
                        ><strong>Teléfono:</strong></label
                      >
                      <input
                        style="margin-bottom: 10px"
                        class="form-control"
                        type="number"
                        id="telefonoProveedor1"
                        name="telefonoProveedor1"
                        value=""
                        placeholder="+57"
                      />
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
                          :required="imagesSelected1 !== 1"
                          type="file"
                          accept="image/*"
                          @change="handleFileUpload1"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <!-- prov 2 -->
                <div class="proveedor">
                  <div class="elemento">
                    <img
                      :src="
                        imageUrl2 ||
                        'https://th.bing.com/th/id/OIG.CO2sHWK_IEYIwzXsC2hX?pid=ImgGn'
                      "
                      alt="Proveedor 1"
                      width="100"
                      height="100"
                      class="proveedor-imagen"
                    />
                    <div class="info-proveedor">
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
                      <label
                        style="margin-top: 10px"
                        class="form-label"
                        for="telefonoProveedor2"
                        ><strong>Teléfono:</strong></label
                      >
                      <input
                        style="margin-bottom: 10px"
                        class="form-control"
                        type="number"
                        id="telefonoProveedor2"
                        name="telefonoProveedor2"
                        value=""
                        placeholder="+57"
                      />
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
                </div>

                <!-- prov 3 -->
                <div class="proveedor">
                  <div class="elemento">
                    <img
                      :src="
                        imageUrl3 ||
                        'https://th.bing.com/th/id/OIG.Z1Z.XXzP91MG18xmF3dm?pid=ImgGn'
                      "
                      alt="Proveedor 1"
                      width="100"
                      height="100"
                      class="proveedor-imagen"
                    />
                    <div class="info-proveedor">
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
                      <label
                        style="margin-top: 10px"
                        class="form-label"
                        for="telefonoProveedor3"
                        ><strong>Teléfono:</strong></label
                      >
                      <input
                        style="margin-bottom: 10px"
                        class="form-control"
                        type="number"
                        id="telefonoProveedor3"
                        name="telefonoProveedor3"
                        value=""
                        placeholder="+57"
                      />
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-end mb-3">
            <center>
              <a
                class="btn btn-outline-danger btn"
                role="button"
                href="#"
                style="margin-right: 5px"
                >Cancelar</a
              ><button
                class="btn btn-outline-dark btn"
                type="reset"
                style="margin-right: 5px"
              >
                Limpiar</button
              ><button
                class="btn btn-custom btn"
                type="submit"
                style="background: #fd3838; color: #fff"
              >
                <i class="bi bi-floppy-fill"></i>
                Registrar
              </button>
            </center>
          </div>
        </form>
      </div>
      <!-- End: Ludens - Create-Edit Form -->
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      // imagenesSitios
      uploadedImages: [], // Almacenar las imágenes cargadas
      imagesSelected: 0, // Contador de imágenes seleccionadas
      incluyeProveedores: "1",

      // imagenesProveedores
      imageUrl1: "", // Para almacenar la URL de la imagen cargada
      imagesSelected1: 0, // Para validar que se haya seleccionado una imagen

      imageUrl2: "",
      imagesSelected2: 0,

      imageUrl3: "",
      imagesSelected3: 0,
    };
  },
  methods: {
    // imagenesSitios
    handleFileUpload(event) {
      if (this.imagesSelected >= 4) {
        // Límite de 4 imágenes alcanzado, no permitir más
        return;
      }

      const fileInput = this.$refs.fileInput;
      const files = fileInput.files;

      // Recorrer los archivos seleccionados
      for (let i = 0; i < files.length; i++) {
        if (this.imagesSelected >= 4) {
          // Límite de 4 imágenes alcanzado, no permitir más
          break;
        }

        const file = files[i];
        const imageURL = URL.createObjectURL(file);

        this.uploadedImages.push({ src: imageURL, alt: "Imagen" });
        this.imagesSelected++;
      }

      // Limpiar el campo de entrada de archivos si es necesario
      fileInput.value = "";
    },
    clearImages() {
      // Restablecer el array de imágenes cargadas y el contador
      this.uploadedImages = [];
      this.imagesSelected = 0;
    },

    // imagenesProveedores
    handleFileUpload1(e) {
      const file = e.target.files[0];
      if (file) {
        this.imagesSelected = 1; // Actualiza la validación
        // Puedes usar FileReader para mostrar la imagen en el elemento <img>
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl1 = e.target.result;
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
  transform: scale(1.1); /* Cambia el tamaño al pasar el mouse */
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

.fixed-size-image {
  width: 100px;
  height: 100px;
  overflow: hidden; /* Para manejar el desbordamiento de la imagen */
  object-fit: cover;
  border-radius: 10px;
  border-style: solid;
  border-color: #fd38385b;
}

.link {
  text-decoration: none !important;
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

.Hoteles {
  background: linear-gradient(to right, #fd3838, transparent);
  align-items: center;
  border-radius: 10px;
  transition: 1s;
}

hr {
  border: none; /* Quita el borde predeterminado */
  background-color: #fd3838; /* Cambia el color de fondo a azul (puedes usar cualquier color que desees) */
  height: 2px; /* Define el grosor de la línea horizontal */
  margin: 5px 0; /* Añade margen superior e inferior para separar del contenido */
}

/* Estilos para resoluciones de 1000px o más */
@media screen and (min-width: 1000px) {
  .row .col-6 {
    flex: 0 0 20%; /* Establece un ancho del 25% para cada columna en pantallas de 1000px o más */
    max-width: 25%;
  }
}

@media screen and (max-width: 500px) {
  .Hoteles {
    background-color: #fd3838;
    align-items: left;
    border-radius: 10px;
  }
}

@media screen and (max-width: 400px) {
  .d-flex {
    display: flex;
    justify-content: center; /* Centra horizontalmente los elementos */
    align-items: center; /* Centra verticalmente los elementos (opcional) */
  }
}

.contenedor-proveedores {
  display: flex;
  max-width: 600px; /* Ancho máximo del contenedor */
  margin: auto;
  justify-content: space-around;
  /* flex-wrap: wrap; */
  border-radius: 10px;
  gap: 5px;
  margin-left: 5px;
  margin-right: 5px;
}

.proveedor {
  width: 40%;
  position: relative;
  margin-bottom: 5px;
  border-radius: 10px;
}

.elemento {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  height: 100%; /* Contenedor crecerá automáticamente para adaptarse al contenido */
}

.proveedor-imagen {
  width: 100%;
  max-height: 100px; /* Tamaño fijo para la imagen */
  object-fit: cover;
  overflow: hidden; /* Para manejar el desbordamiento de la imagen */
  border-radius: 10px;
  border-style: solid;
  border-color: #fd38385b;
}

.info-proveedor {
  flex: 1;
  padding: 10px 0;
  overflow: hidden; /* Para manejar el desbordamiento del texto */
}

.info-proveedor h6 {
  margin: 0;
}

.info-proveedor p {
  margin: 0;
}

p {
  font-size: 15px;
}

h6 {
  font-weight: bold;
  color: #3c3c3c;
}

@media screen and (min-width: 1000px) {
  .contenedor-proveedores {
    display: flex;

    margin: auto;
    justify-content: space-around;
    /* flex-wrap: wrap; */
    border-radius: 10px;
    gap: 20px;
    margin-left: 5px;
    margin-right: 5px;
  }
}

@media screen and (max-width: 600px) {
  .contenedor-proveedores {
    display: block; /* Cambiado a block para que los elementos estén uno debajo del otro en resoluciones menores o iguales a 600px */
  }

  .proveedor {
    width: 100%;
    position: relative;
    margin-bottom: 5px;
    border-radius: 10px;
  }
}
</style>
