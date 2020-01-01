import React from 'react'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import storage from '../index'

export default ( {element, store=storage, persistor=(persistStore(store))} )=>
  (
    <Provider store={storage}>
    <PersistGate persistor={persistor}>
      {element}
    </PersistGate>
  </Provider>
  )
