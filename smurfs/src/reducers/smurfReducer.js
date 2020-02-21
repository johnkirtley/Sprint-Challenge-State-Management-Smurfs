import {
    GET_DATA,
    SEND_DATA,
    DELETE_DATA
} from '../actions'


export const initialState = {
    data: []
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            console.log('GET_DATA firing', action)
            return {
                ...state,
                data: action.payload
            }
        case SEND_DATA:
            console.log('SEND_DATA firing')
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case DELETE_DATA:
            console.log('DELETE_DATA firing')
            return {
                ...state,
                data: [...state.data, state.data.filter(item => item !== action.payload)]
            }
        default:
            return state;
    }
}