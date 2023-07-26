import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductApp from './components/articles/ProductApp'
import './App.css';
import ProductsCard from './components/articles/ProductsCard';
import Navscroll from './components/articles/Navscroll';

function App() {
  return (
    <Router>
      <Navscroll />
      <Routes>
        <Route path='/produits' element={<ProductApp />} />
        <Route path='/productcard' element={<ProductsCard />} />
      </Routes>
    </Router>
  );
}

export default App;
