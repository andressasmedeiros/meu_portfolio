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
    this.audio.volume = 0.08;

    // Tentar autoplay ao montar
    this.tentarTocarAutomaticamente();
  }
};
</script>

<style scoped>
.botao-musica {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #f05391;
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 9999;
}
</style>
