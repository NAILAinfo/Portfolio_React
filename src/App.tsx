import MyButton from './components/MyButton';
import React from 'react';
export default function MyApp() {
const [c, setCount] = React.useState(0);
  return (
    <>
      <h1>Compteur </h1>
      <p>Valeur : {c}</p>
      <button onClick={()=> setCount(c+1)}>Incrementer</button>
      <button onClick={()=> setCount(c-1)}>Decrementer</button>
      <MyButton />
      
    </>
    
  );
}

