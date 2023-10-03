<template>
  <!-- Inicio de scroll de hoteles y sitios -->
  <main>
    <div class="galeria">
      <div class="Hoteles"><h5>Registra tus habitaciones</h5></div>
      <!-- Start: Ludens - Create-Edit Form -->
      <div
        class="container-fluid"
        style="margin-top: 20px; margin-bottom: 20px"
      >
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
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="alias_habitacion"
                      ><strong>Alias *</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="alias_habitacion"
                      placeholder="Para identificar la habitación"
                      name="alias_habitacion"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="direccion_habitacion"
                      ><strong>Dirección *</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="direccion_habitacion"
                      placeholder="Dirección de la habitación"
                      name="direccion_habitacion"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="capacidad_maxima"
                      ><strong>Capacidad máxima *</strong></label
                    >
                    <select
                      class="form-select"
                      id="capacidad_maxima"
                      name="capacidad_maxima"
                      required=""
                    >
                      <option value="2">2 personas</option>
                      <option value="3">3 personas</option>
                      <option value="4">4 personas</option>
                      <option value="5">5 personas</option>
                      <option value="6">6 personas</option>
                      <option value="7">7 personas</option>
                      <option value="8">8 personas</option>
                      <option value="9">9 personas</option>
                      <option value="10">10 personas</option>
                    </select>
                  </div>
                </div>

                <div class="col-sm-12 col-md-4 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="c_dobles"
                      ><strong>Camas dobles *</strong></label
                    >
                    <select
                      class="form-select"
                      id="c_dobles"
                      name="c_dobles"
                      required=""
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>

                <div class="col-sm-12 col-md-4 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="c_sencillas"
                      ><strong>Camas sencillas *</strong></label
                    >
                    <select
                      class="form-select"
                      id="c_sencillas"
                      name="c_sencillas"
                      required=""
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>

                <div class="col-sm-12 col-md-4 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="h_camarotes"
                      ><strong>Camarotes *</strong></label
                    >
                    <select
                      class="form-select"
                      id="h_camarotes"
                      name="h_camarotes"
                      required=""
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>

                <div class="col-sm-12 col-md-4 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label"><strong>Baño *</strong></label>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="banio"
                        id="banio_privado"
                        value="privado"
                        required=""
                      />
                      <label class="form-check-label" for="banio_privado"
                        >Privado</label
                      >
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="banio"
                        id="banio_compartido"
                        value="compartido"
                        required=""
                      />
                      <label class="form-check-label" for="banio_compartido"
                        >Compartido</label
                      >
                    </div>
                  </div>
                </div>

                <div class="col-sm-12 col-md-4 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="h_ventiladores"
                      ><strong>Ventiladores *</strong></label
                    >
                    <select
                      class="form-select"
                      id="h_ventiladores"
                      name="h_ventiladores"
                      required=""
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>

                <div class="col-sm-12 col-md-4 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="h_closet"
                      ><strong>Closet *</strong></label
                    >
                    <select
                      class="form-select"
                      id="h_closet"
                      name="h_closet"
                      required=""
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>

                <!-- <div class="col-sm-12 col-md-4 col-lg-4">
                  <div class="mb-3">
                    <strong>Imagenes *</strong>
                    <input
                      type="file"
                      ref="fileInput"
                      accept="image/*"
                      multiple
                      @change="handleFileUpload"
                    />
                    Aquí se muestran las imagenes (Vista previa)
                    <div v-for="(image, index) in uploadedImages" :key="index">
                      <img style="height: 100px; border-radius: 10px;" :src="image" alt="Imagen" />
                    </div>
                  </div>
                </div> -->

                <div class="col-sm-12 col-md-4 col-lg-4">
                  <div class="mb-3">
                    <label><strong>Servicios *</strong></label>
                    <!-- Checkbox para el servicio de wifi -->
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="wifi"
                        value="Wifi"
                        v-model="selectedServices"
                      />
                      <label class="form-check-label" for="wifi">Wifi</label>
                    </div>

                    <!-- Checkbox para el servicio de TV -->
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="tv"
                        value="TV"
                        v-model="selectedServices"
                      />
                      <label class="form-check-label" for="tv">TV</label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="arc"
                        value="Aire acondicionado"
                        v-model="selectedServices"
                      />
                      <label class="form-check-label" for="arc"
                        >Aire acondicionado</label
                      >
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="vad"
                        value="Ventilador adicional"
                        v-model="selectedServices"
                      />
                      <label class="form-check-label" for="vad"
                        >Ventilador adicional</label
                      >
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="aseo"
                        value="Aseo (Temporada)"
                        v-model="selectedServices"
                      />
                      <label class="form-check-label" for="aseo">Aseo</label>
                    </div>
                  </div>

                  <!-- Mostrar los servicios seleccionados -->
                  <div>
                    <strong>Servicios Seleccionados:</strong>
                    <ul
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
                      <li style="margin-left: 20px;" v-for="service in selectedServices" :key="service">
                        {{ service }}
                      </li>
                    </ul>
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
      uploadedImages: [], // Almacenar las imágenes cargadas
      selectedServices: [], // Almacenar los servicios seleccionados
    };
  },
  methods: {
    handleFileUpload(event) {
      const fileInput = this.$refs.fileInput;
      const files = fileInput.files;

      // Recorrer los archivos seleccionados
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Crear una URL temporal para la vista previa de la imagen
        const imageURL = URL.createObjectURL(file);

        // Agregar la URL al array de imágenes cargadas
        this.uploadedImages.push(imageURL);
      }

      // Actualizar el texto según la cantidad de archivos seleccionados
      this.selectedFileText =
        files.length === 0
          ? "Selecciona 4 imágenes..."
          : `${files.length} imágenes seleccionadas`;

      // Limpiar el campo de entrada de archivos si es necesario
      // fileInput.value = '';

      // Puedes realizar otras acciones aquí, como enviar las imágenes al servidor si es necesario
    },
  },
};
</script>

<style scoped>
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

@media screen and (max-width: 500px) {
  .Hoteles {
    background-color: #fd3838;
    align-items: left;
    border-radius: 10px;
  }
}
</style>
