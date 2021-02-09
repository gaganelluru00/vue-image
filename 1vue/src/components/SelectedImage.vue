<template>
    <h1>Selected Image</h1>
    
    <div v-if="imageData!=null && errorData==null" class="display">
    
    <br>
   <img :src=imageSize(imageData) class="img-thumbnail"/>
   <br>
   <h1>Author: <b>{{imageData.author}}</b></h1>
    <h1>Image Id: <b>{{imageData.id}}</b></h1>
   <button @click="download" class="btn btn-primary"><b>Download Image</b></button>
  </div>


   <div class="display" v-else-if="errorData!=null">
    <h1>{{errorData.message}}</h1>
    </div>


    <div class="display" v-else>
     <span class="spinner-border" role="status">
     <span class="sr-only">Loading...</span>
     
  </span>
  <h1>Loading</h1>
     
   </div>
   
  
     
</template>
<script>

import {useStore} from 'vuex'
import {ref,computed,onUnmounted} from 'vue'
import {  DELETE_IMAGE_DATA, DOWNLOAD_IMAGE, GET_IMAGE_DATA_BY_ID } from '../store/constants';
export default {
name:"SelectedImage",
props:['id'],
setup(props){
    const store=useStore();
    const imageId=props.id;
    const imageDataUrl=ref('https://picsum.photos/id/'+imageId+'/info')
    

    store.dispatch(GET_IMAGE_DATA_BY_ID,imageDataUrl)

    const imageData=computed(()=>store.state.image)
    const errorData=computed(()=>store.state.error)
    

  
    const download=()=>{
        store.dispatch(DOWNLOAD_IMAGE,imageData.value)
        }
   
    
    const imageSize=(image)=>{ 

    return image.download_url.substring(0,24)+'/'+image.id+'/500'
    }
   
    onUnmounted(()=>{
       store.commit(DELETE_IMAGE_DATA)
       })
   

console.log(errorData)
    


return { imageData,download,imageSize,errorData}
    }
}
</script>
<style scoped>


.display{
    text-align: center;
    color: white;
}
</style>