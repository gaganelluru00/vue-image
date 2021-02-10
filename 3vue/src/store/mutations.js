import { GET_IMAGES_DATA,GET_ERROR_DATA, GET_IMAGE_DATA_BY_ID, DELETE_IMAGE_DATA, NEXT_PAGE_URL,PREVIOUS_PAGE_URL } from './constants'

export default  {
    [GET_IMAGES_DATA]:(state,response)=>{
      state.paginationLink=response.headers.link
      state.images=response.data;
      console.log(state.images)
     },
    
    

  [GET_IMAGE_DATA_BY_ID]:(state,data)=>{
    state.image=data
    console.log(state.image)
   
  },
  [GET_IMAGE_DATA_BY_ID](state,data){
    state.image=data
    console.log(state.image)
   
  },
  [NEXT_PAGE_URL]:(state)=>{
    var parse = require('parse-link-header');
    var parsed=parse(state.paginationLink);
    state.pageUrl=parsed.next.url
    state.pageNumber=parsed.next.page
    console.log(state.pageUrl)
   
    
  }
  ,
  [PREVIOUS_PAGE_URL]:(state)=>{
    var parse = require('parse-link-header');
    var parsed=parse(state.paginationLink);
    state.pageUrl=parsed.prev.url
    state.pageNumber=parsed.prev.page
    console.log(state.pageUrl)
}
,
 
  [DELETE_IMAGE_DATA]:(state)=>{
    state.image=null
  }
}
