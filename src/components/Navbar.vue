<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span>Scruter</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!this.$store.state.token" flat color="grey" @click="loginHandle">
        <span>Zaloguj się</span>
      </v-btn>

      <v-btn v-if="!this.$store.state.token" flat color="grey" class="ml-8" @click="registerHandle">
        <span>Zarejestruj się</span>
      </v-btn>

      <v-toolbar-title class="text-uppercase grey--text" v-if="this.$store.state.token">
        <span>{{this.$store.state.user.email}}</span>
      </v-toolbar-title>

      <v-btn v-if="this.$store.state.token" flat color="grey" @click="logout">
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
        { text: "Strona główna", route: "/", admin: false },
        { text: "Artykuły", route: "/articles", admin: false },
        { text: "Seanse", route: "/seances", admin: false },
        { text: "Filmy", route: "/movies", admin: false },
        { text: "Użytkownicy", route: "/users", admin: true },
        { text: "Dodaj Artykuł", route: "/addArticle", admin: true }
      ],
      
    };
  },
  methods: {
    registerHandle: function() {
      window.location.href = "/register";
    },
    loginHandle: function() {
      window.location.href = "/login";
    },
    logout: function() {
      actions.logout();
    }
  }
};
</script>

<style>
</style>