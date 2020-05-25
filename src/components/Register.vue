<template>
  <div id="show-blogs">
    <h1>Register</h1>
    <div>
      <label>E-mail</label>
      <input type="text" v-model="email" />
    </div>
    <div>
      <label>password</label>
      <input type="password" v-model="password" />
    </div>
    <div>
      <input type="button" value="Zarejestruj" @click="handleRegister" />
      <div v-for="error in errors" v-bind:key="error.key">
        <h2>{{ error.text }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
//const { JSDOM } = require( "jsdom" );
//const { window } = new JSDOM( "" );
//const $ = require( "jquery" )( window );
export default {
  data() {
    return {
      blogs: [],
      errors: [],
      email: "",
      password: ""
    };
  },
  methods: {
    handleRegister: function() {
      console.log(this.email);
      console.log(this.password);
      //          this.$http.post('https://afternoon-waters-37189.herokuapp.com/api/auth/signup', JSON.stringify({
      //              email:this.email,
      //              password:this.password
      //          }),

      //           {
      //    headers: {

      //        "Accept":'*/*',
      //        "Content-Type": "application/json",
      //        "Access-Control-Allow-Origin": "http://localhost:8080",

      //    }
      // }

      //           ).then(function (response) {
      //   console.log(response)
      // })
      var criteria = {
        email: this.email,
        password: this.password
      };

      var request = $.ajax({
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        url: "https://afternoon-waters-37189.herokuapp.com/api/auth/signup",
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