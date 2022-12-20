import './App.css';
import React from 'react';

import Background from './components/UI/Background';
import Navbar from './components/Layout/Navbar';
import HomeHeader from './components/Layout/HomeHeader';
import TourList from './components/Tour/TourList';
import Cart from './components/Cart/Cart';

import { ModulesSwitcherContext } from './store/ModulesSwitcherProvider';

import { useContext } from 'react';

function App() {
  const modulesContext = useContext(ModulesSwitcherContext);

  return (
    <Background>
      <Navbar></Navbar>
      {modulesContext.header && <HomeHeader></HomeHeader>}
      {modulesContext.tourList && <TourList></TourList>}
      {modulesContext.cart && <Cart></Cart>}
    </Background>
  );
}

export default App;
