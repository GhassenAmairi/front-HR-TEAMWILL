import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import  store  from './store';
import '@/css/customtheme.scss';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';
import createI18n from './i18n';

export const i18n = createI18n;



createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(i18n)
  .use(store)
  .use(router)
  .mount('#app');

