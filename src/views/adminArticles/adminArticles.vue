<template>
    <div id="show-blogs">
        <h1>Artykuły Admin </h1>
        <div v-for="blog in blogs" class="single-blog"  v-bind:key="blog.id">
            <h2>{{ blog.title }}</h2>
            <article>{{ blog.description }}</article>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
export default {
    data () {
        return {
            blogs: []
        }
    },
    methods: {
    },
    created() {
       $.ajax({
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + this.$store.state.token
        },
        url: "https://afternoon-waters-37189.herokuapp.com/api/admin/articles",
        type: "GET",
         dataType: 'json',
        contentType: "application/json; charset=utf-8",
        
        success: function(data){
   
    this.blogs = data;
    console.log(this.blogs)
   
}
    
      
       
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