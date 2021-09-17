import { createApp } from 'vue'
import App from './App.vue'

import Title from "@/components/sections/Title";

createApp(App)
  .component('Title', Title)
  .mount('#app')
