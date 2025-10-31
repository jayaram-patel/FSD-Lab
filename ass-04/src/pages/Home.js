import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main style={{ maxWidth: 800, margin: '40px auto', padding: '0 16px' }}>
      <h1>Yashraj narke's Blog</h1>
      <p>Welcome! Choose a post to read:</p>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: 24 }}>
        <li style={{ marginBottom: 16 }}>
          <h2 style={{ margin: '0 0 8px' }}>
            <Link to="/post-1">Getting Started with Web dev</Link>
          </h2>
          <p style={{ margin: 0 }}>learn React and express</p>
        </li>
        <li>
          <h2 style={{ margin: '0 0 8px' }}>
            <Link to="/post-2">React Components</Link>
          </h2>
          <p style={{ margin: 0 }}>Functional and class components</p>
        </li>
      </ul>
    </main>
  );
}

export default Home;


