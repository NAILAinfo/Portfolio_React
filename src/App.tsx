import { useState } from "react";

export default function App() {
  const [i, setCount] = useState("gray ");
  return (
    <div style={{ textAlign: "center", marginTop: "50px", backgroundColor: i, height: "100vh" }}>
      <h1>Fond de la fenetre </h1>
      <div style={{ margin: "20px 0" }}>
      <button onClick={()=> setCount("white")}>Blan</button>
      <button onClick={()=> setCount("red")}>Rouge</button>
      <button onClick={()=> setCount("blue")}>Bleu</button>
      <button onClick={()=> setCount("green")}>Vert</button>
      <button onClick={()=> setCount("bleu")}>Reinitialisation</button>
    </div>
    
    </div>
  );
}
