import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Collection from './pages/collection'
import About from './pages/About'
import Cart from './pages/cart'
import Contact from './pages/contact'
import Home from './pages/home'
import Login from './pages/login'
import Orders from './pages/orders'
import PlaceOrder from './pages/placeOrder'
import Product from './pages/product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



export default function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
 <Routes>
  <Route path='/'  element={<Home/>} />
  <Route path='/collection' element={<Collection/>}/>
  <Route path='/about'  element={<About/>} />
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/contact'  element={<Contact/>} />
  <Route path='/login' element={<Login/>}/>
  <Route path='/orders'  element={<Orders/>} />
  <Route path='/placeOrder' element={<PlaceOrder/>}/>
  <Route path='/product/:productId'  element={<Product/>} />
 </Routes>
 <Footer/>
    </div>
  );
}
