import React,{ useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Home/Navbar';
import Hero from './Pages/Home/Hero';
import Content from './Pages/Home/Content';
import Collections from './Pages/Home/Collections';
import Products from './Pages/Home/Products';
import OneProduct from './Pages/Home/OneProduct';
import Footer from './Pages/Footer';
import ProductDetail from './Pages/Products/ProductDetail';
import ScrollToTop from './ScrollToTop';
import Cart from './Pages/Cart/Cart';
import Wishlist from './Pages/Wishlist/Wishlist';
import NewArrival from './Pages/Home/NewArrival';
import NewArrivalPage from './Pages/New Arrival/NewArrivalPage';
import Whatsapp from './Pages/Whatsapp';
import Login from './Pages/Auth/login';
import Register from './Pages/Auth/Register';
import Return from './Pages/Return/Return';
import AllProducts from './Pages/Products/AllProducts';
import User from './Pages/User/User';
import MyOrders from './Pages/User/myOrders/MyOrders';
import HotDeals from './Pages/Hot Deals/HotDeals';
import AboutUs from './Pages/Footer pages/AboutUs';
import TnC from './Pages/Footer pages/TnC';
import ReturnPolicy from './Pages/Footer pages/ReturnPolicy';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import Checkout from './Pages/Cart/Checkout';

function App() {
  const [countcart, setCountcart] = useState(0);
  const [countwish, setCountwish] = useState(0);
  const [selectedcartItems, setSelectedcartItems] = useState([]);
  const [selectedwishItems, setSelectedwishItems] = useState([]);

  const addtocart = (item) =>{
    setCountcart(countcart+1);
    setSelectedcartItems([...selectedcartItems,item]);
  }
  const removecart = (itemToRemove) =>{
    setCountcart(countcart-1);
    const updatedItems = selectedcartItems.filter((item) => item !== itemToRemove);
    setSelectedcartItems(updatedItems);
  }

  const addwish = (item) =>{
    setCountwish(countwish+1);
    setSelectedwishItems([...selectedwishItems,item]);
  }
  const removewish = (itemToRemove) =>{
    const updatedItems = selectedwishItems.filter((item) => item!== itemToRemove);
    setSelectedwishItems(updatedItems);
    setCountwish(countwish-1);
  }
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <Hero/>
            <Whatsapp/>
            <Content addwish={addwish}/>
            <Collections/>
            <Products addwish={addwish}/>
            <OneProduct addtocart={addtocart} addwish={addwish}/>
            <NewArrival/>
            <Footer/>
          </>
        }/>
        <Route path='/product/:id' element={
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <ProductDetail addtocart={addtocart} addwish={addwish}/>
            <Footer/>
          </>
        }/>
        <Route path='/cart' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <Cart selectedItems={selectedcartItems} removecart={removecart}/>
            <Footer/>
          </>
        }/>
        <Route path='/checkout' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <Checkout selectedItems={selectedcartItems}/>
            <Footer/>
          </>
        }/>
        <Route path='/wish' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <Wishlist selectedItems={selectedwishItems} removewish={removewish}/>
            <Footer/>
          </>
        }/>
        <Route path='/newarrival' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <NewArrivalPage/>
            <Footer/>
          </>
        }/>
        <Route path='/login' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <Login/>
            <Footer/>
          </>
        }/>
        <Route path='/register' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <Register/>
            <Footer/>
          </>
        }/>
        <Route path='/return' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <Return/>
            <Footer/>
          </>
        }/>
        <Route path='/allproduct' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <AllProducts/>
            <Footer/>
          </>
        }/>
        <Route path='/user' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <User/>
            <Footer/>
          </>
        }/>
        <Route path='/hotdeals' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <HotDeals/>
            <Footer/>
          </>
        }/>
        <Route path='/about' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <AboutUs/>
            <Footer/>
          </>
        }/>
        <Route path='/terms' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <TnC/>
            <Footer/>
          </>
        }/>
        <Route path='/returnpolicy' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <ReturnPolicy/>
            <Footer/>
          </>
        }/>
        <Route path='/forgotpassword' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <ForgotPassword/>
            <Footer/>
          </>
        }/>
        <Route path='/myorders' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <MyOrders/>
            <Footer/>
          </>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
