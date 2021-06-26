import Vue from 'vue'
import Router from 'vue-router'

// const login = () => '../views/Login.vue'
import login from '../views/Login.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {path:'/',redirect: '/login'},
        {path:'/login',component: login}
    ]
})