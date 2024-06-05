import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UserStorage } from './contexts/UserContext'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserStorage>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserStorage>
    </QueryClientProvider>
  </React.StrictMode>
)
