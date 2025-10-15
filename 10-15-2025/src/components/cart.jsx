import React from 'react'


export const Cart = ({cart,setCart}) => {
    console.log(cart)
  return (
    <div>
        {
           cart.map((element)=>(
            <div
            key={element.id}
            >
                <p>{element.title}</p>
            </div>
           ))
        }
    </div>
  )
}