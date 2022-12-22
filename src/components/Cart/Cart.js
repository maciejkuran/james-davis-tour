import classes from './Cart.module.css';
import Card from '../UI/Card';
import CartItem from '../Cart/CartItem';
import PrimaryButton from '../UI/PrimaryButton';
import Tooltip from '../UI/Tooltip';
import { ModulesSwitcherContext } from '../../store/ModulesSwitcherProvider';
import { TooltipContext } from '../../store/TooltipProvider';
import { useContext, useRef, useEffect, useState } from 'react';

const Cart = props => {
  const modulesContext = useContext(ModulesSwitcherContext);
  const tooltipContext = useContext(TooltipContext);

  const [tooltipNodeLoaded, setTooltipNodeLoaded] = useState('');
  const tooltipRef = useRef();

  useEffect(() => {
    setTooltipNodeLoaded(tooltipRef.current);
  }, []);

  return (
    <Card className={classes.cart}>
      <h2>Cart</h2>
      <CartItem
        tooltip={tooltipNodeLoaded}
        city="Placeholder"
        date="23 January"
        address="Fałata 17"
        vip="178"
        standard="20"
      ></CartItem>

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

      <Tooltip className={tooltipContext.activeTooltip ? 'tooltip--active' : ''} ref={tooltipRef}>
        <ul>
          <li>Meet & Greet</li>
          <li>Backstage Green Room Hang and Polaroid Photo Shoot with James Davis</li>
          <li>Access to Pre-show Soundcheck Performance and Q&A</li>
          <li>Venue First Entry (where applicable)</li>
        </ul>
      </Tooltip>
    </Card>
  );
};

export default Cart;
