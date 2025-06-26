<template>
  <Button :icon="tocando ? 'pi pi-pause' : 'pi pi-play'" class="botao-musica" @click="tocarMusica" />
</template>

<script>
export default {
  data() {
    return {
      audio: null,
      tocando: false,
    };
  },
  methods: {
    tocarMusica() {
      if (!this.audio) return;

      if (this.tocando) {
        this.audio.pause();
      } else {
        this.audio.play().catch((err) => {
          console.warn('Autoplay bloqueado. Será ativado após interação.', err);
        });
      }
      this.tocando = !this.tocando;
    },
    tentarTocarAutomaticamente() {
      this.audio.play().then(() => {
        this.tocando = true;
      }).catch(() => {
        // Se o navegador bloquear, tentamos após o primeiro clique
        const ativarSom = () => {
          this.audio.play();
          this.tocando = true;
          window.removeEventListener('click', ativarSom);
        };
        window.addEventListener('click', ativarSom);
      });
    }
  },
  mounted() {
    this.audio = new Audio('/musica.mp3');
    this.audio.loop = true;
    this.audio.volume = 0.06;

    // Tentar autoplay ao montar
    this.tentarTocarAutomaticamente();
  }
};
</script>

<style src="./Musica.css" scoped></style>
