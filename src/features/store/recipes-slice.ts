import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Recipe {
  id: number
  title: string
  image: string
  summary: string
  spoonacularScore?: number
}

interface RecipesState {
  recipes: Recipe[]
}

const initialState: RecipesState = {
  recipes: []
}

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setRecipes: (state, action: PayloadAction<Recipe[]>) => {
      state.recipes = action.payload
    }
  }
})

export const { setRecipes } = recipesSlice.actions

export default recipesSlice.reducer
