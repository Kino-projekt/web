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
      @click="handleRegister"
    >
      Zarejestruj
    </v-btn>

    <div v-for="error in errors" v-bind:key="error.key">
        <h2>{{ error.text }}</h2>
      </div>

    
  </v-form>
  
</template>

<script>

import  { actions} from './actions'

export default {
  data() {
    return {
       show1: false,
      blogs: [],
      errors: [],
      email: "",
      password: ""
    };
  },
  methods: {
    handleRegister: function() {
       actions.fetchSignUp(this.email, this.password, this.onError);
      console.log(this.email);
      console.log(this.password);
    },
     onError: function(errors) {
      this.errors = this.errors.concat(errors);
      console.log(this.error);
     }
  }
}
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