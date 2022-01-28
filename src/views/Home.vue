<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Slider/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Slider from "@/components/HomeComp.vue"
export default{
  name: 'Home',
  components: {
    // HelloWorld
    Slider
  }
}
</script>


// I am just emptying the view by removing the called components