import logo from './logo.svg';
import './App.css';
import React from 'react';

import Background from './components/UI/Background';
import Navbar from './components/Layout/Navbar';
import HomeHeader from './components/Layout/HomeHeader';
import List from './components/List/List';

function App() {
  return (
    <Background>
      <Navbar></Navbar>
      {/* <HomeHeader></HomeHeader> */}
      <List></List>
    </Background>
  );
}

export default App;
