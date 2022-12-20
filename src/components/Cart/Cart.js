import classes from './Cart.module.css';

import Card from '../UI/Card';
import ListItem from '../Layout/ListItem';
import PrimaryButton from '../UI/PrimaryButton';

import { ModulesSwitcherContext } from '../../store/ModulesSwitcherProvider';

import { useContext } from 'react';

const Cart = props => {
  const modulesContext = useContext(ModulesSwitcherContext);

  return (
    <Card className={classes.cart}>
      <h2>Cart</h2>
      <ListItem
        buttonName="+ADD"
        city="Placeholder"
        date="23 January"
        address="Fałata 17"
        vip="178"
        standard="20"
      ></ListItem>

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
