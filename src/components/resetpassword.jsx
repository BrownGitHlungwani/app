import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./Firebase/firebase";
import { useState } from "react";

export function Forgotpassword() {
    const[email, setEmail] = useState();

    const handleReset = async(event) => {
        event.preventDefault();
        await sendPasswordResetEmail(auth, email)
        .then(()=>{
            alert('Reset link is sent to your email');
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        })
    }
    return(
        <div className="Resetbody">
            <h1><img width={150} height={150} src={"/Logo_GD.png"} alt="" /></h1>
            <h4>Reset Password</h4>
            <form onSubmit={handleReset}>
                <label>Email address</label><br/>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/><br/>
                <button type="submit">Send link</button>
            </form>
        </div>
    );
}