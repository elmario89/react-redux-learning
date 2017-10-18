import { GET_APPS_SUCCESS, GET_APPS_REQUEST } from 'src/constants/AppsList'
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