import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const sponacularApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json'
  }
})

export const getRecipes = async () => {
  const response = await sponacularApi.get('/random', {
    params: {
      number: 4,
      apiKey: import.meta.env.VITE_API_KEY
    }
  })

  return response.data.recipes
}
