<template>
  <div id="app">
  
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
    <b-navbar-brand center><b><i>Image Gallery</i></b></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item ><router-link class="route" to="/">Images</router-link></b-nav-item>
        <b-nav-item ><router-link class="route" to="/random">Random Image</router-link></b-nav-item>
      </b-navbar-nav>
  </b-collapse>
</b-navbar>


    <!------->
   
  <keep-alive include="ImageList">
  <router-view/>
  </keep-alive>

  

  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="bottom">
    <b-navbar-item class="display" center><b><i>@images:https://picsum.photos/</i></b></b-navbar-item>
 </b-navbar>
 
  </div>
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
