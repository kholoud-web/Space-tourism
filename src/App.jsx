import './App.css'
import Home from './components/Home.jsx'
import Destination from './components/Destination.jsx'

import {BrowserRouter, Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Crew from './components/Crew.jsx'
import Technology from './components/Technology.jsx'











function App() {

  return (
    <BrowserRouter>
    
      <NavBar />

       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/crew' element = {<Crew/>}/>
        <Route path='/technology' element={<Technology/>}/>
       </Routes>
      
    </BrowserRouter>
  )
}

export default App
