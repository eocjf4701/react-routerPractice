import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import ProductPage from './page/Productpage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [authenticate, setAuthenticate] = useState(true);
  // 함수가 아니라 컴포넌트임 (컴포넌트는 첫글자 대문자 붙임.)
  const PrivateRoute = () => {
    return authenticate == true ? <UserPage /> : <Navigate to="/login" />;
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/products/:id/:number' element={<ProductDetailPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </>
  );
}

export default App;
