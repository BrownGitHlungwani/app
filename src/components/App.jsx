import { Route, Routes } from 'react-router-dom';
import { Home, Blog, About, Products, Login, Promo, OneBlog, Forgotpassword } from './Barrels/barrel';
import { NavigationComponent } from './NavigationComponents';

export function Display() {
  return (
    <>
      <NavigationComponent/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blogs' element={<Blog />}>
          <Route path=':id' element={<OneBlog/>}/>
        </Route>
        <Route path='/about' element={<About />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/promotions' element={<Promo/>}/>
        <Route path='/resetP' element={<Forgotpassword/>}/>
      </Routes>
    </>
  );
  
}