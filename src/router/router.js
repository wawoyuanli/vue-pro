import Vue from 'vue'
import Router from 'vue-router'
//引入组件
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import HomeSon from '../components/son-components/home-son'
import Prize from '../components/prize/prize'
Vue.use(Router)
export default new Router({
    mode:'history',
    routes:[
        {path:'/home',name:'Home',component:Home},
        {path:'/about',name:'About',component:About},
        {path:'/homeSon',name:'HomeSon',component:HomeSon},
        {path:'/prize',name:'Prize',component:Prize}
    ]
})