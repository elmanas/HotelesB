<template>
  <main>
    <div class="galeria">
      <div class="Hoteles"><h5>Registro de proveedores</h5></div>
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
                <div class="col-6">
                  <div class="mb-3">
                    <label class="form-label" for="n_sitio"
                      ><strong>Nombre *</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="n_sitio"
                      placeholder="Ej: Juan Curí"
                      name="n_sitio"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="mb-3">
                    <strong>4 Imágenes *</strong>
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
                        :required="imagesSelected !== 4"
                        type="file"
                        ref="fileInput"
                        accept="image/*"
                        multiple
                      />
                    </div>
                  </div>
                </div>

                <!-- proveedor 1 -->
                <div class="col-6">
                  <div class="mb-3">
                    <label class="form-label" for="prov_1"
                      ><strong>Proveedor 1 *</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="prov_1"
                      placeholder="Nombre"
                      name="prov_1"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-6">
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
                        :required="imagesSelected !== 1"
                        type="file"
                        ref="fileInput"
                        accept="image/*"
                        multiple
                      />
                    </div>
                  </div>
                </div>

                <!-- proveedor 2 -->
                <div class="col-6">
                  <div class="mb-3">
                    <label class="form-label" for="prov_2"
                      ><strong>Proveedor 2 *</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="prov_2"
                      placeholder="Nombre"
                      name="prov_2"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-6">
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
                        :required="imagesSelected !== 1"
                        type="file"
                        ref="fileInput"
                        accept="image/*"
                        multiple
                      />
                    </div>
                  </div>
                </div>

                <!-- proveedor 3 -->
                <div class="col-6">
                  <div class="mb-3">
                    <label class="form-label" for="prov_3"
                      ><strong>Proveedor 3 *</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="prov_3"
                      placeholder="Nombre"
                      name="prov_3"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-6">
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
                        :required="imagesSelected !== 1"
                        type="file"
                        ref="fileInput"
                        accept="image/*"
                        multiple
                      />
                    </div>
                  </div>
                </div>

                <!-- Fin registro proveedores  -->
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

<script></script>

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
.fixed-size-image {
  width: 50px;
  height: 50px;
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
    flex: 0 0 30%; /* Establece un ancho del 25% para cada columna en pantallas de 1000px o más */
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
