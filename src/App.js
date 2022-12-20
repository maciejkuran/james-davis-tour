import logo from './logo.svg';
import './App.css';
import React from 'react';

import Background from './components/UI/Background';
import Navbar from './components/Layout/Navbar';
import HomeHeader from './components/Layout/HomeHeader';
import TourList from './components/Tour/TourList';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Background>
      <Navbar></Navbar>
      {/* <HomeHeader></HomeHeader> */}
      {/* <TourList></TourList> */}
      <Cart></Cart>
    </Background>
  );
}

export default App;
