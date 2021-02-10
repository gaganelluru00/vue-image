<template>
<div class="display">
 <img :src=imageUrl class="img-thumbnail"/> 
</div>
</template>
<script>
import {ref} from 'vue'
export default {
    name:'RandomImage',
    setup(){
 
 const imageUrl=ref("https://picsum.photos/600?random=10")


return {imageUrl}
    }
}
</script>
<style scoped>

.display{
    text-align: center;
    padding: 100px;
}
</style>