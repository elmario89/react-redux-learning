import { GET_APPS_SUCCESS, GET_APPS_REQUEST, CHANGE_APP_SUCCESS, GET_TOTALCOUNT_SUCCESS } from 'src/constants/Apps'

const initialState = {
    apps: [],
    pageNumber: 0,
    totalCount: 0,
    fetching: false
}


export default function apps(state = initialState, action) {
    switch (action.type) {
        case GET_APPS_REQUEST:
            return {...state, fetching: true}

        case GET_APPS_SUCCESS:
            return {...state, apps: action.payload, fetching: false}

        case CHANGE_APP_SUCCESS:
            return {...state, pageNumber: action.payload, fetching: false}

        case GET_TOTALCOUNT_SUCCESS:
            return {...state, totalCount: action.payload, fetching: false}

        default:
            return state;
    }
}
