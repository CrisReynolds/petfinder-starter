import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>🐾 PetFinder</h1>
      <p>Busca y reporta mascotas perdidas (perros y gatos).</p>
      <div style={{ display: 'flex', gap: 12 }}>
        <Link to="/buscar">🔎 Buscar mascotas</Link>
        <Link to="/reportar">➕ Reportar mascota</Link>
      </div>
    </div>
  )
}
