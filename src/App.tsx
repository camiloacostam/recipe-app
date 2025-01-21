import { Routes, Route } from 'react-router-dom'
//Layouts
import { MainLayout } from './shared/components/main-layout'
//Pages
import HomePage from './features/home/pages/home-page'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
