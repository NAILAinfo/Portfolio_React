import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Portfolio'
import 'bootstrap/dist/css/bootstrap.css';
import Portfolio from './Portfolio';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Portfolio/>
  </React.StrictMode>,

)
