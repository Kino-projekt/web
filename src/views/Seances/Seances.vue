<template>
  <div id="show-blogs">
    <h1>Seanse</h1>
    <v-col cols="12" sm="4" v-if="isAdmin()">
      Dodaj Seans
      
      <v-overflow-btn
      
        class="my-2"
        :items="
          halls.map((m) => {
            return { text: m.name, value: m, click: this.setHall };
          })
        "
        label="Wybierz sale"
        target="#dropdown-example"
      ></v-overflow-btn>

      <v-overflow-btn
       
        class="my-2"
        :items="movies"
        label="Wybierz film"
        target="#dropdown-example"
        item-value="name"
      ></v-overflow-btn>
      <v-btn
       
       right color="success" class="mr-4">Dodaj Seans</v-btn>
    </v-col>

    <div v-for="seance in seances" class="single-blog" v-bind:key="seance.id">
      <h2>{{ seance.id }}</h2>
      <article>Sala: {{ seance.hall.name }}</article>
      <article>Film: {{ seance.movie.title }}</article>
    </div>
  </div>
</template>

<script>
import store from "../../store";
export default {
  data() {
    return {
      seances: [],
      halls: [],
      movies: [],
    };
  },
  methods: {
    isAdmin: function() {
      return store.state.user != null && store.state.user.role == "ADMIN";
    },
    setHall: function(hall, iks) {
      console.log(hall);
      console.log(iks);
    },
  },
  created() {
    this.$http
      .get("https://afternoon-waters-37189.herokuapp.com/api/seances")
      .then(function(data) {
        console.log(data.body);
        this.seances = data.body;
      });

    this.$http
      .get("https://afternoon-waters-37189.herokuapp.com/api/halls")
      .then(function(data) {
        console.log(data);
        this.halls = data.body;
      });

    this.$http
      .get("https://afternoon-waters-37189.herokuapp.com/api/movies")
      .then(function(data) {
        this.movies = data.body;
      });
  },
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
