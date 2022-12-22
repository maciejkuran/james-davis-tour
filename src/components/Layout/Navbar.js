import classes from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { ModulesSwitcherContext } from '../../store/ModulesSwitcherProvider';
import { CartContext } from '../../store/CartContextProvider';

import { useContext } from 'react';

const Navbar = props => {
  const modulesContext = useContext(ModulesSwitcherContext);

  const cartContext = useContext(CartContext);

  return (
    <nav className={classes.nav}>
      <div className={classes['nav__internal-wrapper']}>
        <h3 onClick={modulesContext.onShowHeader}>JAMES DAVIS</h3>
        <div className={classes['nav__cart']}>
          <button onClick={modulesContext.onShowCart}>
            <FontAwesomeIcon icon={faCartShopping} />
            {cartContext.items.length >= 1 && (
              <div className={classes['nav__cart__amount-label']}>{cartContext.items.length}</div>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
