<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span>Scruter</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!this.$store.state.token" flat color="primary" @click="$router.push({ path: '/login' })">
        <span>Zaloguj się</span>
      </v-btn>

      <v-btn v-if="!this.$store.state.token" flat color="primary" class="ml-8" @click="$router.push({ path: '/register' })">
        <span>Zarejestruj się</span>
      </v-btn>

      <v-toolbar-title class="text-uppercase grey--text" v-if="this.$store.state.token">
        <span>{{this.$store.state.user.email}}</span>
      </v-toolbar-title>

      <v-btn v-if="this.$store.state.token" flat color="primary" @click="logout">
        <span>Wyloguj się</span>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute temporary class="blue">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Menu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="link in links.filter(f => {
            let store = this.$store            
            if((!store.state.user || store.state.user.role == 'CUSTOMER') && f.admin)
              return false
            return true
          })" :key="link.text" :to="link.route">
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { actions } from "./Login/actions";

export default {
  data() {
    return {
      drawer: false,
      links: [
        { text: "Newsy", route: "/", admin: false },
        
        { text: "Seanse", route: "/seances", admin: false },
        { text: "Filmy", route: "/movies", admin: false },
        { text: "Użytkownicy", route: "/users", admin: true },
        { text: "Dodaj Artykuł", route: "/addArticle", admin: true },
         { text: "Admin Artykuły", route: "/adminArticles", admin: false },
      ],
      
    };
  },
  methods: {
    
    
    logout: function() {
      actions.logout();
     
    }
  }
};
</script>

<style>
</style>