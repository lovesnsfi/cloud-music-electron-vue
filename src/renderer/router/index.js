import Vue from 'vue'
import Router from 'vue-router';
import index from "@/pages/index";
import findMusic from "@/pages/findMusic";

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/index',
            name: 'index',
            component: index,
            children:[
                {
                    path:"findMusic",
                    name:"findMusic",
                    component:findMusic
                }
            ]
        },
        {
            path: '/',
            redirect: {name:"findMusic"}
        }
    ]
})