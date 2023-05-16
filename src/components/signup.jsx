import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db} from "./Firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

let nextId = 0;

export const Signup = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [info, setInfo] = useState([]);

    const handleSubmit = async(event) =>{
        event.preventDefault();
        const passwordsMatch = password === cpassword;
        if (passwordsMatch) {
            const nextInfo = [
                ...info,
                {
                    id: nextId++,
                    name: name,
                    surname: surname,
                    contact: contact,
                    email: email,
                    password: password,
                    cpassword: cpassword,
                }
            ]; 
            setInfo(nextInfo);
            setName('');
            setSurname('');
            setContact('');
            setEmail('');
            setPassword('');
            setCpassword('');
            alert( name + " your signup is successfull");
            await createUserWithEmailAndPassword(auth, email, password);
            await addDoc(collection(db, 'clients'),{
                name: name,
                surname: surname,
                contact: contact,
                email: email,
            });
        } else {
            alert("Your passwords don't match. Please type the same password again.");
        }
    }

    return(
        <div>
            <form className="Signupform" onSubmit={handleSubmit}>
                <label>Sign up to Gadgets fam </label><br/>
                <p>Welcom to Gadgets-hub, not the secret hub you know.</p>
                <input 
                  type="text" placeholder="Name" required 
                  value={name} onChange={e=>setName(e.target.value)}
                />
                <input 
                  type="text" placeholder="Surname" required
                  value={surname} onChange={e=>setSurname(e.target.value)}
                /><br/>
                <input 
                   type="text" placeholder="Contact" required
                   value={contact} onChange={e=>setContact(e.target.value)}
                />
                <input 
                  type="email" placeholder="Email" required
                  value={email} onChange={e=>setEmail(e.target.value)}
                /><br/>
                <input 
                  type="password" placeholder="Password" required
                  value={password} onChange={e=>setPassword(e.target.value)}
                />
                <input 
                  type="password" placeholder="Confirm Password" required
                  value={cpassword} onChange={e=>setCpassword(e.target.value)}
                /><br/>
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
}