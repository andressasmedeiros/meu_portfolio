import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory } from 'vue-router'
import { createRouter } from 'vue-router'
import PrimeVue from 'primevue/config';
import './assets/globalCss/style.css'
import Aura from '@primeuix/themes/aura';
import {
  Toolbar,
  Text,
  Button
} from 'primevue'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./components/SobreMim/SobreMim.vue')
    }
  ]
});


const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.component('Toolbar', Toolbar);
app.component('Button', Button);
app.component('Text', Text);
app.component('Button', Button);
app.mount('#app')

