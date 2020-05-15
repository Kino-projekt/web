<template>
  <div>
    <app-header></app-header>
    </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    'app-header': Header,
  },
  data(){
    return{

    }
  }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
