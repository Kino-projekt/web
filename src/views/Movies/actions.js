import {backendActions} from './backend'
import router from "../../router"


const deleteMovie = (movieId, onError) => {
backendActions.deleteMovie(movieId).done(response => {
  alert("Film usunięty");
  console.log(response)
  
}) .fail(response => {  
    let errors =[]
    errors.push(
      { text: response.responseText, key: 0 }
    )
    onError(errors)
});

}
const addComment = (descriptionComment, movieId, onError) => {
  backendActions.addComment(descriptionComment, movieId).done(() => {
   router.push({path:"/Movies"});
   
  })
  .fail(response => {
    console.log(response);
    if (
      response !== null &&
      response.responseJSON !== undefined &&
      response.responseJSON.error != null
    ) {
      let errors =[]
    errors.push(
      { text: response.responseText, key: 0 }
    )
    onError(errors)
    }
  });

}

const addMovie = (title, description, director, onError) => {
backendActions.addMovie(title, description, director).done(response => {
    console.log(response);
    router.push({path:"/movies"});
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
    'addMovie': addMovie,
    'addComment': addComment
}

export {
    actions
}