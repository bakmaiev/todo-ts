import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './tasks-slice'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'

const persistConfig = {
  'key': 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, tasksReducer)

export const store = configureStore({
  'reducer': {
    'tasks': persistedReducer,
  },
  'middleware': (getDefaultMiddleware) =>
    getDefaultMiddleware({
      'serializableCheck': {
        'ignoredActions': [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
