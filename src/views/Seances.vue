<template>
    <div id="show-blogs">
        <h1>Seanse</h1>
        <div v-for="seance in seances" class="single-blog"  v-bind:key="seance.id">
            <h2>{{ seance.id }}</h2>
            
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            seances: []
        }
    },
    methods: {
    },
    created() {
        this.$http.get('https://afternoon-waters-37189.herokuapp.com/api/seances').then(function(data){
          
            this.seances = data.body;
        });
    }
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>