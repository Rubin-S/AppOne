import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext.jsx'

import ProfileCard from './components/common/ProfileCard.jsx'
import ServiceForm from './pages/ServiceForm.jsx'


createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <AppContextProvider>
        <ServiceForm />
    </AppContextProvider>
   </BrowserRouter>,
)
