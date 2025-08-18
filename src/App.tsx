import MyButton from './components/MyButton';
import { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(true); // couleur initiale = noir

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
    {visible && <p>Welcome to the React documentation! This page will give you an introduction to 80% of the React concepts that you will use on a daily basis. </p> }
    <button onClick={()=> setVisible(!visible)}>{visible ? "Masquer" : "Afficher"}</button>
    </div>
  );
}
