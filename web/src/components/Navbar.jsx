import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
      <Link to="/">Inicio</Link>
      <Link to="/buscar">Buscar</Link>
      <Link to="/reportar">Reportar</Link>
      <span style={{ flex: 1 }} />
      <Link to="/login">Ingresar</Link>
      <Link to="/registro">Registro</Link>
      <Link to="/dashboard">Mi Panel</Link>
    </nav>
  )
}
