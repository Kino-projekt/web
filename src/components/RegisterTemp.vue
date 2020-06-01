<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="password"
      :counter="10"
      :rules="passwordRules"
      label="Hasło"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    

   

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="handleRegister"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
</template>



<div v-for="error in errors" v-bind:key="error.key">
        <h2>{{ error.text }}</h2>
      </div>