import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo_GD2.png"

export function NavigationComponent(){
    return(
        <div className="NavBar">
           <img width={120} height={120} src={Logo} alt="" />

           <NavLink className="navlink" to="/">Home</NavLink>
           <NavLink className="navlink" to="/about">About</NavLink>
           <NavLink className="navlink" to="/blogs">Blogs</NavLink>
           <NavLink className="navlink" to="/repair">Repairs</NavLink>
           <NavLink className="navlink" to="/products">Products</NavLink>

           <NavLink className="log" to="/login">Log in </NavLink>
        </div>   
    );
}