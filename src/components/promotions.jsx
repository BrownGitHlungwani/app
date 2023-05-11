import { signOut } from "firebase/auth";
import { auth } from "./Firebase/firebase";
import { useNavigate } from "react-router-dom";

export function Promo() {
    const redirectback = useNavigate();
    const LogOut = () =>{
        signOut(auth).then(() =>{
            redirectback('/');
        }).catch((error)=>{
            //
        });
    }

    return(
        <div className="Promopage">
            <button onClick={LogOut} className="logout_button">Log out</button>
            <h1>Promotions</h1>
            <h4>Your Promo gift for the season</h4>
        </div>
    );
}