<template>
  <div id="app">
    <Navbar />
   
      
         <Menu class="busqueda" />
       <GoogleMaps/>
    
  </div>
</template>

<script>
import GoogleMaps from "./components/GoogleMaps";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
export default {
  name: 'App',
  components: {
    GoogleMaps,
    Navbar,
    Menu
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.col-3, .col-9{
  padding-left: 0% !important;
  padding-right: 0% !important;
}

.busqueda{
  position: absolute;
  z-index: 100;
}
</style>
