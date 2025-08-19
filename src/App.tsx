import { useState } from "react";

export default function App() {
  const [season, setSeason] = useState("https://static.vecteezy.com/ti/vecteur-libre/p1/4913873-cercle-icones-avec-arbre-pour-quatre-saisons-concept-vector-graphic-design-illustration-of-change-time-through-the-year-wild-nature-environment-for-camping-ski-vectoriel.jpg");
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img 
        src = {season}        
        alt="img" 
        style={{ width: "300px", borderRadius: "10px" }}
      />
      <div style={{ margin: "20px 0" }}>
      <button onClick={()=>setSeason("https://www.equilibre-et-sens.fr/wp-content/uploads/2019/10/automne-comment-mieux-vivre-saison-01.jpg") }>Automne</button>
      <button onClick={()=>setSeason("https://img.le-dictionnaire.com/printemps-saison.jpg") }>Printemps</button>
      <button onClick={()=>setSeason("https://cdn.futura-sciences.com/sources/images/screen/EVENEMENT/Hiver/081116-hiver03-43.jpg") }>Hiver</button>
      <button onClick={()=>setSeason("https://lokaterre.com/wp-content/uploads/2023/03/vacances-dete.jpg") }>Ete</button>
    </div>
    
    </div>
  );
}
