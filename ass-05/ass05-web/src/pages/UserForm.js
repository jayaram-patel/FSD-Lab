import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const API_BASE = process.env.REACT_APP_API || 'http://127.0.0.1:5002/api';

function UserForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);
  const [form, setForm] = useState({ username: '', email: '', password: '', bio: '', phone: '' });
  useEffect(() => {
    if (isEdit) {
      fetch(`${API_BASE}/users/${id}`).then(r => r.json()).then(data => setForm({ ...form, ...data, password: '' }));
    }
  }, [id]);
  function submit(e) {
    e.preventDefault();
    const method = isEdit ? 'PUT' : 'POST';
    const url = isEdit ? `${API_BASE}/users/${id}` : `${API_BASE}/users`;
    fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      .then(r => r.json())
      .then(() => navigate('/'));
  }
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 16 }}>
      <h2>{isEdit ? 'Edit User' : 'Create User'}</h2>
      <form onSubmit={submit} style={{ display: 'grid', gap: 12 }}>
        {!isEdit && (
          <input placeholder="Username" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />
        )}
        <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Password" type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
        <input placeholder="Phone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
        <textarea placeholder="Bio" value={form.bio} onChange={e => setForm({ ...form, bio: e.target.value })} />
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="submit">Save</button>
          <button type="button" onClick={() => navigate(-1)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;

