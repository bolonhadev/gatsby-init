import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default reducers => {
  const persistedReducer = persistReducer({
    key: 'GATSBY_INIT',
    storage,
    whitelist: ['firstState', 'secondState', 'anotherState']
  }, 
    reducers
  )

  return persistedReducer
}