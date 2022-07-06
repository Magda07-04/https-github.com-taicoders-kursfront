import { createApp } from 'vue';
// importuj style globalnie
import './style.css';
// pobierz komponent app
import App from './App.vue';
// zamontuj komponent App na identyfikatorze #app (w index.html)
createApp(App).mount('#app');
