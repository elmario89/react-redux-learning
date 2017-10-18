import { GET_APPS_SUCCESS, GET_APPS_REQUEST } from 'src/constants/AppsList'

const initialState = {
    apps: [],
    fetching: false
}


export default function appsList(state = initialState, action) {
    switch (action.type) {
        case GET_APPS_REQUEST:
            return {...state, fetching: true}

        case GET_APPS_SUCCESS:
            return {...state, apps: action.payload, fetching: false}

        default:
            return state;
    }
}
