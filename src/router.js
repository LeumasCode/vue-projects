import {createRouter, createWebHistory} from 'vue-router'
import DcHeros from './pages/DcHeros.vue'
import Calendar from './pages/Calendar.vue'
import Home from "./pages/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/dc-heros", component: DcHeros },
  { path: "/calendar", component: Calendar },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router 