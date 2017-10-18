import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import apps from './apps'

export default combineReducers({
    page,
    user,
    apps
})
