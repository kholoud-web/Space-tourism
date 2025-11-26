import './App.css'
import Home from './components/Home.jsx'
import Destination from './components/Destination.jsx'

import {BrowserRouter, Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import { Box } from '@mui/material'













function App() {

  return (
    <BrowserRouter>
    
      <NavBar />

       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination/>}/>
        

       </Routes>
      
    </BrowserRouter>
  )
}

export default App
