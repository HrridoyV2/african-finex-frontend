import { combineReducers } from 'redux';
import buyReducer from './buy/buyReducer'
const rootReducer = combineReducers({
    buy: buyReducer
})

export default rootReducer;