<template>
  <nav>

    <v-toolbar flat app>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
       
        <span>Scruter</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
        <span>Zaloguj się</span>
      
      </v-btn>
      
      <v-btn flat color="grey" class="ml-8" @click="registerHandle">
        <span>Zarejestruj się</span>
      
      </v-btn>
    </v-toolbar>

     <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="blue"
    >
      <v-list-item>
       

        <v-list-item-content>
          <v-list-item-title>Menu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list >

        <v-list-item
          v-for="link in links"
          :key="link.text"
          :to="link.route"
        >
         

          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { text: 'Strona główna', route: '/' },
        {  text: 'Artykuły', route: '/articles' },
        {  text: 'Seanse', route: '/seances' },
        {  text: 'Filmy', route: '/movies' },
        {  text: 'Dodaj Artykuł', route: '/addArticle' },
        
      ],
     register:  {  text: 'Register', route: '/register' },
     
    }
  
  },
    methods:{
     registerHandle:function(){
   
window.location.href="/register"
      }
    }
    
}
</script>

<style>
</style>