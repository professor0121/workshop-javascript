import React, { useEffect, useState } from 'react'

const ApiDataRendering = ({cart,setCart}) => {
    const [product, setProduct] = useState()
    const url = 'https://dummyjson.com/products'
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url)
            const data = await response.json();
            setProduct(data.products)
        }
        fetchData();
    }, [url])

   const handleCartEvent=(item)=>{
 setCart((prevCart) => [...prevCart, item]);   }
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            {product?.map((element) => (
                <div key={element.id}
                    style={{
                        width: "300px",
                        height: "600px",
                        border: "1px solid black"
                    }}
                >
                    <img
                        style={{ width: "100%", height: "50%" }}
                        src={element.images[0]} alt="" />
                    <hr style={{ height: "1px solid black" }} />
                    <div style={{
                        padding: "10px 20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "space-between",
                        height: "250px"
                    }}>
                        <div >
                            <h1>{element.title.slice(0, 20)}</h1>
                            <p>Price : {element.price}</p>
                            <p>Description : {element.description.slice(0, 50)}</p>
                        </div>
                        <button
                            style={{
                                width: "100%",
                                padding: "10px 10px",
                                cursor: "pointer"
                            }}
                            onClick={()=>handleCartEvent(element)}
                        >Add to cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ApiDataRendering