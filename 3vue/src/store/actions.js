import { GET_IMAGES_DATA,GET_ERROR_DATA, GET_IMAGE_DATA_BY_ID, DOWNLOAD_IMAGE} from './constants'
import axios from 'axios'
export default  {

    [GET_IMAGES_DATA]: async (context,url)=>{
    
     let data= await axios.get(url).then(response=>{
     
     context.commit(GET_IMAGES_DATA,response)
    }).catch(err=>{
     context.commit(GET_ERROR_DATA,err)
    
   })
  },

    [GET_IMAGE_DATA_BY_ID]:async (context,url)=>{
      let data=await axios.get(url).then(response=>{
        console.log(response.data)
       context.commit(GET_IMAGE_DATA_BY_ID,response.data)
       }).catch(err=>{
         console.log(err)
        context.commit(GET_ERROR_DATA,err)
      })
    },
    


    [DOWNLOAD_IMAGE]:async (context,image)=>{
      console.log(image.author)
      await axios({
        url:image.download_url,
        method:'GET',
        responseType:'blob'
      }).then((response)=>{
        var fileUrl=window.URL.createObjectURL(new Blob([response.data]))
        var fileLink=document.createElement('a')
        fileLink.href=fileUrl
        fileLink.setAttribute('download',image.author+'.jpg')
       document.body.appendChild(fileLink)
       fileLink.click()
      }).catch(err=>{
        context.commit(GET_ERROR_DATA,err)
      })
    }

  }