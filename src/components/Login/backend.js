import $ from "jquery";

const SignIn = (email, password) => {
    var criteria = {
        email: email,
        password: password
    };
    criteria.email = "test@admin.pl"
    criteria.password = "Testowe123!"
    var request = $.ajax({
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        url: "https://afternoon-waters-37189.herokuapp.com/api/auth/signin",
        type: "POST",
        contentType: "application/json; charset=utf-8",

        data: JSON.stringify(criteria)
    });
    return request;
}

const backendActions = {
    'SignIn': SignIn
}

export {
    backendActions
}