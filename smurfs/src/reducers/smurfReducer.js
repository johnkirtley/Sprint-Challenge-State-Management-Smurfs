import { GET_DATA, SEND_DATA } from '../actions'


export const initialState = {
    data: []
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            console.log('GET_DATA firing')
            return {
                ...state,
                data: [action.payload]
            }
        case SEND_DATA:
            console.log('SEND_DATA firing')
            return {
                ...state,
                data: [action.payload]
            }
        default:
            return state;
    }
}