<template>
    <div id="add-blog" >
        
        <h2>Dodaj Film</h2>


         <v-textarea
          filled
          auto-grow
          label="Tytuł"
          rows="2"
          row-height="20"
          v-model="movie.title"
        ></v-textarea>

         <v-textarea
          filled
          auto-grow
          label="Reżyser"
          rows="2"
          row-height="20"
          v-model="movie.director"
        ></v-textarea>
         


        <v-textarea
      background-color="grey lighten-2"
      color="cyan"
      label="Opis filmu"
      rows="15"
      v-model="movie.description"
    ></v-textarea>
     <v-btn  flat color="success" class="ml-8" @click="handleAddMovie">
        <span>Dodaj Film</span>
      </v-btn>
       <v-btn  flat color="error" class="ml-8" @click="$router.push({ path: '/Movies' })">
        <span>Cofnij</span>
      </v-btn>
<div v-for="error in errors" v-bind:key="error.key">
        <h2>{{ error.text }}</h2>
      </div>
      </div>
</template>

<script>
import { actions } from "./actions";
export default {
    
    data () {
        return {
            errors: [],
            movie: {
                title: '',
                description: '',
                director:'',
                
            },
           
            submitted: false
        }
    },
    methods: {
        handleAddMovie: function() {
      actions.addMovie(this.movie.title, this.movie.description, this.movie.director);
      
    },
        }
    }

</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
</style>