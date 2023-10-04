<template>
  <main>
    <div class="galeria">
      <div class="Hoteles"><h5>Registra tu hotel</h5></div>
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
                <div class="col-sm-12 col-md-8 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="direccion_hotel"
                      ><strong>Dirección *</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="id_name_service"
                      placeholder="Dirección del hotel"
                      name="direccion_hotel"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="nombre_hotel"
                      ><strong>Nombre *</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="id_price_service"
                      placeholder="Nombre del hotel"
                      name="nombre_hotel"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="representante_legal"
                      ><strong>Representante&nbsp;legal *</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="id_price_service-1"
                      placeholder="Nombre del representante"
                      name="representante_legal"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="tel_contacto"
                      ><strong>Teléfono&nbsp;*</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="id_price_service-2"
                      placeholder="Teléfono de contacto"
                      name="tel_contacto"
                      oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                      pattern="[0-9]{10,}"
                      title="Ingresa al menos 10 números"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="email"
                      ><strong>Correo *</strong></label
                    ><input
                      class="form-control"
                      type="email"
                      id="id_price_service-3"
                      placeholder="Correo valido"
                      name="email"
                      required=""
                    />
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

<script></script>

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
