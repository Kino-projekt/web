<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    
  <v-col cols="12" sm="6" md="3">
    <v-text-field 
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      
      label="Hasło"
      required
    ></v-text-field>
</v-col>
   

    <v-btn
      
      color="success"
      class="mr-4"
      @click="handleRegister"
    >
      Zarejestruj
    </v-btn>

    

    
  </v-form>
</template>

<script>
import $ from "jquery";

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