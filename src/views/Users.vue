<template>
    <div id="show-blogs">
        <h1>Użytkownicy</h1>
        <div v-for="user in users" class="single-blog"  v-bind:key="user.id">
            <h2>{{ user.email }}</h2>
            <article>{{ user.role }}</article>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            users: []
        }
    },
    methods: {
    },
    created() {
        this.$http.get('https://afternoon-waters-37189.herokuapp.com/api/users').then(function(data){
            console.log(data)
            this.users = data.body;
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