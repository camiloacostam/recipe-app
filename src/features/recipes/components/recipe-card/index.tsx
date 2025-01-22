import './styles.scss'

interface RecipeCardProps {
  title: string
  image: string
  rating: number
}

export function RecipeCard({ title, image, rating }: RecipeCardProps) {
  return (
    <div className="recipe-card">
      <div className="recipe-card__image-container">
        <img src={image} alt={title} className="recipe-card__image" />
      </div>
      <div className="recipe-card__content">
        <h3 className="recipe-card__title">{title}</h3>
        <p className="recipe-card__rating">⭐ {rating.toFixed(1)}</p>
      </div>
    </div>
  )
}
