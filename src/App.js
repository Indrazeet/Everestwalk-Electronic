
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {BrowserRouter, Route, Routes,} from "react-router-dom"
import Products from './component/Products';
import Product from './component/Product';
import Footer from './footers/footer';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>

    <Route path='/' element={<Home/>}>
    <Route path='/product' element={<Products/>}></Route>
    <Route path='/products/:id' element={<Product/>}></Route>
    </Route>
   </Routes>
    <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;
