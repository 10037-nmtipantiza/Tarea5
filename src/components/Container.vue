<!-- Container.vue -->

<template>
  <div>
    <Header>
      <!-- Contenido para el encabezado -->
      <h1>¡Mi App Vue!</h1>
    </Header>

    <Lista>
      <!-- Contenido para la lista -->
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
    </Lista>

    <Formulario>
      <!-- Contenido para el formulario -->
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" v-model="nombre" />
    </Formulario>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Lista from "@/components/Lista.vue";
import Formulario from "@/components/Formulario.vue";

export default {
  components: {
    Header,
    Lista,
    Formulario,
  },
  data() {
    return {
      nombre: "",
    };
  },
};
</script>

<style scoped>
/* Estilos específicos del componente contenedor */
</style>
