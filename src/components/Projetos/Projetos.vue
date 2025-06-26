<template>
    <section id="projetos" class="full-screen">
        <div class="w-12 text-center flex justify-content-center align-self-center mb-5" style="height: 6rem;">
            <span class="title mt-3">Projetos</span>
        </div>

        <div class="grid w-12 justify-content-center px-4">
            <div v-for="(projeto, index) in projetos" :key="index" class="col-12 sm:col-6 lg:col-4">
                <div class="card w-12 flex justify-content-center align-items-center text-center text-white overflow-hidden border-round-xl cursor-pointer"
                    :style="{ backgroundImage: `url(${projeto.imagem})` }" @click="abrirModal(projeto)">
                    <div class="overlay"></div>
                    <div class="card-content flex flex-column justify-content-center align-items-center p-4 font-geral">
                        <h3 class="mb-2">{{
                            projeto.titulo }}</h3>
                        <p class="text-base font-geral">{{ projeto.resumo }}</p>
                    </div>
                </div>
            </div>
        </div>

        <Dialog v-model:visible="modalAberto" modal :style="{ width: '50vw' }" :dismissable-mask="true">
            <h2 class="text-2xl font-bold text-white mb-4 font-geral">{{
                projetoSelecionado?.titulo }}</h2>

            <video v-if="projetoSelecionado?.video" :src="projetoSelecionado.video" controls
                class="w-12 border-rounded mb-4"></video>

            <img v-else-if="projetoSelecionado?.imagem" :src="projetoSelecionado.imagem" alt="Imagem do projeto"
                class="w-12 border-rounded mb-4" />

            <div class="overflow-auto pr-4 font-geral">
                <div v-for="(sec, index) in projetoSelecionado?.descricao" :key="index" class="mb-4">
                    <h3 class="titulo-secundario mb-2 text-xl font-bold font-geral">{{ sec.titulo }}
                    </h3>
                    <p class="text-base font-geral" style="white-space: pre-line;">{{ sec.texto }}
                    </p>
                </div>
            </div>
            <div v-if="projetoSelecionado?.repositorio" class="mt-4">
                <a :href="projetoSelecionado.repositorio" target="_blank"
                    class="px-4 py-2 font-bold border-round-lg transition-all text-white font-geral card"
                    style="text-decoration: none; background-color: #88B04B;">
                    🔗 Ver Repositório no GitHub
                </a>
            </div>
        </Dialog>

    </section>
</template>

<script setup>
import { ref } from "vue";
import Dialog from "primevue/dialog";
import projetosData from "../../data/public";


const projetos = ref(projetosData);

const modalAberto = ref(false);
const projetoSelecionado = ref(null);

function abrirModal(projeto) {
    projetoSelecionado.value = projeto;
    modalAberto.value = true;
}
</script>

<style>
.titulo-secundario {
    color: #88B04B;
}

body.modo-claro .titulo-secundario {
    color: #3B7A57
}

body.modo-claro .p-dialog {
    background-color: #fff !important;
    color: #211d20 !important;
}

body.modo-claro .p-dialog .p-dialog-header,
body.modo-claro .p-dialog h2 {
    color: #211d20 !important;
}

body.modo-claro .p-dialog a.card {
    background-color: #3B7A57 !important;
}
</style>

<style src="./Projetos.css" scoped></style>
