import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL

export const getRecipes = async () => {
  const response = await axios.get(`${BASE_URL}/recipes`)
  return response.data
}
