import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Header from './components/Header'
import ProductListing from './pages/productListing'
import Footer from './components/Footer'
import ProductDetail from './pages/productDetail'


function App() {

  return (
    <>
      {/* Header */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/productListing' element={<ProductListing />}/>
        <Route path='/product/:id' element={<ProductDetail />}/>
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
