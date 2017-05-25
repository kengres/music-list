// Redux built in functions
import { combineReducers } from 'redux'


// Reducers
import AllUsers from './AllUsers'

const allElements = combineReducers({
	users: AllUsers
})

export default allElements