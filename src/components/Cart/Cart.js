import classes from './Cart.module.css';
import Card from '../UI/Card';
import CartItem from '../Cart/CartItem';
import PrimaryButton from '../UI/PrimaryButton';
import Tooltip from '../UI/Tooltip';
import { ModulesSwitcherContext } from '../../store/ModulesSwitcherProvider';
import { TooltipContext } from '../../store/TooltipProvider';
import { CartContext } from '../../store/CartContextProvider';
import { useContext, useRef, useEffect, useState } from 'react';

const Cart = props => {
  const modulesContext = useContext(ModulesSwitcherContext);
  const tooltipContext = useContext(TooltipContext);
  const cartContext = useContext(CartContext);

  const [tooltipNodeLoaded, setTooltipNodeLoaded] = useState('');
  const tooltipRef = useRef();

  useEffect(() => {
    setTooltipNodeLoaded(tooltipRef.current);
  }, []);

  return (
    <Card className={`${classes.cart} ${props.className}`}>
      <h2>Cart</h2>

      {cartContext.items.length > 0 ? (
        cartContext.items.map(item => {
          return (
            <CartItem
              tooltip={tooltipNodeLoaded}
              city={item.city}
              date={item.date}
              address={item.address}
              vipQuantity={item.vipQuantity}
              standardQuantity={item.standardQuantity}
              id={item.id}
              total={item.total}
              key={item.id}
            ></CartItem>
          );
        })
      ) : (
        <p className={classes['cart__error']}>No items in your cart.</p>
      )}

      <div className={classes.cart__wrapper}>
        <p>
          TOTAL: <span>${cartContext.total}</span>
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
