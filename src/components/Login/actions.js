import {
    backendActions
} from './backend'
import store from './../../store'

const fetchSignIn = (email, password, onError) => {
    backendActions
        .SignIn(email, password)
        .done(response => {
            if (!Array.isArray(response) && response.length != 2) {
                this.errors = [{
                    key: 0,
                    text: "bad input"
                }];
                return;
            }

            let token = response[1].accessToken;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(response[0]));
            store.commit("auth_success", response);
        })
        .fail(response => {
            console.log(response)
            if (
                response !== null &&
                response.responseJSON !== undefined &&
                response.responseJSON.error != null
            ) {
                let errors = []
                errors.push({
                    text: response.responseJSON.error,
                    key: 0
                })
                onError(errors)

            }
        });
}

const logout = () => {
    store.commit('auth_success', [null, ''])
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    console.log(store.state.token)
    console.log(store.state.user)
}

const actions = {
    'fetchSignIn': fetchSignIn,
    'logout': logout
}

export {
    actions
}