<template>
    <div id="add-blog" >
        
        <h2>Dodaj Komentarz</h2>


        
         


        <v-textarea
      background-color="grey lighten-2"
      color="cyan"
      label="Treść komentarza"
      rows="15"
      v-model="descriptionComment"
    ></v-textarea>
     <v-btn  flat color="success" class="ml-8" @click="handleAddComment">
        <span>Dodaj</span>
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
            
                descriptionComment: '',
                 
                
            
           
            submitted: false
        }
    },
    methods: {
        handleAddComment: function() {
            
      actions.addComment(this.descriptionComment,this.$route.query.movieId,this.onError);

      
    },
     onError: function(errors) {
      this.errors = this.errors.concat(errors);
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