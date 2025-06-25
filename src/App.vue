<template>
  <div>
    <Musica />
    <SobreMim />
    <Habilidades />
    <Projetos />
    <Contato />
  </div>
</template>

<script setup>
import Habilidades from './components/Habilidades.vue';
import Projetos from './components/Projetos.vue';
import SobreMim from './components/SobreMim.vue';
import Contato from './components/Contato.vue';
import Musica from './components/Musica.vue';
</script>

<style>
.justify-items-center {
  justify-items: center;
}
 .title {
  font-family: 'Puppies Play', sans-serif;
  font-size: 6rem;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
 }

 .font-geral {
  font-family: 'Open Sans', sans-serif;
 }

 @media (max-width: 768px) {
  .title {
    font-size: 5rem;
  }
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>