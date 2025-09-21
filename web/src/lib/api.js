const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export async function api(path, { method = 'GET', body, token } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(`${API_URL}/api${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    let detail = '';
    try { detail = await res.json(); } catch {}
    throw new Error(detail?.error || `HTTP ${res.status}`);
  }
  return res.json();
}
