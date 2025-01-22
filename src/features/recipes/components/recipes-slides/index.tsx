//hooks
import { useRecipes } from '../../hooks/use-recipes'
//components
import { RecipeCard } from '../recipe-card'
//styles
import './styles.scss'

export function RecipesSlides() {
  const recipes = useRecipes()

  if (!recipes || recipes.length === 0) {
    return <p>Cargando recetas...</p>
  }

  console.log(recipes)

  return (
    <section className="recipes">
      <h2 className="recipes__title">Nuevas Recetas</h2>
      <div className="recipes__list">
        {recipes.map((recipe: any) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            rating={recipe.spoonacularScore || 0}
          />
        ))}
      </div>
    </section>
  )
}
