<template>
    <div id="show-blogs">
        <h1>Artykuły</h1>
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
        this.$http.get('https://afternoon-waters-37189.herokuapp.com/api/articles').then(function(data){
            console.log(data)
            this.blogs = data.body;
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