import './App.css'
import Home from './components/Home.jsx'
import Destination from './components/Destination.jsx'

import {BrowserRouter, Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Crew from './components/Crew.jsx'












function App() {

  return (
    <BrowserRouter>
    
      <NavBar />

       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/crew' element = {<Crew/>}/>

       </Routes>
      
    </BrowserRouter>
  )
}

export default App
