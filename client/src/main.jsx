import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext.jsx'
import Signup from './pages/Signup.jsx'
import ProfileCard from './components/common/ProfileCard.jsx'
import Login from './pages/Login.jsx'
import ProgressSteps from './components/common/ProgressBar.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <AppContextProvider>
        <ProgressSteps />
    </AppContextProvider>
   </BrowserRouter>,
)
