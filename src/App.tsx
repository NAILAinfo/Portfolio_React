import { useState } from "react";

export default function App() {
  const [i, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter</h1>
      <div style={{ margin: "20px 0" }}>
      <button onClick={() => setCount(i + 1)} >click</button>
      <p>tu as clicker {i}</p>
    </div>
    
    </div>
  );
}
