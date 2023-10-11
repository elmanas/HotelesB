<template>
  <div class="galeria">
    <div class="Hoteles"><h5>Estado de habitaciones</h5></div>
    <div>
      <!-- Botón para agregar nueva habitación -->
      <div>
        <div class="btn-group" role="group">
          <button
            style="margin-bottom: 5px; margin-top: 30px"
            class="btn btn-dark" 
            @click="showAddModal"
          >
            <i class="material-icons">add_box</i>
          </button>

          <button
            style="margin-bottom: 5px; margin-top: 30px"
            class="btn btn-dark"
            @click=""
          >
            <i class="material-icons">sim_card_download</i>
          </button>
        </div>
      </div>

      <!-- Tabla de habitaciones -->
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead style="align-items: center; text-align: center">
            <tr>
              <th>Alias</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(room, index) in rooms" :key="index">
              <td>{{ room.alias }}</td>
              <td>{{ room.estado }}</td>
              <td>
                <div class="btn-container">
                  <button class="btn btn-dark" @click="changeRoomStatus(index)">
                    <i class="material-icons">change_circle</i>
                  </button>
                  <button class="btn btn-dark" @click="editRoom(index)">
                    <i class="material-icons">edit</i>
                  </button>
                  <button class="btn btn-dark" @click="deleteRoom(index)">
                    <i class="material-icons">delete</i> 
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Modal para editar habitación -->
      <div class="modal" tabindex="-1" role="dialog" ref="editModal">
        <!-- Contenido del modal -->
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Editar Habitación</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click="hideEditModal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <!-- Formulario de edición -->
              <form>
                <div class="mb-3">
                  <label for="editAlias" class="form-label">Alias</label>
                  <input
                    type="text"
                    class="form-control"
                    id="editAlias"
                    v-model="editedRoom.alias"
                  />
                </div>
                <div class="mb-3">
                  <label for="editDireccion" class="form-label"
                    >Dirección</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="editDireccion"
                    v-model="editedRoom.direccion"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                @click="hideEditModal"
              >
                Cancelar
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="saveRoomChanges"
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rooms: [
        {
          alias: "Habitación 101",
          estado: "Disponible",
        },
        {
          alias: "Habitación 102",
          estado: "Reservado",
        },
        { alias: "Habitación 103", estado: "Ocupado" },
      ],
      editedRoom: { alias: "", direccion: "" },
      editModalVisible: false,
    };
  },
  methods: {
    showAddModal() {
      // mostrar el modal de agregar nueva habitación
    },
    changeRoomStatus(index) {
      // cambiar el estado de la habitación
    },
    editRoom(index) {
      // abrir el modal de edición
      this.editedRoom = { ...this.rooms[index] };
      this.editModalVisible = true;
    },
    hideEditModal() {
      // cerrar el modal de edición
      this.editModalVisible = false;
    },
    saveRoomChanges() {
      // guardar los cambios en la habitación editada
    },
    deleteRoom(index) {
      // eliminar la habitación
    },
  },
};
</script>

<style scoped>
.btn-container {
  display: flex;
  justify-content: center;
  gap: 5px; /* Espacio entre los botones */
}

.btn {
  border-radius: 50%; /* Redondear los botones */
  padding: 5px; /* Agregar espacio interior para separar los iconos */
  display: flex;
  align-items: center;
  justify-content: center;
}

.material-icons {
  font-size: 20px; /* Tamaño del icono */
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

/* Estilos para la tabla */
.table {
  border-collapse: collapse; /* Para eliminar los espacios entre las celdas */
  width: 100%;
}

th,
td {
  text-align: center;
  padding: 10px;
}

th {
  background-color: #f2f2f2; /* Color de fondo para las celdas del encabezado */
}

.btn-container {
  display: flex;
  gap: 5px; /* Espacio entre los botones */
}

/* Botones de acción dentro de la tabla */
.btn {
  border-radius: 50%; /* Redondear los botones */
  padding: 5px; /* Agregar espacio interior para separar los iconos */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #343a40; /* Color de fondo de los botones */
  color: white; /* Color del texto de los botones */
  border: none; /* Eliminar el borde de los botones */
}

.custom {
  background-color: #343a40;
  border-style: none;
  border-radius: 10px;
  color: #f2f2f2;
  align-items: center;
  justify-content: center;
  padding: 5px;
  display: flex;
}

.material-icons {
  font-size: 20px; /* Tamaño del icono */
}

/* Estilos para scrollbar */
.table-responsive::-webkit-scrollbar {
  height: 7px;
}

.table-responsive::-webkit-scrollbar-thumb {
  background-color: #fd3838;
  border-radius: 20px;
}
</style>
