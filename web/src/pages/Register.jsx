import React, { useState } from 'react'
import { api } from '../lib/api.js'

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '' })
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  async function submit(e) {
    e.preventDefault()
    const res = await api('/auth/register', { method: 'POST', body: form })
    localStorage.setItem('token', res.token)
    alert('Usuario creado')
    window.location.href = '/'
  }

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={submit} style={{ display: 'grid', gap: 8 }}>
        <label>Nombre <input name="name" value={form.name} onChange={onChange} /></label>
        <label>Email <input name="email" value={form.email} onChange={onChange} /></label>
        <label>Teléfono <input name="phone" value={form.phone} onChange={onChange} /></label>
        <label>Contraseña <input type="password" name="password" value={form.password} onChange={onChange} /></label>
        <button type="submit">Registrarme</button>
      </form>
    </div>
  )
}
