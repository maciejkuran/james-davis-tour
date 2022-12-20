import classes from './Cart.module.css';

import Card from '../UI/Card';
import TourListItem from '../Tour/TourListItem';
import PrimaryButton from '../UI/PrimaryButton';

import { ModulesSwitcherContext } from '../../store/ModulesSwitcherProvider';

import { useContext } from 'react';

const Cart = props => {
  const modulesContext = useContext(ModulesSwitcherContext);

  return (
    <Card className={classes.cart}>
      <h2>Cart</h2>
      <TourListItem buttonName="REMOVE"></TourListItem>
      <div className={classes.cart__wrapper}>
        <p>
          TOTAL: <span>$185</span>
        </p>
        <div className={classes['cart__wrapper__internal']}>
          <PrimaryButton
            onClick={modulesContext.onShowTourList}
            className={classes['cart__button']}
            attributes={{ type: 'button' }}
          >
            BACK
          </PrimaryButton>
          <PrimaryButton className={classes['cart__button']} attributes={{ type: 'submit' }}>
            CHECKOUT
          </PrimaryButton>
        </div>
      </div>
    </Card>
  );
};

export default Cart;
