<template>
  <section id="habilidades" class="full-screen">
    <div class="w-12 text-center flex justify-content-center align-self-center mb-5" style="height: 6rem;">
      <span class="title mt-3">Habilidades</span>
    </div>

    <div class="grid w-12 justify-content-center px-4 skills-grid">
      <div v-for="(item, index) in habilidades" :key="index" class="skill-card justify-items-center">
        <div class="card-item flex flex-column align-items-center justify-content-center">
          <img :src="item.imagem" class="mb-3" />
          <span class="text-center font-geral" :class="{ 'mt-0': 'React Native' === item.nome }">{{ item.nome
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="js">
const habilidades = [
  { nome: 'Java', imagem: new URL('@/assets/img/java.png', import.meta.url).href },
  { nome: 'Spring', imagem: new URL('@/assets/img/spring.png', import.meta.url).href },
  { nome: 'Docker', imagem: new URL('@/assets/img/docker.png', import.meta.url).href },
  { nome: 'PostgreSQL', imagem: new URL('@/assets/img/postgresql.png', import.meta.url).href },
  { nome: 'JavaScript', imagem: new URL('@/assets/img/javascript.png', import.meta.url).href },
  { nome: 'SQL', imagem: new URL('@/assets/img/sql.png', import.meta.url).href },
  { nome: 'Node.js', imagem: new URL('@/assets/img/node.png', import.meta.url).href },
  { nome: 'Vue.js', imagem: new URL('@/assets/img/vue.png', import.meta.url).href },
  { nome: 'PrimeVue', imagem: new URL('@/assets/img/primevue.png', import.meta.url).href },
  { nome: 'PrimeFlex', imagem: new URL('@/assets/img/primeflex.png', import.meta.url).href },
  { nome: 'React Native', imagem: new URL('@/assets/img/react.png', import.meta.url).href },
  { nome: 'TypeScript', imagem: new URL('@/assets/img/typescript.png', import.meta.url).href },
  { nome: 'Git', imagem: new URL('@/assets/img/git.png', import.meta.url).href },
  { nome: 'GitHub', imagem: new URL('@/assets/img/github.png', import.meta.url).href }
];
</script>

<style src="./Habilidades.css"></style>