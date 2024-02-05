import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Board from './components/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>,
)
