import { Route, Routes } from 'react-router-dom';
import { Home, Blog, About, Products, Login, Promo} from './Barrels/barrel';
import { NavigationComponent } from './NavigationComponents';

export function Display() {
  return (
    <>
      <NavigationComponent/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blogs' element={<Blog />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/promotions' element={<Promo/>}/>
      </Routes>
    </>
  );
  
}