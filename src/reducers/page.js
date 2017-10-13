import { GET_PHOTO_REQUEST, GET_PHOTO_SUCCESS } from '../constants/Page'

const initialState = {
    year: 2016,
    photos: [],
    fetching: false
}

export default function page(state = initialState, action) {
    switch (action.type) {
        case GET_PHOTO_REQUEST:
            return {...state, year: action.payload, fetching: true}

        case GET_PHOTO_SUCCESS:
            return {...state, photos: action.payload, fetching: false}

        default:
            return state;
    }
}
