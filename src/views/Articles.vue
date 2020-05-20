<template>
    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <div v-for="blog in blogs" class="single-blog"  v-bind:key="blog.id">
            <h2>{{ blog.title }}</h2>
            <article>{{ blog.description }}</article>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            blogs: []
        }
    },
    methods: {
    },
    created() {
        this.$http.get('https://afternoon-waters-37189.herokuapp.com/api/articles.json').then(function(data){
            return data.json()
        }).then(function(data){
            var blogsArray = [];
            for (let key in data){
                data[key].id = key;
                blogsArray.push(data[key]);
            }
            this.blogs = blogsArray;
            //console.log(this.blogs);
        });
    },
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