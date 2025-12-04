import './App.css';

import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import AnimatedRoutes from './components/AnimatedRoutes.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <NavBar />
        <AnimatedRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
