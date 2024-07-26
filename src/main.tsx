// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";
// import 'flowbite/dist/flowbite.css'; 
import 'flowbite'
import 'primeicons/primeicons.css';
import ContextData from './context/ContextData.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <ContextData>
      <App />
    </ContextData>
  // </React.StrictMode>
  ,
)
