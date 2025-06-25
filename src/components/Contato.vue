<template>
    <section id="contato" class="min-h-screen w-full flex flex-column section-contato">
        <div class="w-12 text-center flex justify-content-center align-self-center mb-5">
            <span class="title mt-3">Contato</span>
        </div>

        <div class="grid w-12 justify-content-center align-self-center text-center contact-itens">
            <div class="color-card xl:w-3 lg:w-3 md:w-6 w-12 justify-items-center">
                <a href="mailto:andressasmedeiross@gmail.com" target="_blank" rel="noopener noreferrer"
                    class="flex flex-column align-items-center">
                    <div class="icon-circle flex align-items-center justify-content-center mb-3">
                        <i class="pi pi-envelope icon"></i>
                    </div>
                    <h3>E-mail</h3>
                    <p>andressasmedeiross@gmail.com</p>
                </a>
            </div>

            <div class="color-card xl:w-3 lg:w-3 md:w-6 w-12 justify-items-center">
                <a href="http://wa.me/48936180593" target="_blank" rel="noopener noreferrer"
                    class="flex flex-column align-items-center">
                    <div class="icon-circle flex align-items-center justify-content-center mb-3">
                        <i class="pi pi-phone icon"></i>
                    </div>
                    <h3>Telefone</h3>
                    <p>(48)93618-0593</p>
                </a>
            </div>

            <div class="color-card xl:w-3 lg:w-3 md:w-6 w-12 justify-items-center">
                <a href="https://www.linkedin.com/in/andressasmedeiros" target="_blank" rel="noopener noreferrer"
                    class="flex flex-column align-items-center">
                    <div class="icon-circle flex align-items-center justify-content-center mb-3">
                        <i class="pi pi-linkedin icon"></i>
                    </div>
                    <h3>LinkedIn</h3>
                    <p>@andressasmedeiros</p>
                </a>
            </div>

            <div class="color-card xl:w-3 lg:w-3 md:w-6 w-12 justify-items-center">
                <a href="https://www.github.com/andressasmedeiros" target="_blank" rel="noopener noreferrer"
                    class="flex flex-column align-items-center">
                    <div class="icon-circle flex align-items-center justify-content-center mb-3">
                        <i class="pi pi-github icon"></i>
                    </div>
                    <h3>GitHub</h3>
                    <p>@andressasmedeiros</p>
                </a>
            </div>
        </div>

        <div class="w-full flex justify-center mt-5">
            <img :src="imagemPC" alt="Imagem decorativa" class="corner-image" />
        </div>
    </section>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue'

const PCDark = new URL('@/assets/PC.png', import.meta.url).href
const PCLight = new URL('@/assets/PC-claro.png', import.meta.url).href

const imagemPC = ref(PCDark)

onMounted(() => {
  const isModoClaro = document.body.classList.contains('modo-claro')
  imagemPC.value = isModoClaro ? PCLight : PCDark

  const observer = new MutationObserver(() => {
    const isClaro = document.body.classList.contains('modo-claro')
    imagemPC.value = isClaro ? PCLight : PCDark
  })

  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })
})
</script>


<style scoped>
.section-contato {
  background-color: #211d20;
  transition: background-color 0.3s ease;
}

body.modo-claro .section-contato {
  background-color: #ffffff;
}

body.modo-claro .color-card h3{
  color: #211d20;
}

body.modo-claro .color-card p{
  color: #211d20;
}

body.modo-claro .title{
  color: #211d20;
}

body.modo-claro .icon-circle {
  background-color: #d67fb5;
}

body.modo-claro .icon {
  color: #211d20;
}

.color-card h3,
.color-card p {
    color: #ffffff
}

.title{
    color: #ffffff;
}

.corner-image {
  max-width: 100%;
  height: auto;
  pointer-events: none;
  user-select: none;
  display: block;
  margin: 0 auto;
  object-fit: contain;
}

.icon-circle {
    background-color: #1c1a1e;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-top: 0.5rem
}

.icon {
    font-size: 30px;
    color: #9d79a2;
}

.contact-itens {
    font-family: 'Open Sans', sans-serif;
    color: white;
    padding: 1rem;
    box-sizing: border-box;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
}

.contact-itens a{
    width: 250px;
    color: white;
    text-decoration: none;
}

.contact-itens a:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: none; /* remove sombra da caixa toda */
    z-index: 5;
    border-top-right-radius: 30px;
}

.contact-itens a:hover > div {
    box-shadow: 0 8px 20px #9d79a280;
    border-radius: 12px; /* pra dar cantos arredondados bonitos */
    padding: 0.5rem; /* um espaçamento para sombra não ficar muito "grudada" */
}

@media (max-width: 767px) {
  body.modo-claro .corner-image {
    transform: scale(0.85);
  }
   .section-contato {
    padding-bottom: 60px; /* mesmo valor da altura do .fixed-bottom */
  }
}

@media (min-width: 992px) and (max-width: 1290px) {
  .color-card p{
    font-size: 13px;
  }
}

@media (min-width: 2560px) {
  .section-contato {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 2rem; /* ou ajuste se quiser mais espaço */
  }

  .color-card p{
    font-size: 22px;
  }

  .color-card h3{
    font-size: 30px;
  }

  .icon {
    font-size: 35px;
}

.icon-circle {
    width: 95px;
    height: 95px;
}
.corner-image {
  width: 800px;
  height: auto;
}
}

</style>