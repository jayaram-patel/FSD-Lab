import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import UserDetail from './pages/UserDetail';
import UserForm from './pages/UserForm';

function App() {
  return (
    <div>
      <div style={{ padding: 12, borderBottom: '1px solid #eee', display: 'flex', gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/create" element={<UserForm />} />
        <Route path="/edit/:id" element={<UserForm />} />
      </Routes>
    </div>
  );
}

export default App;
