import React, { useState } from 'react';
import About from './components/about';
import Home from './components/home';
import ApiDataRendering from './components/apiDataRendering';
import { Cart } from "./components/cart"
import Layout from './components/layout';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import ProductDetails from './components/productDetails';
import Login from './components/login';
import Protect from './components/protect';
import CheckOut from './components/checkOut';


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
            <Route element={<Protect/>} >
              <Route path='/cart'
              element={
                <Cart
                  cart={cart}
                  setCart={setCart}
                />
              } />
              <Route path='/checkout'
              element={
                <CheckOut
                  cart={cart}
                  setCart={setCart}
                />
              } />
            </Route>
            <Route path='/product-details'
              element={
                <ProductDetails
                  cart={cart}
                  setCart={setCart}
                   products={products}
                />
              } />
            <Route path='/login'
              element={<Login/>}
              />
          </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;