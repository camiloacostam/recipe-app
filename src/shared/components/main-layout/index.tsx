import { Outlet } from 'react-router-dom'
// Components
import { Navbar } from '../navbar'
import { Footer } from '../footer'
// Styles
import './styles.scss'

export function MainLayout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
