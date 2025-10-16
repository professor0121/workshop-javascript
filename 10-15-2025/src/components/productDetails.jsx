import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductDetails = ({ products }) => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  console.log(products)
  return (
    <div>
      {
        products
          .filter(element => element.id.toString() === productId) 
          .map(element => (

            <div key={element.id}>
                <img src={element.images[0]} alt="" />
              <h2>{element.title}</h2>
              <p>{element.description}</p>
              <p>Price: ${element.price}</p>
            </div>
          ))
      }
    </div>
  )
}

export default ProductDetails
