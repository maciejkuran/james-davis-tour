import classes from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { ModulesSwitcherContext } from '../../store/ModulesSwitcherProvider';

import { useContext } from 'react';

const Navbar = props => {
  const modulesContext = useContext(ModulesSwitcherContext);

  return (
    <nav className={classes.nav}>
      <div className={classes['nav__internal-wrapper']}>
        <h3 onClick={modulesContext.onShowHeader}>JAMES DAVIS</h3>
        <div className={classes['nav__cart']}>
          <button onClick={modulesContext.onShowCart}>
            <FontAwesomeIcon icon={faCartShopping} />
            <div className={classes['nav__cart__amount-label']}>1</div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
