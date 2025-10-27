import React,{useEffect, useState} from 'react'


const CheckOut = ({cart,setCart}) => {
    const [totalPrice, setTotalPrice] = useState(0);
    console.log(cart)
    useEffect(()=>{
        cart.map((element)=>{
            setTotalPrice(totalPrice+element.price)
        })
    },[])
  return (
    <div>
        <h1>checkout</h1>
        {cart&&cart.map((element)=>(
            <div key={element.id}>
                <p>{element.title}</p>
            </div>
        )
        )}


        <p>totalprice: {totalPrice}</p>
    </div>
  )
}

export default CheckOut