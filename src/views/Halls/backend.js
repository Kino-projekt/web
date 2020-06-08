import $ from "jquery";
import store from '../../store'




const deleteHall = (hallId) =>{
  var request = $.ajax({
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " +  store.state.token
    },
    url: `https://afternoon-waters-37189.herokuapp.com/api/admin/halls/${hallId}`,
    type: "DELETE",
    contentType: "application/json; charset=utf-8",

   data: null
  });
return request;

}







const addHall = (name, countOfSeats) => {
    var criteria = {
        name:name,
        countOfSeats:countOfSeats,
        accessToken: store.state.token
      };
      console.log(criteria)
      var request = $.ajax({
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " +  store.state.token
        },
        url: "https://afternoon-waters-37189.herokuapp.com/api/admin/halls",
        type: "POST",
        contentType: "application/json; charset=utf-8",

        data: JSON.stringify(criteria)
      });
    return request;
}

const backendActions = {
    'addHall': addHall,
    'deleteHall': deleteHall
}

export {
    backendActions
}