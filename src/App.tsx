import { useEffect , useState} from "react";

export default function App() {
    const [count, setCount] = useState(0);
useEffect(() => {
    document.title = "Compteur " + count;
  }, [count]); // tableau vide = exécute une seule fois au montage


  return (

    

  
    <div style={{ textAlign: "center", marginTop: "50px" }}>
    <button onClick={()=> setCount(count+1)}>Incrementer</button> 
    <button onClick={()=> setCount(count-1)}>Decrementer</button> 

    </div>
  );
}
