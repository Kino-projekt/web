<template>
    <div id="add-blog" >
        
        <h2>Dodaj Artykuł</h2>


         <v-textarea
          filled
          auto-grow
          label="Tytuł"
          rows="2"
          row-height="20"
          v-model="article.title"
        ></v-textarea>
         


        <v-textarea
      background-color="grey lighten-2"
      color="cyan"
      label="Treść Artykułu"
      rows="15"
      v-model="article.description"
    ></v-textarea>
    <v-btn  flat color="success" class="ml-8" @click="handlePostArticle">
        <span>Dodaj</span>
      </v-btn>
       <v-btn  flat color="error" class="ml-8" @click="$router.push({ path: '/adminArticles' })">
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
            article: {
                title: '',
                description: '',
                
            },
           
            submitted: false
        }
    },
    methods: {
        handlePostArticle: function() {
       actions.addArticle(this.article.title, this.article.description);
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