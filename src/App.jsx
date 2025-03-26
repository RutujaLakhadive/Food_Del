 import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeholder from './Pages/Placeholder/Placeholder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import Example from './Components/Example/Example'
 



 const App = () => {

  const [showLogin,setShowLogin]=useState(false)
   return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    <div className='app'>
       <Navbar setShowLogin={setShowLogin}/>
       <Routes>
        <Route path='/' element={(<Home/>)}/>
        <Route path='/cart' element={(<Cart/>)}/>
        <Route path='/order' element={(<Placeholder/>)}/>
        
       </Routes>
       
     </div>
     <Example/>
     <Footer/>
    
    </>
     
   )
 }
 
 export default App
 