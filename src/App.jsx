import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import LoginPage from './pages/LoginPage'
import AuthProvider, { AuthCtx } from "./context/AuthContext"
import { useContext } from 'react'
import AdminPge from './pages/AdminPge'

function App() {
  const { isAuth } = useContext(AuthCtx);

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/product/:id' element={<DetailPage />} />
      <Route path='/admin' element={isAuth ? <AdminPge /> : <Navigate to="/login" />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='*' element={<h1>NOT FOUND</h1>} />
    </Routes>
  )
}

export default App
