import { GET_SCREENS_REQUEST, GET_SCREENS_SUCCESS, GET_APPS_SUCCESS, GET_APPS_REQUEST } from '../constants/Page'

const initialState = {
    apps: [],
    item: 0,
    photos: [],
    fetching: false,
    appsFetching: true
}

export default function page(state = initialState, action) {
    switch (action.type) {
        case GET_SCREENS_REQUEST:
            return {...state, item: action.payload, fetching: true}

        case GET_SCREENS_SUCCESS:
            return {...state, photos: action.payload, fetching: false}

        case GET_APPS_REQUEST:
            return {...state, fetching: true}

        case GET_APPS_SUCCESS:
            return {...state, apps: action.payload, fetching: false}

        default:
            return state;
    }
}
