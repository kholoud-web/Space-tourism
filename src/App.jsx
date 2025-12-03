import './App.css'

import {BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import AnimatedRoutes from './components/AnimatedRoutes.jsx'










function App() {


    return (
     <BrowserRouter>
      <NavBar />
      <AnimatedRoutes />   
    </BrowserRouter>
  )
}

export default App
