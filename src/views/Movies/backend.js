import $ from "jquery";
import store from '../../store'

const addMovie = (title, description, director) => {
    var criteria = {
        title: title,
        description: description,
        director:director,
        accessToken: store.state.token
      };
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

const backendActions = {
    'addMovie': addMovie
}

export {
    backendActions
}