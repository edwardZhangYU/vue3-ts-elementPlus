import { createApp } from 'vue'
import { setupStore } from '@/stores'
import { setupRouter } from '@/router'
import 'virtual:windi.css'
import './styles/style.scss'
import 'nprogress/nprogress.css'
import App from './App.vue'
const app = createApp(App)

setupStore(app)
setupRouter(app)

app.mount('#app')
