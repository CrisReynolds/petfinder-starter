import React, { useEffect, useState } from 'react'
import { api } from '../lib/api.js'
import PetCard from '../components/PetCard.jsx'

export default function Dashboard() {
  const [me, setMe] = useState(null)
  const [items, setItems] = useState([])

  const token = localStorage.getItem('token') || ''

  async function load() {
    try {
      const m = await api('/auth/me', { token })
      setMe(m.user)
      // Aquí podrías cargar sólo tus mascotas filtrando en el backend por ownerId (mejora futura)
      const all = await api('/pets')
      setItems(all.filter(p => p.ownerId === m.user.uid))
    } catch (e) {}
  }

  useEffect(() => { load() }, [])

  if (!token) return <p>Inicia sesión</p>
  return (
    <div>
      <h2>Mi Panel</h2>
      <div>Usuario: {me?.email}</div>
      <div style={{ marginTop: 16, display: 'grid', gap: 12 }}>
        {items.map(p => <PetCard key={p.id} pet={p} />)}
      </div>
    </div>
  )
}
