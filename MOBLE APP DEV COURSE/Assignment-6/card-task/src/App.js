import React from "react";
import "./App.css";

function Header() {
  return (
    <header className="header">
      <h1>Abdul Haseeb Qazi</h1>
    </header>
  );
}

function Card({ name, paragraph }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{paragraph}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Abdul Haseeb Qazi | All Rights Reserved</p>
    </footer>
  );
}

export default function App() {
  const data = [
    { id: 1, name: "Card 1", paragraph: "This is card 1" },
    { id: 2, name: "Card 2", paragraph: "This is card 2" },
    { id: 3, name: "Card 3", paragraph: "This is card 3" },
    { id: 4, name: "Card 4", paragraph: "This is card 4" },
    { id: 5, name: "Card 5", paragraph: "This is card 5" },
    { id: 6, name: "Card 6", paragraph: "This is card 6" },
    { id: 7, name: "Card 7", paragraph: "This is card 7" },
    { id: 8, name: "Card 8", paragraph: "This is card 8" },
  ];

  return (
    <div>
      <Header />

      <div className="card-container">
        {data.map((item) => (
          <Card key={item.id} name={item.name} paragraph={item.paragraph} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
