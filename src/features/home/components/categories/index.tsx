import { TCategory } from '../../types/category'
import './styles.scss'

interface ICategoriesProps {
  data: TCategory[]
}

export function Categories({ data }: ICategoriesProps) {
  return (
    <div className="categories">
      {data.map((category, index) => (
        <div key={index} className="categories__item">
          <img src={category.icon} alt={category.name} />
          <span>{category.name}</span>
        </div>
      ))}
    </div>
  )
}
