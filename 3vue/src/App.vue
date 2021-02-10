<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
   
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link"  ><router-link class="route" to="/">Images</router-link></a>
      </li>
       <li class="nav-item active">
        <a class="nav-link"  ><router-link class="route" to="/random">Random Image</router-link></a>
      </li>
     
      
      
     <li class="heading">
     <a class="navbar-brand heading" ><b><h3><i>Image Gallery</i></h3></b></a>
     </li>
    </ul>
    
  </div>
</nav>
  <router-view/>

  <footer class="bg-dark display">
    <h6>@images:https://picsum.photos/</h6>
  </footer>
</template>

<style>

 #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
 
}

.route{

font-weight: bold;
color:#d9d9d9;

}

.heading{
 
 position: absolute;
 left: 45%;
 
}

.display{
  text-align: center;
  color: white;
}
.nav-link :hover{
  color: white;
  text-decoration: none;
}
h6{
  padding: 10px;
}
footer{
 width: 100%;
 height: 50px;
  position: fixed;
  bottom: 0;
  background-color: black;
  padding-top:0px
}
</style>
