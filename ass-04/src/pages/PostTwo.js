import React from 'react';
import { Link } from 'react-router-dom';

function PostTwo() {
  return (
    <article style={{ maxWidth: 800, margin: '40px auto', padding: '0 16px' }}>
      <header>
        <h1>React Components</h1>
        <p style={{ color: '#666' }}>by Yashraj Narke • October 2025 • 6 min read</p>
      </header>
      <section>
        <p>
          Components are the building blocks of a React application. Each component encapsulates
          structure, style, and behavior for a piece of UI, making your code easier to reuse and
          reason about.
        </p>
        <h2>Functional Components and Props</h2>
        <p>
          Most modern React apps use functional components with hooks. Data flows into a component
          through <em>props</em>, and components can manage internal state with hooks like
          <code>useState</code> when needed.
        </p>
        <h2>Composition Over Inheritance</h2>
        <p>
          Build complex interfaces by composing small components together. This keeps each piece
          focused and testable, while enabling powerful combinations.
        </p>
      </section>
      <p style={{ marginTop: 24 }}>
        <Link to="/">← Back to Home</Link>
      </p>
    </article>
  );
}

export default PostTwo;


