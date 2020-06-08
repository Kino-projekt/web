import {
    backendActions
} from './backend'

const ban = (userId,onError) => {
backendActions.banUser(userId).done(response => {
    
   console.log(response)
   
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


const changeStatus = () => {


}


const actions = {
    'ban': ban,
    'changeStatus': changeStatus
}

export {
    actions
}