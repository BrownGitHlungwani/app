import icon1 from "../assets/shopping-bag.png"
import icon2 from "../assets/search.png"
import { useState } from 'react'

export function Products(){
  const[showInput, setShowinput] = useState(false);
  function displaysearch(){
    setShowinput(!showInput);
  }
  return(
    <div>
      <div className='icon_shop_search_holder'>
        {showInput && <input type='search' placeholder='Find electrons....' autoFocus />}
        <img onClick={displaysearch} className="searchicon" width={22} height={22} src={icon2} alt="" />
        <img className="shopping_bag" width={30} height={30} src={icon1} alt="" />
      </div>
      <h1>Our Products</h1>
    </div>
  );
}