import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Blog_grid } from './Data/blog_grid';

export function Home() {
  const[showInput, setShowinput] = useState(false);
  const[searched, setSearch] = useState('');
  const link = useNavigate();
  function displaysearch(){
    setShowinput(!showInput);
  }
  return(
    <div className='indexbody'>
      <div className='icon_shop_search_holder'>
        {showInput && <input type='search' placeholder='Find electrons....' value={searched} onChange={(e)=>setSearch(e.target.value)} autoFocus  />}
        <img onClick={displaysearch} className="searchicon" width={22} height={22} src={"/search.png"} alt="" />
        <img className="shopping_bag" width={30} height={30} src={"/shopping-bag.png"}  alt="" />
      </div>
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
      <div className='index_center_content'>
        <h2>Gadgets Hub</h2>
        <h3>Welcom to Gadgets-hub, not the secret hub you know.</h3>
        <p>Unleash the AI beast with phenomenal gadgets tech, like computer tower, gaming boards, hardware parts repair, and more... </p>
        <button onClick={()=>{link('/products')}}>Buy now</button>
      </div>
      <ul className="socialmedia_icon_holder">
        <li><Link to={'/'}><img src={"/facebook.png"} alt='icon3' width={27} height={27}/></Link></li>
        <li><Link to={'/'}><img src={"/twitter.png"} alt='icon3' width={27} height={27}/></Link></li>
        <li><Link to={'https://faq.whatsapp.com/425247423114725/?helpref=uf_share'}><img src={"/whatsapp.png"} alt='icon3' width={27} height={27}/></Link></li>
        <li><Link to={'https://www.linkedin.com/in/nkateko-hlungwani-03a689254'}><img src={"/linkedin.png"} alt='icon3' width={27} height={27}/></Link></li>
      </ul>
      <div className='imager'><img src={"/tower.jpg"} alt='pic' width={480} height={505}/></div>
    </div>
  );
}