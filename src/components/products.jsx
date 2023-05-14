import { useState } from 'react'
import { Link} from "react-router-dom"
import { Blog_grid } from './Data/blog_grid';
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase/firebase";

export function Products(){
  const[showInput, setShowinput] = useState(false);
  const[searched, setSearch] = useState('');
  function displaysearch(){
    setShowinput(!showInput)
  }
  const colRef = collection(db, 'clients');
  getDocs(colRef).then((snapshot)=>{
      let client = []
      snapshot.docs.map((doc)=>{
        client.push({...doc.data(), id: doc.id})
      })
      console.log(client)
  }).catch((err)=>{
    console.log(err.message)
  })

  return(
    <div className='Products_body'>
      <div className='icon_shop_search_holder'>
      {showInput && <input type='search' placeholder='Find electrons....' value={searched} onChange={(e)=>setSearch(e.target.value)} autoFocus  />}
        <img onClick={displaysearch} className="searchicon" width={22} height={22} src={"/search.png"} alt="" />
        <img className="shopping_bag" width={30} height={30} src={"/shopping-bag.png"} alt="" />
      </div>
      <h1>Our Products</h1>
      <div className='searchresults'>
        {Blog_grid.filter((item)=>{
          const searchTerm = searched.toLocaleLowerCase();
          const name = item.name.toLocaleLowerCase();
          return searchTerm && name.includes(searchTerm);
          }).map((item)=>(
            <div className='Searchresult'>
              <Link to={`/blogs/${item.id}`}><h5>{item.name}</h5></Link>
            </div>
          ))
        } 
      </div>
      <div>
        {
          
        }
      </div>
    </div>
  );
}