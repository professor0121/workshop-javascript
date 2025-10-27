import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Cart = ({cart,setCart}) => {
    console.log(cart)
    const navigate=useNavigate();

    const handleRemoveFromCard = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    }
  return (
    <div 
    style={{
      display:"flex",
      width:"100vw",
      flex:"wrap"
    }}
    >
        {
           cart.map((element)=>(
            <div
            key={element.id}
            style={{
              border:"1px solid black",
              margin:"10px",  
            }}
            >
                <p>{element.title}</p>
                <img 
                style={{
                  height:"300px",
                  width:"250px"
                }}
                src={element.images[0]} alt={element.title} />
                <p>Price : {element.price}</p>
                <button
                style={{
                  cursor:"pointer"
                }}
                onClick={() => handleRemoveFromCard(element.id)}>Remove</button>
                <button
                style={{
                  cursor:"pointer"
                }}
                onClick={() =>navigate('/checkout')}>CheckOut</button>
            </div>
           ))
        }
    </div>
  )
}