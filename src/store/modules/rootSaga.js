import { all } from 'redux-saga/effects'

import anotherState from './AnotherState/saga'
import changeLanguage from './Languages/sagas'

export default function* rootSaga(){
  return yield all([
    anotherState, changeLanguage
  ])
}