<template>
    <div id="show-blogs">
        <h1>Artykuły Admin </h1>
        <v-btn
        
      right
      color="success"
      class="mr-4"
      @click="$router.push({ path: '/addArticle' })"
    >Dodaj Artykuł</v-btn>
    <div v-for="error in errors" v-bind:key="error.key">
        <h2>{{ error.text }}</h2>
        </div>
        <div v-for="article in articles" class="single-blog"  v-bind:key="article.id">
            <h2>{{ article.title }}</h2>
            <article>{{ article.description }}</article>
             <article>{{ article.status }}</article>
              <v-btn
        @click="handleDelete(article)"
      right
      color="error"
      class="mr-4"
      
    >Usuń</v-btn>
     <v-btn
        
      right
      color="primary"
      class="mr-4"
     @click="handleChangeStatus(article, this.onError)"
    >Zmień Status</v-btn>
        </div>
    </div>
</template>

<script>
import {actions} from './actions'
export default {
    data () {
        return {
            articles: []
        }
    },
    methods: {
         handleDelete:function(article){
                 console.log(article)
                 actions.deleteArticle(article.id)
               console.log(article)
               
            },
            handleChangeStatus:function(article){
                actions.changeStatus(article.id)
            },
            onError: function(errors) {
      this.errors = this.errors.concat(errors);
    },
    },
   
created() {
        this.$http.get('https://afternoon-waters-37189.herokuapp.com/api/admin/articles',
        {
            headers: {
                 'Authorization': "Bearer " + this.$store.state.token
            }
        }).then(function(data){
            console.log(data)
            this.articles = data.body;
            console.log(this.blogs)
        });
    
      
       
      //});
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