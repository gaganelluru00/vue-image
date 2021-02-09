import { GET_IMAGES_DATA,GET_ERROR_DATA,INCREMENT_PAGE_NUMBER, DECREMENT_PAGE_NUMBER, GET_IMAGE_DATA_BY_ID,CHANGE_PAGE_URL, DELETE_IMAGE_DATA } from './constants'

export default  {
    [GET_IMAGES_DATA]:(state,data)=>{
      console.log(data)
      state.images=data;
      
    },
    
    [GET_ERROR_DATA]:(state,data)=>{
     state.error=data;
     console.log(state.error)
   },

   [INCREMENT_PAGE_NUMBER]:(state)=>{
    state.pageNumber+=1
    console.log(state.pageNumber)
  },

   [DECREMENT_PAGE_NUMBER]:(state)=>{
   state.pageNumber-=1
  },

  [GET_IMAGE_DATA_BY_ID]:(state,data)=>{
    state.image=data
    console.log(state.image)
   
  },

  [CHANGE_PAGE_URL]:(state,pageNumber)=>{
    
    state.pageUrl='https://picsum.photos/v2/list?page='+pageNumber+'&limit=30'
    console.log(state.pageUrl)
   
  },
  
  [DELETE_IMAGE_DATA]:(state)=>{
    state.image=null
  }
}
