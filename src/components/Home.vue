<template>
  <!-- Start: Slider Carousel with side text -->
  <div
    id="carousel"
    class="carousel slide"
    data-bs-interval="3000"
    data-bs-ride="carousel"
  >
    <!-- Start: Slides -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="w-100 d-block" src="https://i.ibb.co/pjcNX5L/2.png" />
        <div
          class="carousel-caption d-flex"
          style="
            position: absolute;
            top: 0px;
            left: 0px;
            width: 50%;
            height: 100%;
          "
        >
          <div
            class="d-md-block position-absolute top-50 start-50 translate-middle"
          >
            <h1
              style="
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                font-style: italic;
              "
            >
              Histórico
            </h1>
            <!-- <p>Paragraph</p> -->
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="w-100 d-block" src="https://i.ibb.co/NLb0D2Z/1.png" />
        <div
          class="carousel-caption d-flex"
          style="
            position: absolute;
            top: 0px;
            left: 50%;
            width: 50%;
            height: 100%;
          "
        >
          <div
            class="d-md-block position-absolute top-50 start-50 translate-middle"
          >
            <h1
              style="
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                font-style: italic;
              "
            >
              Pintoresco
            </h1>
            <!-- <p>Lleno de magia</p> -->
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="w-100 d-block" src="https://i.ibb.co/KjjL7xM/3.png" />
        <div
          class="carousel-caption d-flex"
          style="
            position: absolute;
            top: 0px;
            left: 0px;
            width: 50%;
            height: 100%;
          "
        >
          <div
            class="d-md-block position-absolute top-50 start-50 translate-middle"
          >
            <h1
              style="
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                font-style: italic;
              "
            >
              Encantador
            </h1>
            <!-- <p>Paragraph</p> -->
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="w-100 d-block" src="https://i.ibb.co/H2bzWzv/4.png" />
        <div
          class="carousel-caption d-flex"
          style="
            position: absolute;
            top: 0px;
            left: 50%;
            width: 50%;
            height: 100%;
          "
        >
          <div
            class="d-md-block position-absolute top-50 start-50 translate-middle"
          >
            <h1
              style="
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                font-style: italic;
              "
            >
              Tranquilo
            </h1>
            <!-- <p>Paragraph</p> -->
          </div>
        </div>
      </div>
    </div>
    <!-- End: Slides -->
  </div>
  <!-- End: Slider Carousel with side text -->

  <!-- Inicio de scroll de hoteles y sitios -->
  <main>
    <div class="galeria">
      <div class="Hoteles"><h5>Hoteles</h5></div>
      <button
        type="button"
        class="btn btn-custom btn-sm scroll-button"
        @click="scrollImages(-100, 'hotel')"
      >
        <i style="color: black" class="bi bi-arrow-left-circle-fill"></i>
      </button>

      <button
        type="button"
        class="btn btn-custom btn-sm scroll-button"
        @click="scrollImages(100, 'hotel')"
      >
        <i style="color: black" class="bi bi-arrow-right-circle-fill"></i>
      </button>

      <div class="lista-imagenes hotel-images">
        <div class="imagen-con-texto">
          <router-link class="link" to="/BellaVista">
            <img src="https://i.ibb.co/h29BtTK/2.jpg" alt="imagen-principal" />
            <p class="text-hotel">Bella Vista</p>
          </router-link>
        </div>

        <div class="imagen-con-texto">
          <img src="https://i.ibb.co/xsbFYX0/3.jpg" alt="imagen-principal" />
          <p class="text-hotel">Tamacara</p>
        </div>

        <div class="imagen-con-texto">
          <img src="https://i.ibb.co/559wv1J/1.jpg" alt="imagen-principal" />
          <p class="text-hotel">Vida Sana</p>
        </div>

        <div class="imagen-con-texto">
          <img src="https://i.ibb.co/2Fd2rW3/5.jpg" alt="imagen-principal" />
          <p class="text-hotel">Luis Alfonso</p>
        </div>

        <div class="imagen-con-texto">
          <img src="https://i.ibb.co/WgCkWjh/6.jpg" alt="imagen-principal" />
          <p class="text-hotel">El Dorado</p>
        </div>
      </div>

      <br />

      <div class="Sitios"><h5>Sitios Turísticos</h5></div>

      <button
        type="button"
        class="btn btn-custom btn-sm scroll-button"
        @click="scrollImages(-100, 'sitios')"
      >
        <i style="color: black" class="bi bi-arrow-left-circle-fill"></i>
      </button>

      <button
        type="button"
        class="btn btn-custom btn-sm scroll-button"
        @click="scrollImages(100, 'sitios')"
      >
        <i style="color: black" class="bi bi-arrow-right-circle-fill"></i>
      </button>

      <div class="lista-imagenes sitios-images">
        <div class="imagen-con-texto">
          <router-link class="link" to="/SaltoDelMico">
            <img src="https://i.ibb.co/R77C9hC/1.jpg" alt="imagen-principal" />
            <p class="text-hotel">Salto del mico</p>
          </router-link>
        </div>

        <div class="imagen-con-texto">
          <img src="https://i.ibb.co/GxS2JWX/2.jpg" alt="imagen-principal" />
          <p class="text-hotel">Catedral</p>
        </div>

        <div class="imagen-con-texto">
          <img src="https://i.ibb.co/WkgZkZJ/3.jpg" alt="imagen-principal" />
          <p class="text-hotel">Museo</p>
        </div>

        <div class="imagen-con-texto">
          <img src="https://i.ibb.co/xD9pTrH/4.jpg" alt="imagen-principal" />
          <p class="text-hotel">Juan Curí</p>
        </div>

        <div class="imagen-con-texto">
          <img src="https://i.ibb.co/nBwMT4W/5.jpg" alt="imagen-principal" />
          <p class="text-hotel">Pscinas</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    scrollImages(offset, galleryType) {
      const imageList = document.querySelector(`.${galleryType}-images`);
      imageList.scrollLeft += offset;
    },
  },
};
</script>

<style scoped>
.imagen-con-texto {
  transition: 0.5s;
}

.imagen-con-texto:hover {
  filter: saturate(2);
  transform: scale(1.01); /* Cambia el tamaño al pasar el mouse */
}

.btn.btn-custom {
  transition: transform 0.3s; /* Transición de transformación */
}

.btn.btn-custom:active {
  animation: iconClickAnimation 0.3s ease; /* Aplica la animación al hacer clic */
}

@keyframes iconClickAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.link {
  text-decoration: none !important;
}

.text-hotel {
  margin-right: 10px;
  text-align: center;
  background-color: #b7642d;
  color: #fff;
  border-radius: 0 0 10px 10px; /* Redondear solo las esquinas superiores */
}

/* Estilos para scrollbar */
.lista-imagenes::-webkit-scrollbar {
  height: 7px;
}

.lista-imagenes::-webkit-scrollbar-thumb {
  background-color: #b7642d;
  border-radius: 20px;
}

/* Estilos para botones de scroll */
.btn.btn-custom {
  background-color: #b7642d 00;
  color: #fff;
}

.galeria {
  padding: 16px;
  margin-top: 8px;
  transform: 1s;
}

.lista-imagenes img {
  width: 100%;
  object-fit: cover;
  width: 107px;
  height: 150px;
  margin-right: 10px;
  display: block;
  border-radius: 10px 10px 0 0; /* Redondear solo las esquinas superiores */
}

.lista-imagenes {
  display: flex;
  overflow-y: auto;
  margin-top: 10px;
}

h5 {
  padding: 5px;
  margin-left: 5px;
  color: #fff;
}

.Hoteles {
  background: linear-gradient(to right, #b7642d, transparent);
  align-items: center;
  border-radius: 10px;
  transition: 1s;
}

.Sitios {
  background: linear-gradient(to right, #b7642d, transparent);
  align-items: center;
  border-radius: 10px;
  transition: 1s;
}

/* Ocultar barra de desplazamiento vertical */
.lista-imagenes {
  overflow-y: hidden;
}

@media screen and (max-width: 2000px) {
  .lista-imagenes img {
    /* Flexbox */
    /* width: 70%;
	display: flex;
	flex-wrap: wrap;
	gap: 20px; */

    /* Grid */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    width: 300px;
    height: 300px;
  }
}

@media screen and (max-width: 700px) {
  .lista-imagenes img {
    /* Flexbox */
    /* width: 70%;
	display: flex;
	flex-wrap: wrap;
	gap: 20px; */

    /* Grid */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 200px;
    height: 200px;
  }
}

@media screen and (max-width: 500px) {
  .lista-imagenes img {
    /* Flexbox */
    /* width: 70%;
	display: flex;
	flex-wrap: wrap;
	gap: 20px; */

    /* Grid */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 107px;
    height: 150px;
  }

  .Sitios {
    background: #b7642d;
    align-items: center;
    border-radius: 10px;
  }

  .Hoteles {
    background-color: #b7642d;
    align-items: left;
    border-radius: 10px;
  }
}
</style>
