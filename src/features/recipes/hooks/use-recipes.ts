import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from '../api/recipes'
import { setRecipes } from '../../store/recipes-slice'
import { RootState } from '../../store'

// Hook para manejar las recetas
export const useRecipes = (count: number = 4) => {
  const dispatch = useDispatch()
  const recipes = useSelector((state: RootState) => state.recipes.recipes)

  useQuery(['recipes', count], async () => {
    const data = await getRecipes()
    dispatch(setRecipes(data))
    return data
  })

  return recipes
}
