import { backendActions} from './backend'
import router from '../../router'


const fetchSignUp = (email, password, onError) =>{
    backendActions
    .SignUp(email, password)
    .done(response => {
      console.log(response);
      alert("konto zostało utworzone");
      router.push({path:"/login"});
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
        
        this.errors = this.errors.concat(errors);
        console.log(this.error);
        onError(errors)
      }
    });

}


const actions = {
    'fetchSignUp': fetchSignUp,
    
}

export {
    actions
}