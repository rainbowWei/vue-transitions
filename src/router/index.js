
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)
/**
 * 配置路由的懒加载功能
 */
const HelloWorld = resolve =>{
    import('@/components/HelloWorld').then(module=>{
        resolve(module);
    })
};
const Home = resolve =>{
    import('@/components/Home').then(module=>{
        resolve(module);
    })
};
const ClassCard = resolve=>{
    import('@/components/ClassCard').then(module=>{
        resolve(module);
    })
};
const Setting = resolve =>{
    import('@/components/Setting').then(module=>{
        resolve(module);
    })
};
export default new Router({
    routes: [
        {
            path: '/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/class_card',
            component:ClassCard,
            children:[
                {
                    path:':id',
                    component:HelloWorld
                }
            ]
        },
        {
            path:'/setting',
            component:Setting
        }
    ]
})
