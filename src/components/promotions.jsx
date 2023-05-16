import { signOut } from "firebase/auth";
import { auth } from "./Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { db } from './Firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from "react";

export function Promo () {
    const redirectback = useNavigate();
    const[clients, setClients] = useState([]);

    const LogOut = () =>{
        signOut(auth).then(() =>{
            redirectback('/');
        }).catch((error)=>{
            //
        });
    }
    useEffect(()=>{
        ;(async()=>{
          const snapshots = await getDocs(collection(db, 'clients'))
          const docs = snapshots.docs.map(doc => {
            const data = doc.data()
            data.id = doc.id
            return data
          })
          setClients(docs)
          console.log(docs)
        })()
    },[])

    return(
        <div className="Promopage">
            <button onClick={LogOut} className="logout_button">Log out</button>
            <h1>Promotions</h1>
            <h4>Your Promo gift for the season</h4>
            <div>
            {
                clients.map((user)=>{
                 <div key={clients.id}>{clients}</div>
               })
            }  
            </div>
        </div>
    );
}