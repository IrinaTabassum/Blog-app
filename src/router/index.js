import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import LoginPage from '../views/LoginView.vue'
import RegisterPage from '../views/RegisterView.vue'
import ForgrtPassword from '../views/ForgetPassword.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      title:'Home'
    },
  },
  {
    path: '/about',
    name: 'blog',
    component: BlogView,
    meta:{
      title:'Blog'
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta:{
      title:'Login'
    },  
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
    meta:{
      title:'Register'
    },  
  },
  {
    path: '/forgrt-password',
    name: 'forgetpassword',
    component: ForgrtPassword,
    meta:{
      title:'ForgrtPassword'
    },  
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next)=>{
  document.title = `${to.meta.title} | proBlog`;
  next();
})

export default router;
