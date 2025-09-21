import React, { useState } from 'react'
import { api } from '../lib/api.js'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  async function submit(e) {
    e.preventDefault()
    const res = await api('/auth/login', { method: 'POST', body: form })
    localStorage.setItem('token', res.token)
    alert('Sesión iniciada')
    window.location.href = '/'
  }

  return (
    <div>
      <h2>Ingresar</h2>
      <form onSubmit={submit} style={{ display: 'grid', gap: 8 }}>
        <label>Email <input name="email" value={form.email} onChange={onChange} /></label>
        <label>Contraseña <input type="password" name="password" value={form.password} onChange={onChange} /></label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}
