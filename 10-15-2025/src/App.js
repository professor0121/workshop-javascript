import React, { useState } from 'react';
import About from './components/about';
import Home from './components/home';
import ApiDataRendering from './components/apiDataRendering';
import { Cart } from "./components/cart"

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div 
    style={{
      display:"flex",
      width:"100vw"
    }}
    >
      <ApiDataRendering
        cart={cart}
        setCart={setCart}
      />
      <Cart
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}

export default App;