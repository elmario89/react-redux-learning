import { GET_APPS_SUCCESS, GET_APPS_REQUEST } from '../constants/Page'

const initialState = {
    apps: []
}

export default function appsList(state = initialState, action) {
    switch (action.type) {
        case GET_APPS_REQUEST:
            return {...state, fetching: false}

        case GET_APPS_SUCCESS:
            return {...state, apps: action.payload, fetching: false}

        default:
            return state;
    }
}
