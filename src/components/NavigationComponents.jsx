import { NavLink } from "react-router-dom";

export function NavigationComponent(){
    return(
        <div className="NavBar">
           <img className="" width={50} height={50} src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />

           <NavLink className="navlink" to="/">Home</NavLink>
           <NavLink className="navlink" to="/about">About</NavLink>
           <NavLink className="navlink" to="/blogs">Blogs</NavLink>
           <NavLink className="navlink" to="/sale">Special</NavLink>
           <NavLink className="navlink" to="/products">Products</NavLink>

           <NavLink className="log" to="/login">Log in </NavLink>
        </div>   
    );
}