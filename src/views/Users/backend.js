import $ from "jquery";
import store from '../../store'


const banUser = (userId) =>{
   
      
      var request = $.ajax({
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " +  store.state.token
        },
        url: `https://afternoon-waters-37189.herokuapp.com/api/admin/users/${userId}/ban`,
        type: "PATCH",
        contentType: "application/json; charset=utf-8",

       data: null
      });
    return request;
}









const backendActions = {
    'banUser': banUser
}

export {
    backendActions
}