import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '../routes';

createApp(App).use().mount('#app')

// Khoi tao ung dung
const app = createApp(App);

// Su dung cac tien ich ben ngoai
app.use(router);

// Gan giao dien vao #app
app.mount("#app");