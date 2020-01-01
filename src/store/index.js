import { createStore, applyMiddleware, compose } from 'redux'

import persistReducers from './modules/persistReducers'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const enhancer = compose(applyMiddleware(sagaMiddleware))

const persistStore = persistReducers(rootReducer)

const store = createStore(persistStore,enhancer)

sagaMiddleware.run(rootSaga)

export default store