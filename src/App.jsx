import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Products from './Pages/Products';
import Features from './Pages/Features';
import Services from './Pages/Services';
import Testimonial from './Pages/Testimonial';
import Faq from './Pages/Faq';



const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Services/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/feature" element={<Features />} />
        <Route path="/testimonial" element={<Testimonial/>} />
        <Route path="/faq" element={<Faq/>} />


      </Routes>
    </Router>
  );
}

export default App
