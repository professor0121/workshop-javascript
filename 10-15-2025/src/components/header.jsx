import React from 'react'
import { Link } from 'react-router-dom'

const NavMenu=[
    {link:"/all-product",tag:"Product"},
    {link:"/cart",tag:"Cart"},
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
                        <div>
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