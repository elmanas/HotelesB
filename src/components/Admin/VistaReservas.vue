<template>
  <main>
    <div class="galeria">
      <div class="Hoteles"><h5>Reservar una habitación</h5></div>
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
                    <label class="form-label" for="r_nombre"
                      ><strong>Nombre *</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="r_nombre"
                      placeholder="Nombre de la habitación"
                      name="r_nombre"
                      required=""
                    />
                  </div>
                </div>

                <div class="col-sm-12 col-md-8 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="r_fecha_in"
                      ><strong>Fecha de ingreso *</strong></label
                    ><input
                      class="form-control"
                      type="date"
                      id="r_fecha_in"
                      name="rr_fecha_in"
                      required=""
                    />
                  </div>
                </div>

                <div class="col-sm-12 col-md-8 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="r_fecha_eg"
                      ><strong>Fecha de egreso *</strong></label
                    ><input
                      class="form-control"
                      type="date"
                      id="r_fecha_eg"
                      name="rr_fecha_eg"
                      required=""
                    />
                  </div>
                </div>

                <div class="col-sm-12 col-md-4 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="r_pnombre"
                      ><strong>Nombre de la persona *</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="ir_pnombre"
                      placeholder="Nombre del reservante"
                      name="r_pnombre"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="r_ndoc"
                      ><strong>Documento *</strong></label
                    ><input
                      class="form-control"
                      type="number"
                      id="ir_ndoc"
                      placeholder="Número de documento"
                      name="r_ndoc"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="r_tel_contacto"
                      ><strong>Teléfono&nbsp;*</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="r_tel_contacto"
                      placeholder="Teléfono de contacto"
                      name="r_tel_contacto"
                      oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                      pattern="[0-9]{10,}"
                      required=""
                    />
                  </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                  <div class="mb-3">
                    <label class="form-label" for="r_idtransferencia"
                      ><strong>ID transferencia *</strong></label
                    ><input
                      class="form-control"
                      type="text"
                      id="r_idtransferencia"
                      placeholder="Ingrese el ID de transferencia"
                      name="er_idtransferencia"
                      required=""
                    />
                  </div>
                </div>
                  <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="mb-3">
                      <label class="form-label" for="r_idtransferencia"
                        ><strong>Saldo *</strong></label
                      >
                      <div
                        style="
                          background-color: #fd3838;
                          margin-right: 200px;
                          align-items: center;
                          text-align: center;
                          color: #fff;
                          border-radius: 10px;
                        "
                      >
                        <p>$ 100.000</p>
                      </div>
                    </div>
                  </div>
                <!-- Fin de el registro de reservas -->
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
                <i class="bi bi-backpack2-fill"></i>
                Reservar
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
</style>
