import { configureStore } from '@reduxjs/toolkit'
import worksReducer from './gallery/worksSlice';
import credentialsReducer from './credentionals/credentialsSlice';

const store = configureStore({
    reducer: {
        works: worksReducer,
        credentials: credentialsReducer,
    },
})

// Infer the types from the store itself
export type StoreType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
export default store
