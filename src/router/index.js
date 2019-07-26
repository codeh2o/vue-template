import Vue from 'vue'
import Router from 'vue-router'
import City from '@/pages/City'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [ {
    path: '/city',
    name: 'City',
    component: City
  },{
    path: '/',
    name: 'Home',
    component: HelloWorld
  }]
})