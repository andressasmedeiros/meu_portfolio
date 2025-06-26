<template>
  <div>
    <Musica />
    <SobreMim />
    <ClientOnly>
      <Habilidades />
    </ClientOnly>

    <ClientOnly>
      <Projetos />
    </ClientOnly>

    <ClientOnly>
      <Contato />
    </ClientOnly>
  </div>
</template>

<script setup>
import Habilidades from './components/Habilidades/Habilidades.vue';
import Projetos from './components/Projetos/Projetos.vue';
import SobreMim from './components/SobreMim/SobreMim.vue';
import Contato from './components/Contatos/Contato.vue';
import Musica from './components/Musica/Musica.vue';
</script>