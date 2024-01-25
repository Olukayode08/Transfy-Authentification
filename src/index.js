import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FormContext } from './context/FormContext'
import { BrowserRouter } from 'react-router-dom'
import { DarkModeContext } from './context/DarkModeContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeContext>
        <FormContext>
          <App />
        </FormContext>
      </DarkModeContext>
    </BrowserRouter>
  </React.StrictMode>
)

