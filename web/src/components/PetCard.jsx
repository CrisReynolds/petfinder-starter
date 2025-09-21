import React from 'react'

export default function PetCard({ pet }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 12 }}>
      <div style={{ fontWeight: 'bold' }}>{pet.name || '(Sin nombre)'}</div>
      <div>{pet.species} · {pet.color || 'sin color'} · {pet.size || 'sin tamaño'}</div>
      <div>Estado: {pet.status}</div>
      {pet.lastSeenAddress && <div>Último lugar: {pet.lastSeenAddress}</div>}
      {pet.photoUrl && <img src={pet.photoUrl} alt="pet" style={{ width: '100%', marginTop: 8 }} />}
    </div>
  )
}
