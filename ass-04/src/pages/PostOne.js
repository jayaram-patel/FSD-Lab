import React from 'react';
import { Link } from 'react-router-dom';

function PostOne() {
  return (
    <article style={{ maxWidth: 800, margin: '40px auto', padding: '0 16px' }}>
      <header>
        <h1>Getting Started with Web dev</h1>
        <p style={{ color: '#666' }}>By Yashraj narke • November 2025 • 5 min read</p>
      </header>
      <section>
        <p>
          Web development brings together HTML, CSS, and JavaScript. HTML structures content, CSS
          styles it, and JavaScript adds interactivity. Modern tooling and frameworks make building
          rich experiences faster and more reliable.
        </p>
        <h2>Key Building Blocks</h2>
        <ul>
          <li><strong>HTML</strong>: semantic structure for your pages.</li>
          <li><strong>CSS</strong>: responsive, accessible styling.</li>
          <li><strong>JavaScript</strong>: dynamic behavior and data flow.</li>
        </ul>
        <h2>Next Steps</h2>
        <p>
          Start small: build a personal homepage. Practice layout with Flexbox and Grid, then add
          interactivity with JavaScript. From there, explore frameworks like React to organize your
          UI into reusable components.
        </p>
      </section>
      <p style={{ marginTop: 24 }}>
        <Link to="/">← Back to Home</Link>
      </p>
    </article>
  );
}

export default PostOne;


