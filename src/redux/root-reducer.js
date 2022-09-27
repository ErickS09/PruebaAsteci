import {combineReducers} from 'redux'
import climaReducer from './reducer'

const rootReducer = combineReducers({
    data: climaReducer
})

export default rootReducer