<template>
    <div id="add-blog" >
        
        <h2>Dodaj Sale</h2>


         <v-textarea
          filled
          auto-grow
          label="Nazwa"
          rows="2"
          row-height="20"
          v-model="hall.name"
        ></v-textarea>

         <v-textarea
          filled
          auto-grow
          label="Liczba miejsc"
          rows="2"
          row-height="20"
          v-model.number="hall.countOfSeats"
        ></v-textarea>
         


        
     <v-btn  flat color="success" class="ml-8" @click="handleAddHall">
        <span>Dodaj</span>
      </v-btn>
       <v-btn  flat color="error" class="ml-8" @click="$router.push({ path: '/Halls' })">
        <span>Cofnij</span>
      </v-btn>
<div v-for="error in errors" v-bind:key="error.key">
        <h2>{{ error.text }}</h2>
      </div>
      </div>
</template>

<script>
import { actions } from "./actions";
export default {
    
    data () {
        return {
            errors: [],
            hall: {
                name: '',
                countOfSeats: '',
                
                
            },
           
           
        }
    },
    methods: {
        handleAddHall: function() {
      actions.addHall(this.hall.name, this.hall.countOfSeats);
      
    },
        }
    }

</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
</style>