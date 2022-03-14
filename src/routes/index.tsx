import Dashboard from "../pages/Dashboard"
import { Navigate, Route, Routes } from "react-router-dom"

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}
