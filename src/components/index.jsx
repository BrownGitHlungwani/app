import icon1 from "../assets/shopping-bag.png"
import icon2 from "../assets/search.png"
import icon3 from "../assets/facebook.png"
import icon4 from "../assets/twitter.png"
import icon5 from "../assets/whatsapp.png"
import icon6 from "../assets/linkedin.png"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

export function Home() {
  const[showInput, setShowinput] = useState(false);
  const buylink = useNavigate();
  function displaysearch(){
    setShowinput(!showInput);
  }
  return(
    <div className='indexbody'>
      <div className='icon_shop_search_holder'>
        {showInput && <input type='search' placeholder='Find electrons....' autoFocus />}
        <img onClick={displaysearch} className="searchicon" width={22} height={22} src={icon2} alt="" />
        <img className="shopping_bag" width={30} height={30} src={icon1} alt="" />
      </div>
      <h1></h1>
      <div className='index_center_content'>
        <h2>Gadgets Hub</h2>
        <h3>Welcom to Gadgets-hub, not the secret hub you know.</h3>
        <p>Unleash the AI beast with phenomenal gadgets tech, like computer tower, gaming boards, electrons parts repair, and more... </p>
        <button onClick={()=>{buylink('/products')}}>Buy now</button>
      </div>
      <ul className="socialmedia_icon_holder">
        <li><img src={icon3} alt='icon3' width={27} height={27}/></li>
        <li><img src={icon4} alt='icon3' width={27} height={27}/></li>
        <li><img src={icon5} alt='icon3' width={27} height={27}/></li>
        <li><img src={icon6} alt='icon3' width={27} height={27}/></li>
      </ul>
      <div className='imager'><img src="https://i.pinimg.com/564x/e4/29/ba/e429bac6e281d4ead9c6b78eb15bc89c.jpg" alt='pic' width={480} height={505}/></div>
    </div>
  );
}