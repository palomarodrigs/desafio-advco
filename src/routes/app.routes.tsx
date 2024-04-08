import { Routes, Route } from 'react-router-dom'
import { Categories } from '../pages/categories'
import { Details } from '../pages/details'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  )
}
