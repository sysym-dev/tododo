import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { useEmitter } from './plugins/emitter';
import { useClickOutisde } from './plugins/click-outside';
import { useStore } from './plugins/store';
import { useRouter } from './plugins/router';
import { routes } from './routes';

const app = createApp(App);

useEmitter(app);
useClickOutisde(app);
useRouter(app, routes);
useStore(app);

app.mount('#app');
