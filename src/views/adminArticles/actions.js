import {backendActions} from './backend'
import router from '../../router'


const changeStatus = (articleId, onError) => {
    backendActions.changeStatus(articleId).done(response => {
    
        console.log(response)
        
     })
     .fail(response => {
         console.log(response)
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
const deleteArticle = (articleId, onError) => {
backendActions.deleteArticle(articleId).done(response => {
    
  console.log(response)
  
}) .fail(response => {  
    let errors =[]
    errors.push(
      { text: response.responseText, key: 0 }
    )
    onError(errors)
});

}


const addArticle = (title, description, onError) => {
backendActions.addArticle(title, description)
    .done(response => {
        console.log(response);
        router.push({path:"/adminArticles"});
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
  };


  

  




const actions = {
    'deleteArticle': deleteArticle,
    'addArticle': addArticle,
    'changeStatus': changeStatus
}

export {
    actions
}