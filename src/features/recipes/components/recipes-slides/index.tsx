//hooks
import { useRecipes } from '../../hooks/use-recipes'
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
          <div key={recipe.id} className="recipes__item">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="recipes__image"
            />
            <h3 className="recipes__name">{recipe.title}</h3>
            <p className="recipes__rating">⭐ {recipe.spoonacularScore || 5}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
