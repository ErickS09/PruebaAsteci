import * as types from './actionTypes'
import axios from 'axios'

const getClima = (clima) => ({
    type: types.GET_CLIMA,
    payload: clima
})

export const loadClima = () => {
    return function (dispatch) {
        axios.get('https://api.datos.gob.mx/v1/condiciones-atmosfericas').then((resp) => {
            dispatch(getClima(resp.data.results))
            console.log('respuesta', resp)
        }).catch((error) => console.log(error))
    }
}