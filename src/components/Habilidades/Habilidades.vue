<template>
  <section id="habilidades" class="full-screen">
    <div class="w-12 text-center flex justify-content-center align-self-center mb-5" style="height: 6rem;">
      <span class="title mt-3">Habilidades</span>
    </div>

    <div class="grid w-12 justify-content-center px-4 skills-grid">
  <a v-for="(item, index) in habilidades" 
     :key="index" 
     :href="item.link" 
     target="_blank" 
     rel="noopener noreferrer" 
     class="skill-card justify-items-center">
    
    <div class="card-item flex flex-column align-items-center justify-content-center">
      <img :src="item.imagem" :alt="item.nome" class="mb-3" />
      <span class="text-center font-geral" :class="{ 'mt-0': 'React Native' === item.nome }">
        {{ item.nome }}
      </span>
    </div>
  </a>
</div>

  </section>
</template>

<script setup lang="js">
const habilidades = [
  { nome: 'Java', imagem: new URL('@/assets/img/java.png', import.meta.url).href, link: 'https://github.com/andressasmedeiros/projeto_rpg' },
  { nome: 'Spring', imagem: new URL('@/assets/img/spring.png', import.meta.url).href, link: 'https://github.com/andressasmedeiros/projeto_rpg' },
  { nome: 'Docker', imagem: new URL('@/assets/img/docker.png', import.meta.url).href, link: 'https://github.com/andressasmedeiros/projeto_rpg' },
  { nome: 'PostgreSQL', imagem: new URL('@/assets/img/postgresql.png', import.meta.url).href, link: 'https://github.com/andressasmedeiros/projeto_rpg' },
  { nome: 'JavaScript', imagem: new URL('@/assets/img/javascript.png', import.meta.url).href, link: 'https://github.com/andressasmedeiros/meu_portfolio' },
  { nome: 'SQL', imagem: new URL('@/assets/img/sql.png', import.meta.url).href, link: 'https://github.com/andressasmedeiros/projeto_rpg' },
  { nome: 'Node.js', imagem: new URL('@/assets/img/node.png', import.meta.url).href, link: 'https://github.com/andressasmedeiros/gerenciamento_farmacia/tree/main/api' },
  { nome: 'Vue.js', imagem: new URL('@/assets/img/vue.png', import.meta.url).href, link: 'https://github.com/andressasmedeiros/meu_portfolio' },
  { nome: 'PrimeVue', imagem: new URL('@/assets/img/primevue.png', import.meta.url).href, link: 'https://github.com/andressasmedeiros/meu_portfolio' },
  { nome: 'PrimeFlex', imagem: new URL('@/assets/img/primeflex.png', import.meta.url).href, link: 'https://github.com/andressasmedeiros/meu_portfolio' },
  { nome: 'React Native', imagem: new URL('@/assets/img/react.png', import.meta.url).href, link: 'https://github.com/andressasmedeiros/app_farmacia_reactnative' },
  { nome: 'TypeScript', imagem: new URL('@/assets/img/typescript.png', import.meta.url).href, link: 'https://github.com/andressasmedeiros/gerenciamento_farmacia/tree/main/api' },
  { nome: 'Git', imagem: new URL('@/assets/img/git.png', import.meta.url).href, link: 'https://github.com/andressasmedeiros' },
  { nome: 'GitHub', imagem: new URL('@/assets/img/github.png', import.meta.url).href, link: 'https://github.com/andressasmedeiros' }
];
</script>

<style src="./Habilidades.css"></style>