<template>
  <header> 
<h1> {{title}} </h1>
 </header>
</template>

<script>

export default {
    data(){
        return{
            title: 'Scruter'
        }
    }
 
}
</script>

<style scoped>
header{
    background: #A9A9A9 ;
    padding: 10px;
}
h1{
    color: #6495ED;
    text-align: center;
}
</style>
