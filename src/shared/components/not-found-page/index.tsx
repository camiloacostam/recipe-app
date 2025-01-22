import { Link } from 'react-router-dom'
import './styles.scss'

export const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__message">
        Lo sentimos, la página que buscas no existe.
      </p>
      <Link to="/" className="not-found__link">
        Volver al Inicio
      </Link>
    </div>
  )
}
