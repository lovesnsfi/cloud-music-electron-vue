import Vue from 'vue'
import Router from 'vue-router';
import index from "@/pages/index";
import findMusic from "@/pages/findMusic";
import playList from "@/pages/playList";
import tuijian from "@/pages/tuijian";

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
                    component:findMusic,
                    children:[
                        {
                            path:"playList",
                            name:"playList",
                            component:playList
                        },{
                            path:"tuijian",
                            name:"tuijian",
                            component:tuijian
                        }   
                    ]
                }
                
            ]
        },
        {
            path: '/',
            redirect: {name:"findMusic"}
        }
    ]
})