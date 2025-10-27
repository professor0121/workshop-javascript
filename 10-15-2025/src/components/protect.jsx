import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Protect = () => {
    const user=localStorage.getItem("username")||''
    const navigate=useNavigate();
  return (
    <div>
        {
            user.length?<Outlet/>:navigate("/login")
        }
    </div>
  )
}

export default Protect