import { useState } from "react"
import Avatar from "../assets/avatar.png"
import Emailicon from "../assets/email.png"
import Lockicon from "../assets/protect.png"
import { Signup } from "./Barrels/barrel"

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        alert("Login");
    }
    return(
        <div className="Loginbody">
            <form onSubmit={handleClick} className="Loginform">
                <label>Log in </label>
                <img src={Avatar} alt="avatar" width={120} height={120}/><br/>
                <input 
                 type="email" placeholder="Email" id="email" value={email} onChange={e=>setEmail(e.target.value)} required
                /><img src={Emailicon} alt="icon" width={35} height={35} className="emailicon"/><br/>
                <input 
                  type="password" placeholder="Password" id="password" value={password} onChange={e=>setPassword(e.target.value)} required
                /><img src={Lockicon} alt="icon" width={35} height={35} className="lockicon"/><br/>
                
                <button type="submit">Log in</button>
            </form>
            <div><Signup/></div>
        </div>
    );
}

