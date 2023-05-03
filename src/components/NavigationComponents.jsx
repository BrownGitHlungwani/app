import { NavLink } from "react-router-dom";

export function NavigationComponent(){
    return(
        <div className="NavBar">
           <NavLink className="navlink" to="/">Home</NavLink>
           <NavLink className="navlink" to="/about">About</NavLink>
           <NavLink className="navlink" to="/blogs">Blogs</NavLink>
           <NavLink className="navlink" to="/sale">Sales</NavLink>
           <NavLink className="navlink" to="/products">Products</NavLink>
        </div>   
    );
}