import { GET_PHOTO_REQUEST, GET_PHOTO_SUCCESS } from '../constants/Page'

export function getPhotos(year) {
    return (dispatch) => {
        const xhr = new XMLHttpRequest();

        dispatch({
            type: GET_PHOTO_REQUEST
        })

        xhr.open('GET', 'http://api.tappawards.com/api/v1/apps?_fields=items(name,platform,developer(name,url),collaborator(name,url),screens,video,statusChangeDate,description,storeUrl,screensBgColor,rateDate,rates,winDate,isLiked,likeCount,icon,price,totalCount,permalink)&limit=8&search%5Bplatform%5D=&search%5Bstatus%5D=winners%7Cnominees&skip=0', false);

        xhr.send();

        if (xhr.status != 200) {
            console.log(xhr.status, xhr.statusText);
            // dispatch({
            //     type: GET_PHOTO_FAILURE,
            //     payload: response.photos
            // })
        } else {
            const response = JSON.parse(xhr.responseText)
            const photos = response.result.items[0].screens

            dispatch({
                type: GET_PHOTO_SUCCESS,
                payload: photos
            })
        }
    }
}
