import $ from "jquery";
import store from '../../store'




const deleteMovie = (movieId) =>{
  var request = $.ajax({
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " +  store.state.token
    },
    url: `https://afternoon-waters-37189.herokuapp.com/api/admin/movies/${movieId}`,
    type: "DELETE",
    contentType: "application/json; charset=utf-8",

   data: null
  });
return request;

}







const addMovie = (title, description, director) => {
    var criteria = {
        title: title,
        description: description,
        director: director,
        accessToken: store.state.token
      };
      console.log(criteria)
      var request = $.ajax({
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " +  store.state.token
        },
        url: "https://afternoon-waters-37189.herokuapp.com/api/admin/movies",
        type: "POST",
        contentType: "application/json; charset=utf-8",

        data: JSON.stringify(criteria)
      });
    return request;
}
const addComment = (descriptionComment, movieId) =>{
  var criteria = {
    content: descriptionComment,
    movieId: movieId.toString()
  };
  var request = $.ajax({
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " +  store.state.token
    },
    url: "https://afternoon-waters-37189.herokuapp.com/api/comments",
    type: "POST",
    contentType: "application/json; charset=utf-8",

    data: JSON.stringify(criteria)
    
  });
return request;
}



const backendActions = {
    'addMovie': addMovie,
    'addComment': addComment,
    'deleteMovie': deleteMovie
}

export {
    backendActions
}