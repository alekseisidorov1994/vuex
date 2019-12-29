import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/wall',
            component: ()=>import('./views/Wall.vue')
        },
        {
            path: '/post/:id/edit',
            component: ()=>import('./views/Editor.vue')
        },
        {
            path: '*',
            redirect: '/wall'
        }
    ]
})