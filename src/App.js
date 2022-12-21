import './App.css';
import React from 'react';

import Background from './components/UI/Background';
import Navbar from './components/Layout/Navbar';
import HomeHeader from './components/Layout/HomeHeader';
import TourList from './components/Tour/TourList';
import Cart from './components/Cart/Cart';

import { ModulesSwitcherContext } from './store/ModulesSwitcherProvider';
import TooltipContextProvider from './store/TooltipProvider';

import { useContext } from 'react';

function App() {
  const modulesContext = useContext(ModulesSwitcherContext);

  return (
    <Background>
      <Navbar></Navbar>
      {modulesContext.header && <HomeHeader></HomeHeader>}

      <TooltipContextProvider>
        {modulesContext.tourList && <TourList></TourList>}
        {modulesContext.cart && <Cart></Cart>}
      </TooltipContextProvider>
    </Background>
  );
}

export default App;
