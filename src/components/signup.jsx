import { useEffect, useState } from "react"

let nextId = 1;

export const Signup = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [info, setInfo] = useState([]);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const passwordsMatch = password === cpassword;
        if (passwordsMatch) {
            const insert = 1;
            const nextInfo = [
                ...info.slice(0, insert),
                {id: nextId++,
                    name: name,
                    surname: surname,
                    contact: contact,
                    email: email,
                    password: password,
                    cpassword: cpassword,
                },
                ...info.slice(insert)
            ]; 
            setInfo(nextInfo);
            setName('');
            setSurname('');
            setContact('');
            setEmail('');
            setPassword('');
            setCpassword('');
            alert( name + " your signup is successfull");
            localStorage.setItem("info",JSON.stringify(nextInfo));
        } else {
            alert("Your passwords don't match. Please type the same password again.");
        }
    }

    const deleteItem = () => {
        const item = info.id;
        localStorage.removeItem('info', JSON.stringify(item));
    }

    useEffect(()=>{
        const store = localStorage.getItem("info");
        if(store){
            setInfo(JSON.parse(store));
        }
        console.log(store);
    },[]);

    return(
        <div>
            <form className="Signupform" onSubmit={handleSubmit}>
                <label>Sign up to Gadgets fam </label><br/>
                <p>Welcom to Gadgets-hub, not the secret hub you know.</p>
                <input 
                  type="text" placeholder="Name" id="name" required 
                  value={name} onChange={e=>setName(e.target.value)}
                />
                <input 
                  type="text" placeholder="Surname" id="surname" required
                  value={surname} onChange={e=>setSurname(e.target.value)}
                /><br/>
                <input 
                   type="text" placeholder="Contact" id="contact" required
                   value={contact} onChange={e=>setContact(e.target.value)}
                />
                <input 
                  type="email" placeholder="Email" id="email" required
                  value={email} onChange={e=>setEmail(e.target.value)}
                /><br/>
                <input 
                  type="password" placeholder="Password" id="password" required
                  value={password} onChange={e=>setPassword(e.target.value)}
                />
                <input 
                  type="password" placeholder="Confirm Password" id="c_password" required
                  value={cpassword} onChange={e=>setCpassword(e.target.value)}
                /><br/>

                <button type="submit">Sign up</button>
            </form>

            <ul className="NewUser">
               {info.map(info => (
                   <li key={info.id}>{info.name} {info.surname} {info.contact} {info.email}
                      <button onClick={deleteItem} className="ClearJson">Delete</button>
                   </li>  
                ))} 
            </ul>
        </div>
    );
}