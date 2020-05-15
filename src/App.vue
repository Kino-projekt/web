<template>
  <div>
    <app-header></app-header>
    <home-page></home-page>
      <app-footer></app-footer>
   
    </div>
</template>

<script>
import Header from './components/Header.vue';
import HomePage from './components/HomePage.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'home-page': HomePage,
  },
  data(){
    return{

    }
  }
}
</script>

<style>


body{
  background-color: black;
  width: 60%;
    margin: 0 auto;
    
}
</style>
