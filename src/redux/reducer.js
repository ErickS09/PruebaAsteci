import * as types from './actionTypes'

const initialSate = {
    clima: [],
}

const climaReducer = (state = initialSate, action) => {
    switch (action.type) {
        case types.GET_CLIMA:
            return {
                ...state, clima: action.payload,
            }
            default:
                return state;
    }
}

export default climaReducer