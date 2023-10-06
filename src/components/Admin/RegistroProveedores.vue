<template>
  <main>
    <div class="galeria">
      <div class="Hoteles"><h5>Registra sitios turísticos</h5></div>
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
                <div class="col-5">
                  <div class="mb-3">
                    <label class="form-label" for="alias_habitacion"
                      ><strong>Nombre *</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="alias_habitacion"
                      placeholder="Nombre sitio turístico"
                      name="alias_habitacion"
                      required=""
                    />
                  </div>
                </div>

                <!-- Imagen sitio turístico -->
                <div class="col-5">
                  <div class="mb-3">
                    <strong>4 Imágenes *</strong>
                    <br />
                    <input
                      style="margin-top: 13px"
                      :required="imagesSelected !== 4"
                      type="file"
                      ref="fileInput"
                      accept="image/*"
                      multiple
                      @change="handleFileUpload"
                    />
                    <!-- Contenedor de las imágenes con margen -->
                    <div
                      style="margin-top: 15px; display: flex"
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
                  </div>
                </div>

                <hr />

                <div class="col-sm-12 col-md-8 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="h_servicios"
                      ><strong>Proveedor 1</strong></label
                    >
                    <input
                      class="form-control"
                      type="text"
                      id="alias_habitacion"
                      placeholder="Nombre sitio turístico"
                      name="alias_habitacion"
                      required=""
                    />
                  </div>
                </div>

                <!-- Logo proveedor 1 -->
                <div class="col-5">
                  <div class="mb-3">
                    <strong>Logo *</strong>
                    <br />
                    <input
                      style="margin-top: 13px"
                      :required="imagesSelected !== 1"
                      type="file"
                      ref="fileInput"
                      accept="image/*"
                      multiple
                      @change="handleFileUpload"
                    />
                    <!-- Contenedor de las imágenes con margen -->
                    <div
                      style="margin-top: 15px; display: flex"
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
                  </div>
                </div>

                <div class="col-sm-12 col-md-8 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="h_servicios"
                      ><strong>Proveedor 2</strong></label
                    >
                    <select
                      class="form-select"
                      id="aire"
                      name="aire"
                      required=""
                    >
                      <option value="S">Si</option>
                      <option value="N">No</option>
                    </select>
                  </div>
                </div>

                <!-- Logo proveedor 2 -->
                <div class="col-5">
                  <div class="mb-3">
                    <strong>Logo *</strong>
                    <br />
                    <input
                      style="margin-top: 13px"
                      :required="imagesSelected !== 1"
                      type="file"
                      ref="fileInput"
                      accept="image/*"
                      multiple
                      @change="handleFileUpload"
                    />
                    <!-- Contenedor de las imágenes con margen -->
                    <div
                      style="margin-top: 15px; display: flex"
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
                  </div>
                </div>

                <div class="col-sm-12 col-md-8 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="h_servicios"
                      ><strong>Proveedor 3</strong></label
                    >
                    <select
                      class="form-select"
                      id="aseo"
                      name="aseo"
                      required=""
                    >
                      <option value="S">Si</option>
                      <option value="N">No</option>
                    </select>
                  </div>
                </div>

                <!-- Logo proveedor 3 -->
                <div class="col-5">
                  <div class="mb-3">
                    <strong>Logo *</strong>
                    <br />
                    <input
                      style="margin-top: 13px"
                      :required="imagesSelected !== 1"
                      type="file"
                      ref="fileInput"
                      accept="image/*"
                      multiple
                      @change="handleFileUpload"
                    />
                    <!-- Contenedor de las imágenes con margen -->
                    <div
                      style="margin-top: 15px; display: flex"
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
                  </div>
                </div>

                <!-- Fin registro habitaciones -->
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
                @click="clearImages"
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

</script>

<style scoped>
.fixed-size-image {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  border-style: solid;
  border-color: #fd3838;
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

  .d-flex {
    display: flex;
    justify-content: center; /* Centra horizontalmente los elementos */
    align-items: center; /* Centra verticalmente los elementos (opcional) */
    flex-wrap: wrap;
  }
}
</style>
