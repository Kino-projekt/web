<template>
    <div id="show-blogs">
        <h1>Użytkownicy</h1>
        <div v-for="user in users" class="single-blog"  v-bind:key="user.id">
            
            <h2>{{ user.email }}</h2>
           
     
            <article>{{ user.role }}</article>
            <article>{{ user.id }}</article>
            
      <v-btn
      
      color="error"
      class="mr-4"
     @click="handleBan(user)"
    >
     Zbanuj
    </v-btn>
     <v-btn
      right
      color="primary"
      class="mr-4"
      @click="handleChangeStatus(user)"
    >
      Zmień Status
    </v-btn>
        </div>
    </div>
</template>

<script>
import {actions} from './actions'
export default {
    data () {
        return {
            user:null,
            users: [],
            handleBan:function(user){
                 actions.ban(user.id)
               
               
            },
            handleChangeStatus:function(user){
                actions.changeStatus(user.id)
            }
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