<template>
  <div id="show-blogs">
    <h1>Zaloguj</h1>
    <div>
      <label>E-mail</label>
      <input type="text" v-model="email" />
    </div>
    <div>
      <label>password</label>
      <input type="password" v-model="password" />
    </div>
    <div>
      <input type="button" value="Zaloguj" @click="handleLogin" />
      <input type="button" value="Wyslij artykul" @click="handlePostArticle" />
      <div v-for="error in errors" v-bind:key="error.key">
        <h2>{{ error.text }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { actions } from "./actions";
//const { JSDOM } = require( "jsdom" );
//const { window } = new JSDOM( "" );
//const $ = require( "jquery" )( window );
export default {
  data() {
    return {
      errors: [],
      email: "",
      password: "",
      token: ""
    };
  },
  methods: {
    handlePostArticle: function() {
      var criteria = {
        title: "test",
        description: "Testowy artykul",
        accessToken: this.token
      };
      var request = $.ajax({
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + this.token
        },
        url: "https://afternoon-waters-37189.herokuapp.com/api/admin/articles",
        type: "POST",
        contentType: "application/json; charset=utf-8",

        data: JSON.stringify(criteria)
      });
      request
        .done(response => {
          console.log(response);
        })
        .fail(response => {
          console.log(response);
          if (
            response !== null &&
            response.responseJSON !== undefined &&
            response.responseJSON.error != null
          ) {
            let errors = response.responseJSON.error.map((e, i) => {
              return { text: e, key: i };
            });
            //Vue.set(this.data, "error", errors);
            this.errors = this.errors.concat(errors);
            console.log(this.error);
          }
        });
    },
    handleLogin: function() {
      actions.fetchSignIn(this.email, this.password, this.onError);
    },
    onError: function(errors) {
      this.errors = this.errors.concat(errors);
      console.log(this.error);
    }
  }
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>