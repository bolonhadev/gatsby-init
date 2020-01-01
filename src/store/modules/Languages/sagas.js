import { put, all, takeLatest } from 'redux-saga/effects'

// import { TXT_GATSBY_CHANGE } from '../Girl/actions'

import { changeLanguageSuccess } from './actions'

function* changeLanguage(language){
  // yield put(TXT_GATSBY_CHANGE())
  // do something ...
  
  yield put(changeLanguageSuccess(language))
  // console.log('state')
}

export default all([
  takeLatest('changeLanguageRequest',changeLanguage)
])