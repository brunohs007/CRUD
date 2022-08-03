import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserPlus, faUserEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
//import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserPlus, faUserEdit, faTrash);

import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/nprogress/nprogress.css'

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");

createApp(App).use(store).use(router).mount('#app')
