import { useState } from "react";

export default function App() {
  const [saisie, setSaisie] = useState("");   // valeur de l'input
  const [message, setMessage] = useState(""); // message validé

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* champ de saisie */}
      <input
        type="text"
        placeholder="Écris ton message"
        value={saisie}
        onChange={(e) => setSaisie(e.target.value)}
      />

      {/* bouton valider */}
      <button onClick={() => setMessage(saisie)}>Valider</button>

      {/* affichage uniquement après validation */}
      {message && <p>Tu as écrit : {message}</p>}
    </div>
  );
}
