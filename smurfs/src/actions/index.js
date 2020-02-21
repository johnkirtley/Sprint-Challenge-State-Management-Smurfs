import axios from 'axios'

export const GET_DATA = 'GET_DATA'
export const SEND_DATA = 'SEND_DATA'

export const getData = () => dispatch => {
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('making axios call', res.data)
            dispatch({
                type: GET_DATA,
                payload: res.data
            })
        })
}


export const sendData = (item) => dispatch => {
    axios
        .post('http://localhost:3333/smurfs', {
            name: item.name,
            age: item.age,
            height: item.height,
            id: item.id
        })
        .then(res => {
            console.log(res)
            dispatch({
                type: SEND_DATA,
                payload: item
            })
        })
        .catch(err => {
            console.log('POST ERROR', err)
        })
}