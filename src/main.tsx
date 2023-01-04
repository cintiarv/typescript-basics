import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {InputValueProvider} from './context/InputValueContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <InputValueProvider>
    <App 
    headerText='this is a  header'
    extraText='hola como estás'
    />
    </InputValueProvider>
  </React.StrictMode>,
)
