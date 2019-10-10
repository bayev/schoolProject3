
const subscriberReducer = (state = {}, action) => {
    if(action.type === 'SUBSCRIBER_CONNECTION'){
        return Object.assign({},state, {
            connection: action.payload
        })
    } else{
        return state
    }
} 

export default subscriberReducer;