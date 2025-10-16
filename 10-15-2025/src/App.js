import React, { useState } from 'react';
import About from './components/about';
import Home from './components/home';
import ApiDataRendering from './components/apiDataRendering';
import { Cart } from "./components/cart"
import Layout from './components/layout';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import ProductDetails from './components/productDetails';


function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts]=useState([]);
  console.log(products);
  // console.log(cart)
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path='/all-product'
              element={
                <ApiDataRendering
                  cart={cart}
                  setCart={setCart}

                  products={products}
                  setProducts={setProducts}
                  
                />
              } />
            <Route path='/cart'
              element={
                <Cart
                  cart={cart}
                  setCart={setCart}
                />
              } />
            <Route path='/product-details'
              element={
                <ProductDetails
                  cart={cart}
                  setCart={setCart}
                   products={products}
                />
              } />

          </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;