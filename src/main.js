import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import logo from './components/Navigation/logo.vue'
import logos from './components/Navigation/logos.vue'
import Header from './components/Header.vue'
import PrimaryBtn from './components/Primary.vue'
import semipayment from './components/waecpayment.vue'
import Footer from './components/Navigation/footer.vue'
import inpute from "./components/Input.vue";

import './assets/tailwind.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('logo', logo)
app.component("logos", logos);
app.component('Header', Header)
app.component('PrimaryBtn', PrimaryBtn)
app.mount('#app')
app.component("semipayment", semipayment);
app.component("Footer", Footer);
app.component("inpute", inpute);
