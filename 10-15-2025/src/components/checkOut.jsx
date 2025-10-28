import React, { useEffect, useState } from 'react'


const CheckOut = ({ cart, setCart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    console.log(cart)
    useEffect(() => {
        const calculateTotalPrice = () => {
            let total = 0;
            cart.forEach((element) => {
                total += element.price;
            });
            setTotalPrice(total);
        };
        calculateTotalPrice();
    }, [cart])
    return (
        <div>
            <h1>checkout</h1>
            <div style={{
                display: "flex",
                gap: "20px"
            }}>
                {cart && cart.map((element) => (
                    <div key={element.id}>
                        <img
                            style={{
                                width: "200px",
                                height: "200px"
                            }}
                            src={element.images[0]} alt="" />
                        <p>{element.title}</p>
                        <p>{element.price}</p>
                    </div>
                )
                )}
            </div>
            <p>totalprice: {totalPrice}</p>
        </div>
    )
}

export default CheckOut