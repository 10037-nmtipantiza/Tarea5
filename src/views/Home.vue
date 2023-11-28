<template>
  <div>
    <Header />
    <Lista :items="miLista" />
    <Formulario />
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
      miLista: [
        { id: 1, text: "Item 1" },
        { id: 2, text: "Item 2" },
        // ... más elementos ...
      ],
    };
  },
  // ... más lógica de la vista ...
};
</script>
