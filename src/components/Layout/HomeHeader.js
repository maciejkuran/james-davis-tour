import classes from './HomeHeader.module.css';

import PrimaryButton from '../UI/PrimaryButton';

const HomeHeader = () => {
  return (
    <header className={classes.header}>
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
        <PrimaryButton>BUY TICKETS</PrimaryButton>
      </div>
    </header>
  );
};

export default HomeHeader;
