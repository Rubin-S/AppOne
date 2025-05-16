import React from 'react'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Footer from './components/layout/Footer'
import Signup from './pages/Signup'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import { useAppContext } from './context/AppContext'
const App = () => {
  const {showUserLogin}  = useAppContext() 
  return (
    <>
      <Navbar />
      {showUserLogin && <Login />}
        <div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/signup' element={<Signup />}/>
            
          </Routes>
        </div>
      <Footer />
    </>
  )
}

export default App