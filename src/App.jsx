import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Home from './pages/home'
import Header from './components/Header'
import ProductListing from './pages/productListing'
import Footer from './components/Footer'
import ProductDetail from './pages/productDetail'
import QuickProductDetail from './components/QuickProductDetails'
import Register from './pages/register'
import CartDrawer from './components/CartDrawer'
import Cart from './pages/cart'
import Verify from './pages/verify'
import { Toaster } from 'react-hot-toast'
import ForgotPassword from './pages/forgotPassword'
import Checkout from './pages/checkout'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { fetchProfile } from './features/auth/authSlice'
import MyAccount from './pages/myAccount'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile())
  }, []);
  
  return (
    <>
      {/* Header */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path="/" element={<Home />} />
        <Route path='/productListing' element={<ProductListing />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path="/my-account" element={<MyAccount />}/>
      </Routes>

      {/* Footer */}
      <Footer />

      <QuickProductDetail />

      <CartDrawer />

      <Toaster />
    </>
  )
}

export default App
