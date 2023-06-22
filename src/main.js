import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router';

import { createApolloClient } from '@nhost/apollo'
import { DefaultApolloClient } from '@vue/apollo-composable'

import i18n from './i18n';
import PrimeVue from 'primevue/config'
import ConfirmationService from "primevue/confirmationservice";
import ToastService from 'primevue/toastservice';
import App from './App.vue'
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
import "@/assets/sass/main.scss"
import "primevue/resources/themes/lara-light-indigo/theme.css";
import { nhost } from './nhostConfig'
import { inicializarAxios } from "@/utils/inicializarAxios";
inicializarAxios();

const pinia = createPinia();

const app = createApp(App)

app.use(pinia);

const apolloClient = createApolloClient({ nhost })
export default apolloClient;

app
    .use(router)
    .use(PrimeVue)
    .use(nhost)
    .use(i18n)
    .use(ToastService)
    .use(ConfirmationService)
    .provide(DefaultApolloClient, apolloClient)
    .mount('#app')
