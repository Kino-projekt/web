import $ from "jquery";
import store from '../../store'




const deleteArticle = (articleId) =>{
  var request = $.ajax({
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " +  store.state.token
    },
    url: `https://afternoon-waters-37189.herokuapp.com/api/admin/articles/${articleId}`,
    type: "DELETE",
    contentType: "application/json; charset=utf-8",

   data: null
  });
return request;
}







const addArticle = (title, description) => {
    var criteria = {
        title:title,
        description:description,
        accessToken: store.state.token
      };
      console.log(criteria)
      var request = $.ajax({
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " +  store.state.token
        },
        url: "https://afternoon-waters-37189.herokuapp.com/api/admin/articles",
        type: "POST",
        contentType: "application/json; charset=utf-8",

        data: JSON.stringify(criteria)
      });
    return request;
}


const changeStatus = (articleId) =>{
   
      
    var request = $.ajax({
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " +  store.state.token
      },
      url: `https://afternoon-waters-37189.herokuapp.com/api/admin/articles/${articleId}/status`,
      type: "PATCH",
      contentType: "application/json; charset=utf-8",
  
     data: null
    });
  return request;
  }



  

const backendActions = {
    'addArticle': addArticle,
    'deleteArticle': deleteArticle,
    'changeStatus': changeStatus
}

export {
    backendActions
}