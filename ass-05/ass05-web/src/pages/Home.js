import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const API_BASE = process.env.REACT_APP_API || 'http://127.0.0.1:5002/api';

function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${API_BASE}/users`).then(r => r.json()).then(setUsers);
  }, []);
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Users</h2>
        <button onClick={() => navigate('/create')}>Create</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
        {users.map(u => (
          <div key={u._id} style={{ border: '1px solid #ccc', padding: 12, borderRadius: 6 }}>
            <div style={{ fontWeight: 600 }}>{u.username}</div>
            <div style={{ fontSize: 12, color: '#555' }}>{u.email}</div>
            <div style={{ marginTop: 8 }}>
              <Link to={`/users/${u._id}`}>Open</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

