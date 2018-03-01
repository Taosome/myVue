import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cart from "@/components/Cart"
import Quan from "@/components/Quan"
import Message from "@/components/Message"
import Mine from "@/components/Mine"
import Register from "@/components/Register"
import Login from "@/components/Login"
import Detail from "@/components/Detail"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/cart',
    	name:'Cart',
    	component:Cart
    },
    {
    	path:'/quan',
    	name:'Quan',
    	component:Quan
    },
    {
    	path:'/message',
    	name:'Message',
    	component:Message
    },
    {
    	path:'/mine',
    	name:'Mine',
    	component:Mine
    },
    {
    	path:'/register',
    	name:'Register',
    	component:Register
    },
    {
    	path:'/login',
    	name:'Login',
    	component:Login
    },
    {
    	path:'/detail/:id',
    	name:'Detail',
    	component:Detail
    }
  ]
})
