import './styles.scss'
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <Link to="/">
          <p>
            Recipe<span>App</span>
          </p>
        </Link>
      </div>

      {/* Menú para Desktop */}
      <nav className="navbar__links navbar__links--desktop">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/vegetarianos">Vegetarianos</Link>
          </li>
          <li>
            <Link to="/principales">Platos Principales</Link>
          </li>
          <li>
            <Link to="/tortas">Tortas</Link>
          </li>
          <li>
            <Link to="/tortas">Comida Rápida</Link>
          </li>
          <li>
            <Link to="/menu-ninos">Menú Niños</Link>
          </li>
          <li>
            <Link to="/menu-ninos">Sopas</Link>
          </li>
        </ul>
      </nav>

      {/* Icono Home en Mobile */}
      <div className="navbar__home-icon">
        <Link to="/">
          <img src="/images/ic_home.png" alt="Home Icon" />
        </Link>
      </div>
    </header>
  )
}
