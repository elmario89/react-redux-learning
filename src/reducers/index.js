import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import appsList from './appsList'

export default combineReducers({
    page,
    user,
    appsList
})
