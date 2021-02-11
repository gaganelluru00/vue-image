<template>
     
<div>
     <div class="page-buttons ">
       <b-button id="prev"  :disabled="pageNumber<=1"   variant="primary" @click="prev"><b>Previous</b></b-button>
     
       <span class="display"><b>Number Of Images </b><input type="number"   v-model.number="limit" /></span>
        <b-button  variant="primary" id="next"  @click="next"><b>Next</b></b-button>
         
     </div>

  <div v-if="errorData==null" class="row">
  <div class="gallery col-md-3" v-for="image in images" :key="image.id">
    
 <router-link :to="{name:'SelectedImage',params:{id:image.id}}"><img :src=imageSize(image) class="img-thumbnail"/></router-link>
 <br>
 <router-link class="author" :to="{name:'SelectedImage',params:{id:image.id}}"><b>{{image.author}}</b></router-link>
 
 
  </div>
  </div>
  <div class="display" v-else>
    <h1>{{errorData.message}}</h1>
  </div>
  </div>
</template>
<script>


import {CHANGE_NUMBER_OF_IMAGES, GET_IMAGES_DATA, NEXT_PAGE_URL, PREVIOUS_PAGE_URL} from '../store/constants'
export default {
name:"ImageList",
data(){
return{
  limit:30
}
},
methods:{
  next(){
  this.$store.commit(NEXT_PAGE_URL)
 },
 prev(){
  this.$store.commit(PREVIOUS_PAGE_URL)
 },
 imageSize(image){ 
  return image.download_url.substring(0,24)+'/'+image.id+'/300'
  },
  
},
computed:{
  pageNumber(){return this.$store.state.pageNumber},
  pageUrl(){
    return this.$store.state.pageUrl},
  images(){return this.$store.state.images},
  errorData(){return this.$store.state.error},
  
},



mounted(){
   this.$store.dispatch(GET_IMAGES_DATA,this.pageUrl)
},

watch:{
  pageUrl(){
   
    this.$store.dispatch(GET_IMAGES_DATA,this.pageUrl)
  },
  limit(){
    this.$store.commit(CHANGE_NUMBER_OF_IMAGES,this.limit)
  }
}
 

}

</script>

<style scoped>
.gallery{
  
  
  padding-left: 80px;
  margin-bottom: 50px;
  

}
.page-buttons{
  padding: 20px;
  padding-top: 100px;

  
  
 
}
.display{
 
  color: white;
  position: absolute;
  left:40%;

}
.author{
  color: white;
  font-weight: bold;
  text-decoration: none;
  
}
#next{
  right: 10px;
  top:70px;
  float: right;
  width: 100px;
 
}
.limit{
  width: 100px;
  
}
#prev{
 width: 100px;
}
.imageLimit{
  position: absolute;
  left: 45%;
  border-radius: 10px;
}
</style>
