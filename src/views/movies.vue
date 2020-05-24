<template>
    <div id="show-blogs">
        <h1>Filmy</h1>
        <div v-for="movie in movies" class="single-blog"  v-bind:key="movie.id">
            <h2> Tytuł filmu: {{ movie.title }}</h2>
            <article> Opis filmu: {{ movie.description }}</article>
            <p> Reżyser: {{ movie.director }}</p>
              <p> Stworzony: {{ movie.createdAt }}</p>
               
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            movies: []
        }
    },
    methods: {
    },
    created() {
        this.$http.get('https://afternoon-waters-37189.herokuapp.com/api/movies').then(function(data){
            console.log(data)
            this.movies = data.body;
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