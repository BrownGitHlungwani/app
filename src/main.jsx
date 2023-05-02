import React from 'react'
import ReactDOM from 'react-dom/client'
import { Display } from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Display title={"My App"} description={"Opher Ha Ha "}/>
  </React.StrictMode>,
)
