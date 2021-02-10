import { createRouter, createWebHistory } from 'vue-router'
import ImageList from '../components/ImageList'
import SelectedImage from '../components/SelectedImage'
import PageNotFound from '../components/PageNotFound'
import RandomImage from '../components/RandomImage'


const routes = [
 {
   path:'/',
   name:"ImageList",
   component: ImageList,
  
 },
 {
  path:'/select/:id',
  name:"SelectedImage",
  
  props:true,
  component: () => import(/* webpackChunkName: "selected image" */ '../components/SelectedImage.vue')
},
 
 {
  path:'/random',
  name:"RandomImage",
  component:RandomImage
 },
 {
   path:'/:catchAll(.*)',
   name:"NotFound",
   component:PageNotFound
 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
