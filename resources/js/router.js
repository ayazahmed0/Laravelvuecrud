import Vue from 'vue';
import VueRouter from 'vue-router';
import MainComponent from './Components/SidebarComponent';
import HomeComponent from './Components/HomeComponent';
import SidebarComponent from './Components/SidebarComponent';
import AdduserComponent from './Components/AdduserComponent';
Vue.use(VueRouter)
const routes = [
    {
        path: '/Main',
        component: MainComponent,
        name: 'Main',
        
    },
    {
        path: '/Sidebar',
        component: SidebarComponent,
        name: 'Sidebar',
        children: [
            {
                path: 'Home',
                component: HomeComponent,
                name: 'Home',
            },
            {
                path: 'Adduser',
                component: AdduserComponent,
                name: 'Adduser',
            },
        ],
        
    },
 
]

export default new VueRouter({routes})