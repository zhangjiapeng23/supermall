import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

Vue.use(Router)

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/shopcart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    }
]

const router = new Router({
    routes,
    mode: 'history'
})

export default router
