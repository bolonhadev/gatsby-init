import { put, all, takeLatest } from 'redux-saga/effects'

import { anotherStateSuccess } from '../AnotherState/actions'

function* runSagaAction(){
  yield put(anotherStateSuccess())
}

export default all([
  takeLatest('anotherStateRequest',runSagaAction)
])