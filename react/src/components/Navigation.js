import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navigation() {
    const {current_user,logout} = useContext (AuthContext)
    console.log("CURRENT USER IN NAVBAR", current_user)
    return (
        <nav>
            <div className="site-title">TRAVEL PHOTOBOOK</div>
            
           {current_user && current_user?
           <>
           <NavLink to="/" end>HOME</NavLink>
            <NavLink to="/sets">LOCATIONS</NavLink>
            <NavLink to="/miniatures">ALBUM</NavLink>
            <NavLink to="/profile">PROFILE</NavLink>
            <NavLink to="/logout" onClick={()=>logout()}>LOGOUT</NavLink>
            </>:

            <>
            <NavLink to="/login">LOGIN</NavLink>
            <NavLink to="/register">REGISTER</NavLink>
            </>
           
           }
        
           </nav>
    )
}
export default Navigation;