import { GET_APPS_SUCCESS, GET_APPS_REQUEST, CHANGE_APP_SUCCESS } from 'src/constants/Apps'
import { TAP_URL } from 'src/constants/Api'

export function getApps() {
    return (dispatch) => {
        dispatch({
            type: GET_APPS_REQUEST
        })

        let url = `${TAP_URL}/apps?_fields=items(name,screens,video)&limit=8&skip=0`

        fetch(url)
            .then(function(response) {
                return response.json()
            })
            .then(function(response) {
                const apps = response.result.items

                dispatch({
                    type: GET_APPS_SUCCESS,
                    payload: apps
                })
            })
            .catch(function(error) {
                console.log('error', error)
            })
    }
}

export function changeApp(index) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_APP_SUCCESS,
            payload: index
        })
    }
}