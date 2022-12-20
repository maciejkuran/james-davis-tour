import backgroundImg1 from '../../assets/img/james davis.jpg';
import backgroundImg2 from '../../assets/img/james davis 2.jpg';
import backgroundImg3 from '../../assets/img/james davis 3.jpg';

import ReactDOM, { createPortal } from 'react-dom';

import classes from './Background.module.css';

import { ModulesSwitcherContext } from '../../store/ModulesSwitcherProvider';

import { useContext } from 'react';

const Background = props => {
  const modulesContext = useContext(ModulesSwitcherContext);

  let backgroundMarkup;

  if (modulesContext.header) {
    backgroundMarkup = <img className={classes['main__background']} src={backgroundImg1}></img>;
  }

  if (modulesContext.tourList) {
    backgroundMarkup = <img className={classes['main__background']} src={backgroundImg2}></img>;
  }

  if (modulesContext.cart) {
    backgroundMarkup = <img className={classes['main__background']} src={backgroundImg3}></img>;
  }

  return (
    <main className={classes.main}>
      {props.children}
      {createPortal(backgroundMarkup, document.getElementById('background'))}
      <span className={classes['main__signature']}>James Davis</span>
    </main>
  );
};

export default Background;
