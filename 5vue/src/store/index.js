import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images:[],
    error:null,
    pageNumber:1,
    image:null,
    paginationLink:null,
    pageUrl:'https://picsum.photos/v2/list?page=1&limit=30',
    
    
  },
  mutations:mutations,
  actions:actions,
 
})
