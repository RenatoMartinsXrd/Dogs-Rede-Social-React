import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UserStorage } from './contexts/UserContext'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <UserStorage>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserStorage>
  </React.StrictMode>
)
