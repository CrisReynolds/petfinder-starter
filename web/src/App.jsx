import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ReportPet from './pages/ReportPet.jsx'
import Search from './pages/Search.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Navbar from './components/Navbar.jsx'

export default function App() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: 16 }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reportar" element={<ReportPet />} />
        <Route path="/buscar" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <footer style={{ marginTop: 40, fontSize: 12, color: '#666' }}>
        PetFinder · Software Libre · React + Node + PostgreSQL
      </footer>
    </div>
  )
}
