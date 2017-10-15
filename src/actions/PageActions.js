import { GET_SCREENS_REQUEST, GET_SCREENS_SUCCESS } from '../constants/Page'

export function getScreens(item) {
    return (dispatch) => {
        dispatch({
            type: GET_SCREENS_REQUEST,
            payload: item
        })

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://api.tappawards.com/api/v1/apps?_fields=items(screens)&limit=8&skip=0', false);
        xhr.send();

        if (xhr.status != 200) {
            console.log(xhr.status, xhr.statusText);
        } else {
            const response = JSON.parse(xhr.responseText)
            const photos = response.result.items[item].screens

            dispatch({
                type: GET_SCREENS_SUCCESS,
                payload: photos
            })
        }
    }
}
