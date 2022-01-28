<template>
  <div id="app">

<!-- or in bootstrap vue is written this way <b-container> -->
    <div id="nav" class="container">
      <!-- I added this id because it has styling already in css and I copied it from under before commenting it -->
  <b-navbar toggleable="lg" type="dark">
    <!-- I removed the info as it was causing the background and added class logo to change the height -->
    <b-navbar-brand href="#"><img src="@/assets/imgs/logo.png" class="logo"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ms-auto">
        <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
        <b-nav-item><router-link to="/contact">Contactus</router-link></b-nav-item>
        <b-nav-item><router-link to="/service">Service</router-link></b-nav-item>
      </b-navbar-nav>
      <!-- I removed some styling as well -->

      <!-- Right aligned nav items -->
      <!-- <b-navbar-nav class="ml-auto">
      </b-navbar-nav> -->
      <!-- this part is  not usable after removing the dropdown -->
    </b-collapse>
  </b-navbar>
</div>




    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> | -->
      <!-- | is the or sign  -->
      <!-- <router-link to="/contact">Contactus</router-link> -->
      <!-- router-link is responsible for the single page -->
    <!-- </div> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: var(--main-color); */
  /* this means any of the pages listed above will be changed to the following color */
}
/* so I changed the color of the writing */

.logo{
  height: 8vh;
}

/* #nav {
  padding: 30px;
} */



#nav a {
  font-weight: bold;
  color: #2c3e50;
  /* color: var(--main-color); */
}

#nav a.router-link-exact-active {
  color: #42b983;
  /* color: var(--main-color); */
  /* I had to change the color separately because it was separately indicated and the program moves from up to down */
}
</style>
