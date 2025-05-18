import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext.jsx'
import Signup from './pages/Signup.jsx'
import ProfileCard from './components/common/ProfileCard.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <AppContextProvider>
        <ProfileCard />
    </AppContextProvider>
   </BrowserRouter>,
)
