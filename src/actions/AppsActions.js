import { GET_APPS_SUCCESS, GET_APPS_REQUEST, CHANGE_APP_SUCCESS, GET_TOTALCOUNT_SUCCESS } from 'src/constants/Apps'
import { TAP_URL } from 'src/constants/Api'

export function getApps(page) {
    return (dispatch) => {
        dispatch({
            type: GET_APPS_REQUEST
        })

        let skip = (8 * (page - 1))

        let url = `${TAP_URL}/apps?_fields=items(name,screens,video)&limit=8&skip=${skip}`

        fetch(url)
            .then(function(response) {
                return response.json()
            })
            .then(function(response) {
                const apps = response.result.items
                const totalCount = response.result.totalCount

                dispatch({
                    type: GET_TOTALCOUNT_SUCCESS,
                    payload: totalCount
                })

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