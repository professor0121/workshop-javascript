import React from 'react'
import { Link } from 'react-router-dom'

const NavMenu=[
    {id:1,link:"/all-product",tag:"Product"},
    {id:2,link:"/cart",tag:"Cart"},
    {id:3,link:"/login",tag:"Login"},
    {id:4,link:"/checkout",tag:"CheckOut"},
]

const Header = () => {
  return (
    <div
    style={{
        display:"flex",
        justifyContent:"space-between",
        alignContent:"space-between",
        padding:"20px"
    }}
    >
         <div>Logo</div>
         <div 
         style={{
            display:"flex",
            justifyContent:"space-between",
            alignContent:"space-between",
            gap:"25px"
         }}
         >
                {
                    NavMenu?.map((menu)=>(
                        <div key={menu.id}>
                            <Link to={menu.link}>{menu.tag}</Link>
                        </div>
                    ))
                }
         </div>
         <div>
            Profile
         </div>
    </div>
  )
}

export default Header