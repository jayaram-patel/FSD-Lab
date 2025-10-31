import React from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₹3500",
    image: "https://imgs.search.brave.com/0zi_0FfeEtgu8u8FRKOvqfFET1Mgu3OOmzXYUbHCv3o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0s5/MmI2VUpNczk4U0RX/ZmZtV2l6cUQuanBn",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹50000",
    image: "https://imgs.search.brave.com/GfRiJi0puQniqJ_T5Jp5IDzYWcRts2Fl0yoKbpSxrf0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIy/NjcyODkzNC9waG90/by9hcHBsZS13YXRj/aC01LXdpdGgtaXBo/b25lLTExLWluLWJs/dXJyZWQtYmFja2dy/b3VuZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9MUdlMFA4/b3JJa3pOWlpKRHZZ/eXg0TlFVSXJqa0J1/LUIxck9sOFVSdFhZ/az0",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "₹600",
    image: "https://imgs.search.brave.com/pqtRXbPl5Q-TZosYwhlld-tSHYEulHJcJ6vADiTAh24/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNiLzY1/LzA0LzNiNjUwNDJi/OWNhMzUwYzExMjhi/ZGUwZWJiM2ExYjEx/LmpwZw",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: "₹300",
    image: "https://imgs.search.brave.com/6QRXTDzGMMxatnSrEA8_KjHsMAwkT2FgYIedcEkPS0U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDIyLzEv/TFMvWkYvV0YvMTQ1/MDg2MjU4L3JhemVy/LXJhemVyLWJhc2ls/aXNrLXgtaHlwZXJz/cGVlZC1nYW1pbmct/bW91c2UtNTAweDUw/MC5qcGc",
  },
  {
    id: 5,
    name: "Laptop Bag",
    price: "₹800",
    image: "https://imgs.search.brave.com/57GC52WLq1E4Dm3k38l9q7grNr685m2F8Yg2eItiv4c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzMwMC8zMDAveGlm/MHEvaGFuZC1tZXNz/ZW5nZXItYmFnL2gv/Zy9wL2Jyb3duLWJs/YWNrLWNvbG9yLWZh/dXgtbGVhdGhlci0x/MGwtYmczMy03LTYy/LWxyLWJnMzMtbWVz/c2VuZ2VyLW9yaWdp/bmFsLWltYWd3djVx/dHdtems3amIuanBl/Zz9xPTkw",
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: "₹1000",
    image: "https://imgs.search.brave.com/UF1nevQt63fCEI8K6HFGghKDsQi9BYXKrtRaSN_2Tlk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDI0LzA0L21lY2hh/bmljYWxrZXlib2Fy/ZHMtMjA0OHB4LTEz/ODUuanBnP2F1dG89/d2VicCZxdWFsaXR5/PTYwJndpZHRoPTU3/MA",
  },
];

export default function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <h1>Amazone</h1>
      </header>

      {/* Product Grid */}
      <main className="gallery">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="footer">
        © 2025 Jayaram's Store — All rights reserved.
      </footer>
    </div>
  );
}
