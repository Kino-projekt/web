<template>
  <footer> 
<p> {{copyright}} </p>
 </footer>
</template>

<script>

export default {
    data(){
        return{
            copyright: 'Copyright 2020 Scruter'
        }
    }
 
}
</script>

<style scoped>
footer{
    background: #A9A9A9 ;
    padding: 6px;
}
p{
    color: #6495ED;
    text-align: center;
}
</style>
