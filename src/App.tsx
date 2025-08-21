import { useState, useEffect } from "react";

export default function App() {
  const [prenom, setPrenom] = useState("");

  useEffect(() => {
    if (prenom !== "") {
      console.log(`Bienvenue, ${prenom} !`);
    }
  }, [prenom]); // se déclenche à chaque changement de prénom

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Entre ton prénom :</h2>
      <input
        type="text"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        placeholder="Ton prénom"
      />
      <p>{prenom !== "" ? `Bienvenue, ${prenom} !` : "Entre ton prénom..."}</p>
    </div>
  );
}
