import { useState } from "react";
import { sculptureList } from "./Data/Objectblog";

export function Blog() {
    const [sculpture, setSculpture] = useState(0);

    function handleClick() {
        setSculpture(sculpture + 1);
    }
    let sculptures = sculptureList[sculpture];
    return(
        <div className="Blogbody">

         <h1>From the blog</h1>
         <h4>Learn about different global sculptures.</h4>

         <h2>{sculptures.name}</h2>
         <p>{sculptures.artist}</p>
         <h3>({sculpture + 1} of {sculptureList.length})</h3>
         <img src={sculptures.url} alt={sculptures.alt}/>
         <p>{sculptures.description}</p>

         <button onClick={handleClick} className="sculpturebutton">Next</button>
        </div>
    );
}