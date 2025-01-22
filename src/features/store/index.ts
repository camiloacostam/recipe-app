import { configureStore } from '@reduxjs/toolkit'
import recipesReducer from './recipes-slice'

const store = configureStore({
  reducer: {
    recipes: recipesReducer // Reducer para manejar las recetas
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
