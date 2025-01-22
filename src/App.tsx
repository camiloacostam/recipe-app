import { Routes, Route } from 'react-router-dom'
//Layouts
import { MainLayout } from './shared/components/main-layout'
//Pages
import HomePage from './features/home/pages/home-page'
import { NotFoundPage } from './shared/components/not-found-page'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
