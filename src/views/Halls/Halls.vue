<template>
    <div id="show-blogs">
        <h1>Sale</h1>
         <v-btn
         v-if="isAdmin()"
      right
      color="success"
      class="mr-4"
      @click="$router.push({ path: '/addHall' })"
    >Dodaj Sale</v-btn>
    <div v-for="error in errors" v-bind:key="error.key">
        <h2>{{ error.text }}</h2>
      </div>
        <div v-for="hall in halls" class="single-blog"  v-bind:key="hall.id">
            <h2> Nazwa: {{ hall.name }}</h2>
            <article>liczba miejsc: {{ hall.countOfSeats }}</article>
            <v-btn color="error" class="mr-4" @click="handleDelete(hall.id)" v-if="isAdmin()">Usuń</v-btn>
        </div>
    </div>
</template>

<script>
import store from '../../store'
import { actions } from "./actions";
export default {
    data () {
        return {
            halls: [],
            errors: []
        }
    },
    methods: {
         handleDelete: function(hallId) {
      actions.deleteHall(hallId, this.onError);
    },
    onError: function(errors) {
      this.errors = this.errors.concat(errors);
    },
     isAdmin: function(){
        
                return  store.state.user!=null &&  store.state.user.role =="ADMIN"
    },
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