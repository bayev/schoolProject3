import fetchObjectReducer from './fetchProductReducer';
import subscriberReducer from './subscriberReducer';
import purchaseConfirmationReducer from './purchaseConfirmationReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    fetchReducer: fetchObjectReducer,
    subReducer: subscriberReducer,
    purConfirmReducer: purchaseConfirmationReducer
})

export default rootReducer;
