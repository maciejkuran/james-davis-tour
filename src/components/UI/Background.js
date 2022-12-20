import backgroundImg1 from '../../assets/img/james davis.jpg';
import backgroundImg2 from '../../assets/img/james davis 2.jpg';
import backgroundImg3 from '../../assets/img/james davis 3.jpg';

import ReactDOM, { createPortal } from 'react-dom';

import classes from './Background.module.css';

const Background = props => {
  return (
    <main className={classes.main}>
      {props.children}
      {createPortal(
        <img className={classes['main__background']} src={backgroundImg2}></img>,
        document.getElementById('background')
      )}
      <span className={classes['main__signature']}>James Davis</span>
    </main>
  );
};

export default Background;
