<template>
    <div id="show-blogs">
        <h1>Sale</h1>
        <div v-for="hall in halls" class="single-blog"  v-bind:key="hall.id">
            <h2> Nazwa: {{ hall.name }}</h2>
            <article>liczba miejsc: {{ hall.countOfSeats }}</article>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            halls: []
        }
    },
    methods: {
    },
    created() {
        this.$http.get('https://afternoon-waters-37189.herokuapp.com/api/halls').then(function(data){
            console.log(data)
            this.halls = data.body;
            
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