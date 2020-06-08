import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || '',
        user: localStorage.getItem('user') || null,
    },
    mutations: {

        auth_success(state, response) {
            console.log('auth_success')
            console.log(response)
            state.status = 'success'
            state.token = response[1].accessToken
            state.user = response[0]
        }
    },


});

export default store