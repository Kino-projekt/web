<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    
  <v-col cols="12" sm="" md="3">
    <v-text-field 
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      counter
      required
    ></v-text-field>

   <v-text-field
            v-model="password"
             :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Hasło"
            hint="Minimum 8 znaków, litera mała, duża, cyfra oraz znak zpecjalny"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
</v-col>
   

    <v-btn
      
      color="success"
      class="mr-4"
      @click="handleLogin"
    >
     Zaloguj
    </v-btn>
      <div v-for="error in errors" v-bind:key="error.key">
        <h2>{{ error.text }}</h2>
      </div>
  </v-form>
</template>

<script>
import $ from "jquery";
import { actions } from "./actions";

export default {
  data() {
    return {
      show1:false,
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