import Home from './pages/HomePage.vue'
import FButtonPage from './pages/FButtonPage.vue'
import FTextFieldPage from './pages/FTextFieldPage.vue'
import FStepperPage from './pages/FStepperPage.vue'
import FCardPageVue from './pages/FCardPage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/button-page', component: FButtonPage },
  { path: '/textfield-page', component: FTextFieldPage },
  { path: '/stepper-page', component: FStepperPage },
  { path: '/card-page', component: FCardPageVue },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})