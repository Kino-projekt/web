import $ from "jquery";

const SignUp = (email, password) => {
    var criteria = {
        email: email,
        password: password
      };

      var request = $.ajax({
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        url: "https://afternoon-waters-37189.herokuapp.com/api/auth/signup",
        type: "POST",
        contentType: "application/json; charset=utf-8",

        data: JSON.stringify(criteria)
      });
      request


}
const backendActions = {
    'SignUp': SignUp
}

export {
    backendActions
}