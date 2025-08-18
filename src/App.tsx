import MyButton from './components/MyButton';
import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("black"); // couleur initiale = noir

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: color }}>Bonjour React 👋</h1>
      <button onClick={() => setColor("red")}>Rouge</button>
      <button onClick={() => setColor("blue")}>Bleu</button>
      <button onClick={() => setColor("green")}>Vert</button>
      <button onClick={() => setColor("black")}>Réinitialiser</button>
    </div>
  );
}
