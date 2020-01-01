import { combineReducers } from 'redux'

import firstState from './FirstState/reducer'
import secondState from './SecondState/reducer'
import anotherState from './AnotherState/reducer'
import languagesState from './Languages/reducer'

export default combineReducers({
  firstState, secondState, anotherState, languagesState
})