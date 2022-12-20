import React, { createContext, useState } from 'react';

const defaultContextValues = {
  modules: '',
  onShowHeader: '',
  onShowTourList: '',
  onShowCart: '',
};

export const ModulesSwitcherContext = createContext({
  ...defaultContextValues,
});

const ModulesSwitcherProvider = props => {
  const [modules, setModules] = useState({
    header: true,
    tourList: false,
    cart: false,
  });

  const showHeaderHandler = () => {
    setModules(() => {
      return { header: true, tourList: false, cart: false };
    });
  };

  const showTourListHandler = () => {
    setModules(() => {
      return { header: false, tourList: true, cart: false };
    });
  };

  const showCartHandler = () => {
    setModules(() => {
      return { header: false, tourList: false, cart: true };
    });
  };

  return (
    <ModulesSwitcherContext.Provider
      value={{
        header: modules.header,
        tourList: modules.tourList,
        cart: modules.cart,
        onShowHeader: showHeaderHandler,
        onShowTourList: showTourListHandler,
        onShowCart: showCartHandler,
      }}
    >
      {props.children}
    </ModulesSwitcherContext.Provider>
  );
};

export default ModulesSwitcherProvider;
