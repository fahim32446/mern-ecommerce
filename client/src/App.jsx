import React from 'react'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Success from './pages/Success'
import {useSelector} from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route,  
  Navigate,
} from "react-router-dom";



const App = () => {
const user = useSelector((state)=> state.user.currentUser);

  
  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route exact path="/product/:id" element={<Product />} />

        <Route exact path="products" element={<ProductList />} />

        <Route exact path="products/:category" element={<ProductList />} />

        <Route exact path="/register" element={<Register />} />

        <Route exact path='/login' element={user ? <Navigate to="/" /> : <Login />} />

        <Route exact path='cart' element={<Cart />} />

        <Route exact path='/success' element={<Success />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App