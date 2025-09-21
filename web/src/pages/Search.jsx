import React, { useEffect, useState } from 'react'
import { api } from '../lib/api.js'
import PetCard from '../components/PetCard.jsx'

export default function Search() {
  const [items, setItems] = useState([])
  const [form, setForm] = useState({ species: '', color: '', size: '', status: '' })
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  async function fetchPets() {
    const params = new URLSearchParams()
    Object.entries(form).forEach(([k,v]) => { if (v) params.append(k,v) })
    const data = await api(`/pets?${params.toString()}`)
    setItems(data)
  }

  useEffect(() => { fetchPets() }, [])

  return (
    <div>
      <h2>Buscar</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 12 }}>
        <label>Especie
          <select name="species" onChange={onChange} value={form.species}>
            <option value="">Todas</option>
            <option value="dog">Perro</option>
            <option value="cat">Gato</option>
          </select>
        </label>
        <label>Color
          <input name="color" value={form.color} onChange={onChange} placeholder="Ej: negro" />
        </label>
        <label>Tamaño
          <select name="size" onChange={onChange} value={form.size}>
            <option value="">Todos</option>
            <option value="small">Pequeño</option>
            <option value="medium">Mediano</option>
            <option value="large">Grande</option>
          </select>
        </label>
        <label>Estado
          <select name="status" onChange={onChange} value={form.status}>
            <option value="">Todos</option>
            <option value="lost">Perdida</option>
            <option value="found">Encontrada</option>
          </select>
        </label>
      </div>
      <button onClick={fetchPets} style={{ marginTop: 12 }}>Aplicar filtros</button>
      <div style={{ marginTop: 16, display: 'grid', gap: 12 }}>
        {items.map(p => <PetCard key={p.id} pet={p} />)}
      </div>
    </div>
  )
}
