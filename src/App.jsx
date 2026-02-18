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

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path='/productListing' element={<ProductListing />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>

      {/* Footer */}
      <Footer />

      <QuickProductDetail />

      <CartDrawer />
    </>
  )
}

export default App
