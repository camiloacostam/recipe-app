//components
import { Hero } from '../../components/hero'
import { Categories } from '../../components/categories'
import { RecipesSlides } from '../../../recipes/components/recipes-slides'
//utils
import { categories } from '../../../../shared/utils/categories'
//styles
import './styles.scss'

export default function HomePage() {
  return (
    <div className="home">
      <Hero />
      <section className="home__categories">
        <Categories data={categories} />
      </section>
      <section className="home__recipes">
        <RecipesSlides />
      </section>
    </div>
  )
}
