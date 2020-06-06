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
     <v-btn  flat color="grey" class="ml-8" @click="handlePostArticle">
        <span>Dodaj Artykuł</span>
      </v-btn>
<div v-for="error in errors" v-bind:key="error.key">
        <h2>{{ error.text }}</h2>
      </div>
      </div>
</template>

<script>
import $ from "jquery";
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
       var criteria = {
        title: this.article.title,
        description: this.article.description,
        accessToken: this.$store.state.token
      };
      var request = $.ajax({
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " +  this.$store.state.token
        },
        url: "https://afternoon-waters-37189.herokuapp.com/api/admin/articles",
        type: "POST",
        contentType: "application/json; charset=utf-8",

        data: JSON.stringify(criteria)
      });
      console.log(criteria)
      request
        .done(response => {
          console.log(response);
        })
        .fail(response => {
          console.log(response);
          if (
            response !== null &&
            response.responseJSON !== undefined &&
            response.responseJSON.error != null
          ) {
            let errors = response.responseJSON.error.map((e, i) => {
              return { text: e, key: i };
            });
            
            this.errors = this.errors.concat(errors);
            console.log(this.error);
          }
        });
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