import React, { useState } from 'react'
import { api } from '../lib/api.js'

export default function ReportPet() {
  const [token, setToken] = useState(localStorage.getItem('token') || '')
  const [form, setForm] = useState({
    name: '', species: 'dog', breed: '', color: '', size: 'medium',
    description: '', status: 'lost', lastSeenAddress: '', photoUrl: ''
  })
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  async function submit(e) {
    e.preventDefault()
    const res = await api('/pets', { method: 'POST', body: form, token })
    alert('Mascota registrada')
    setForm({ ...form, name: '', breed: '', color: '', description: '', lastSeenAddress: '', photoUrl: '' })
  }

  return (
    <div>
      <h2>Reportar Mascota</h2>
      {!token && <p style={{ color: 'tomato' }}>Inicia sesión para registrar (usa el formulario de Registro/Login).</p>}
      <form onSubmit={submit} style={{ display: 'grid', gap: 8 }}>
        <label>Nombre <input name="name" value={form.name} onChange={onChange} /></label>
        <label>Especie
          <select name="species" value={form.species} onChange={onChange}>
            <option value="dog">Perro</option>
            <option value="cat">Gato</option>
          </select>
        </label>
        <label>Raza <input name="breed" value={form.breed} onChange={onChange} /></label>
        <label>Color <input name="color" value={form.color} onChange={onChange} /></label>
        <label>Tamaño
          <select name="size" value={form.size} onChange={onChange}>
            <option value="small">Pequeño</option>
            <option value="medium">Mediano</option>
            <option value="large">Grande</option>
          </select>
        </label>
        <label>Estado
          <select name="status" value={form.status} onChange={onChange}>
            <option value="lost">Perdida</option>
            <option value="found">Encontrada</option>
          </select>
        </label>
        <label>Descripción
          <textarea name="description" value={form.description} onChange={onChange} />
        </label>
        <label>Último lugar visto
          <input name="lastSeenAddress" value={form.lastSeenAddress} onChange={onChange} />
        </label>
        <label>URL de Foto
          <input name="photoUrl" value={form.photoUrl} onChange={onChange} placeholder="https://..." />
        </label>
        <button type="submit" disabled={!token}>Guardar</button>
      </form>
    </div>
  )
}
