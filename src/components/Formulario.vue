<!-- Formulario.vue -->

<template>
  <div>
    <h2>Formulario</h2>
    <form @submit.prevent="submitForm">
      <slot></slot>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      // Lógica del envío del formulario
    },
  },
};
</script>

<style scoped>
/* Estilos específicos del componente */
</style>
