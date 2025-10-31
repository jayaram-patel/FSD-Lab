import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PostOne from './pages/PostOne';
import PostTwo from './pages/PostTwo';

function App() {
  return (
    <div>
      <nav style={{ padding: '12px 16px', borderBottom: '1px solid #eee' }}>
        <Link to="/" style={{ textDecoration: 'none', fontWeight: 600 }}>
          Yashraj blog
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-1" element={<PostOne />} />
        <Route path="/post-2" element={<PostTwo />} />
      </Routes>
    </div>
  );
}

export default App;
