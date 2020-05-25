<template>
    <div id="add-blog" >
        <h2>Dodaj Artykuł</h2>
      </div>
</template>

<script>
// Imports
export default {
    data () {
        return {
            article: {
                title: '',
                description: '',
                
            },
           
            submitted: false
        }
    },
    methods: {
        post: function(){
            this.$http.post('https://nn-vue-playlist.firebaseio.com/posts.json', this.blog).then(function(data){
                console.log(data);
                this.submitted = true;
            });
        }
    }
}
</script>

<style scoped>

</style>