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
        <img onClick={displaysearch} className="searchicon" width={22} height={22} src={"/search.png"} alt="" />
        <img className="shopping_bag" width={30} height={30} src={"/shopping-bag.png"} alt="" />
      </div>
      <h1>Our Products</h1>
    </div>
  );
}