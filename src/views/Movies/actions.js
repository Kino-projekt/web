import {backendActions} from './backend'



const deleteMovie = (movieId, onError) => {
backendActions.deleteMovie(movieId).done(response => {
    
  console.log(response)
  
}) .fail(response => {  
    let errors =[]
    errors.push(
      { text: response.responseText, key: 0 }
    )
    onError(errors)
});

}


const addMovie = (title, description, director, onError) => {
backendActions.addMovie(title, description, director).done(response => {
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
      
      
      this.errors = this.errors.concat(errors);
      console.log(this.error);
      onError(errors)
    }
  });

}


const actions = {
    'deleteMovie': deleteMovie,
    'addMovie': addMovie
}

export {
    actions
}