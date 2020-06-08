import {backendActions} from './backend'
import router from '../../router'


const deleteHall = (hallId, onError) => {
backendActions.deleteHall(hallId).done(response => {
  alert("Sala usunięta");
  console.log(response)
  
}) .fail(response => {  
    let errors =[]
    errors.push(
      { text: response.responseText, key: 0 }
    )
    onError(errors)
});

}


const addHall = (name, countOfSeats, onError) => {
backendActions.addHall(name, countOfSeats).done(response => {
    console.log(response);
    router.push({path:"/Halls"});
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
    'deleteHall': deleteHall,
    'addHall': addHall
}

export {
    actions
}