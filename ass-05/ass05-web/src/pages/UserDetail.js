import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const API_BASE = process.env.REACT_APP_API || 'http://127.0.0.1:5002/api';

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`${API_BASE}/users/${id}`).then(r => r.json()).then(setUser);
  }, [id]);
  function remove() {
    fetch(`${API_BASE}/users/${id}`, { method: 'DELETE' }).then(() => navigate('/'));
  }
  if (!user) return <div style={{ padding: 16 }}>Loading</div>;
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>{user.username}</h2>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => navigate(`/edit/${user._id}`)}>Edit</button>
          <button onClick={remove}>Delete</button>
        </div>
      </div>
      <div style={{ marginTop: 8 }}>{user.email}</div>
      <div style={{ marginTop: 8 }}>{user.phone}</div>
      <div style={{ marginTop: 8 }}>{user.bio}</div>
    </div>
  );
}

export default UserDetail;

