<template>
  <section id="habilidades" class="full-screen">
    <div class="w-12 text-center flex justify-content-center align-self-center mb-5" style="height: 6rem;">
      <span class="title mt-3">Habilidades</span>
    </div>

    <div class="grid w-12 justify-content-center px-4 skills-grid">
      <div v-for="(item, index) in habilidades" :key="index" class="skill-card justify-items-center">
        <div class="card-item flex flex-column align-items-center justify-content-center">
          <img :src="item.imagem" class="mb-3" />
          <span class="text-white text-center font-geral" :class="{ 'mt-0': 'React Native' === item.nome }">{{ item.nome
            }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="js">
const habilidades = [
  { nome: 'Java', imagem: new URL('@/assets/java.png', import.meta.url).href },
  { nome: 'Spring', imagem: new URL('@/assets/spring.png', import.meta.url).href },
  { nome: 'Docker', imagem: new URL('@/assets/docker.png', import.meta.url).href },
  { nome: 'PostgreSQL', imagem: new URL('@/assets/postgresql.png', import.meta.url).href },
  { nome: 'JavaScript', imagem: new URL('@/assets/javascript.png', import.meta.url).href },
  { nome: 'SQL', imagem: new URL('@/assets/sql.png', import.meta.url).href },
  { nome: 'Node.js', imagem: new URL('@/assets/node.png', import.meta.url).href },
  { nome: 'Vue.js', imagem: new URL('@/assets/vue.png', import.meta.url).href },
  { nome: 'PrimeVue', imagem: new URL('@/assets/primevue.png', import.meta.url).href },
  { nome: 'PrimeFlex', imagem: new URL('@/assets/primeflex.png', import.meta.url).href },
  { nome: 'React Native', imagem: new URL('@/assets/react.png', import.meta.url).href },
  { nome: 'TypeScript', imagem: new URL('@/assets/typescript.png', import.meta.url).href },
  { nome: 'Git', imagem: new URL('@/assets/git.png', import.meta.url).href },
  { nome: 'GitHub', imagem: new URL('@/assets/github.png', import.meta.url).href }
];
</script>

<style scoped>
.full-screen {
  width: 100%;
  min-height: 100vh;
  background-color: #3d215e;
  background-image: url('@/assets/fundo.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
}

.title {
    color: #ffffff;
}

body.modo-claro .full-screen {
  background-color: #d1a9c2;
}

body.modo-claro .title {
  color: #211d20;
}

body.modo-claro .card-item {
  background-color: #d67fb5;
}

body.modo-claro .card-item:hover {
  box-shadow: 0 0 12px #52B7A9;
  border-bottom: 3px solid #0c3d37;
}

.card-item {
  width: 12rem;
  height: 12rem;
  background-color: #B9A9D1;
  border-radius: 1.5rem 0 0 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border-bottom: 3px solid transparent;
}

.card-item:hover {
  transform: scale(1.1);
  box-shadow: 0 0 12px #B9A9D1;
  border-bottom: 3px solid #3d215e;
}

.card-item img {
  width: 4rem;
  height: 4rem;
  object-fit: contain;
}

.card-item span {
  margin-top: 0.5rem;
  color: white;
  font-weight: 600;
}

.skill-card {
  width: 14.28%;
  margin-bottom: 40px;
}

.skills-grid {
  min-height: calc(100vh - 7rem);
  align-content: center;
}

@media (max-width: 1773px) {
  .skill-card {
    width: 15%;
  }
}

@media (max-width: 1428px) {
  .skill-card {
    width: 20%;
  }
}

@media (max-width: 1100px) {
  .skill-card {
    width: 25%;
  }
}

@media (max-width: 901px) {
  .skill-card {
    width: 25%;
  }

  .card-item {
    width: 8rem;
    height: 8rem;
  }

  .card-item img {
    width: 3rem;
    height: 3rem;
  }
}

@media (max-width: 690px) {
  .skill-card {
    width: 33.33%;
  }
}

@media (max-width: 478px) {
  .skill-card {
    width: 50%;
  }

  .card-item {
    width: 6rem;
    height: 6rem;
  }

  .card-item img {
    width: 2rem;
    height: 2rem;
  }
}
</style>