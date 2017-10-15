import { GET_SCREENS_REQUEST, GET_SCREENS_SUCCESS, GET_APPS_SUCCESS, GET_APPS_REQUEST, TAP_URL } from '../constants/Page'

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

export function getScreens(item) {
    return (dispatch) => {
        dispatch({
            type: GET_SCREENS_REQUEST,
            payload: item
        })

        let url = `${TAP_URL}/apps?_fields=items(name,screens,video)&limit=8&skip=0`

        fetch(url)
            .then(function(response) {
                return response.json()
            })
            .then(function(response) {
                const photos = response.result.items[item].screens

                dispatch({
                    type: GET_SCREENS_SUCCESS,
                    payload: photos
                })
            })
            .catch(function(error) {
                console.log('error', error)
            })
    }
}
