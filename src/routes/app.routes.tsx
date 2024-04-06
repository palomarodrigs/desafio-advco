import { Routes, Route } from 'react-router-dom'
import { Categories } from '../pages/categories'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Categories />} />
    </Routes>
  )
}
