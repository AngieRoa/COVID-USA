<template>
  <div class="Navbar">
  
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Coronavirus en Estados Unidos</b-navbar-brand>

     
        <img  class="d-inline-block align-top punto" src="../components/Map/Bandera.png" />

  </b-navbar>
</div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .bg-info{
   background-color: #ffffff !important;
 }

 .navbar-dark .navbar-brand {
    color: rgb(1, 30, 83) !important;
    font-weight: 900;
    font-size: 26px;
}

.punto{
  width: 80px;
  transition: transform .2s;
  position: relative;
  display: flex;
  justify-content: flex-end;
}

.navbar{
  justify-content: space-between  !important;
}

</style>
