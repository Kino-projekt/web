<template>
  <div id="show-blogs">
    <h1>Filmy</h1>
    <v-btn
      right
      color="success"
      class="mr-4"
      @click="$router.push({ path: '/addMovie' })"
    >Dodaj Film</v-btn>
     <div v-for="error in errors" v-bind:key="error.key">
        <h2>{{ error.text }}</h2>
      </div>
    <div v-for="movie in movies" class="single-blog" v-bind:key="movie.id">
      <h2>Tytuł filmu: {{ movie.title }}</h2>
      <article>Opis filmu: {{ movie.description }}</article>
      <p>Reżyser: {{ movie.director }}</p>
      <p>Stworzony: {{ movie.createdAt }}</p>

      <v-btn color="error" class="mr-4" @click="handleDelete(movie.id)">Usuń</v-btn>
     
    </div>
  </div>
</template>

<script>
import { actions } from "./actions";
export default {
  data() {
    return {
      movies: [],
      errors: []
    };
  },
  methods: {
    handleDelete: function(movieId) {
      actions.deleteMovie(movieId, this.onError);
    },
    onError: function(errors) {
      this.errors = this.errors.concat(errors);
    }
  },
  created() {
    this.$http
      .get("https://afternoon-waters-37189.herokuapp.com/api/movies")
      .then(function(data) {
        this.movies = data.body;
      });
  }
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>