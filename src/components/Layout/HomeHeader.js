import classes from './HomeHeader.module.css';

import PrimaryButton from '../UI/PrimaryButton';
import { ModulesSwitcherContext } from '../../store/ModulesSwitcherProvider';

import { useContext } from 'react';

const HomeHeader = props => {
  const modulesContext = useContext(ModulesSwitcherContext);

  return (
    <header className={`${classes.header} ${props.className}`}>
      <h1>
        <span className={classes['header__h1--red']}>LIVE IN THE MOMENT</span>
        <br></br>
        <span className={classes['header__h1--white']}>UPCOMING USA TOUR 2023</span>
      </h1>
      <div className={classes['header__squares']}>
        <div
          className={[
            classes['header__squares__square--red'],
            classes['header__squares__square'],
          ].join(' ')}
        ></div>
        <div
          className={[
            classes['header__squares__square--black'],
            classes['header__squares__square'],
          ].join(' ')}
        ></div>
      </div>
      <div className={classes['header__button']}>
        <PrimaryButton onClick={modulesContext.onShowTourList}>BUY TICKETS</PrimaryButton>
      </div>
    </header>
  );
};

export default HomeHeader;
