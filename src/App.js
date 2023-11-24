import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Generic/Header'
import { Footer } from './components/Generic/Footer'
import { UserStorage } from './contexts/UserContext'
import { AppRoutes } from './routes/AppRoutes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <AppRoutes />
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
