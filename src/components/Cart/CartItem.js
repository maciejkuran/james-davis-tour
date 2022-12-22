import classes from './CartItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import PrimaryButton from '../UI/PrimaryButton';
import { TooltipContext } from '../../store/TooltipProvider';
import { CartContext } from '../../store/CartContextProvider';
import { useContext, useRef, useEffect, useState } from 'react';

const CartItem = props => {
  const tooltipContext = useContext(TooltipContext);
  const tooltipBtnRef = useRef();
  const [tooltipBtnNodeLoaded, setTooltipBtnNodeLoaded] = useState('');

  const [quantityInput, setQuantityInput] = useState({
    vip: '',
    standard: '',
  });

  const cartContext = useContext(CartContext);

  const removeItemHandler = () => {
    cartContext.removeItem(props.id, props.total);
  };

  useEffect(() => {
    setTooltipBtnNodeLoaded(tooltipBtnRef.current);
  }, []);

  useEffect(() => {
    setQuantityInput(() => {
      return { vip: props.vipQuantity, standard: props.standardQuantity };
    });
  }, [props.vipQuantity, props.standardQuantity]);

  return (
    <li className={classes.list}>
      <div>
        <p>
          <span className={`${classes.list__text}`}>{props.city}</span>
          <span className={`${classes.list__text} ${classes['list__text--date']}`}>
            {props.date}
          </span>
        </p>
        <p className={`${classes.list__text} ${classes['list__text--address']}`}>{props.address}</p>
      </div>

      <div className={classes.list__wrapper}>
        <div className={classes['list__wrapper__internal']}>
          <button
            ref={tooltipBtnRef}
            onMouseLeave={tooltipContext.onHideTooltip}
            onMouseEnter={tooltipContext.onShowTooltip.bind(
              null,
              props.tooltip,
              tooltipBtnNodeLoaded
            )}
            className={classes['list__button--tooltip']}
            type="button"
          >
            <FontAwesomeIcon icon={faCircleInfo} />
          </button>
          <div>
            <div>
              <span className={classes.list__text}>VIP</span>
              <span className={classes['list__text--quantity']}>
                {quantityInput.vip !== '' ? 'x' + quantityInput.vip : 'x0'}
              </span>
            </div>
            <span className={`${classes.list__text} ${classes['list__text--cost']}`}>$150</span>
          </div>
        </div>

        <div>
          <div>
            <div>
              <span className={classes.list__text}>STANDARD</span>
              <span className={classes['list__text--quantity']}>
                {quantityInput.standard !== '' ? 'x' + quantityInput.standard : 'x0'}
              </span>
            </div>
            <span className={`${classes.list__text} ${classes['list__text--cost']}`}>$35</span>
          </div>
        </div>

        <PrimaryButton attributes={{ type: 'button', onClick: removeItemHandler }}>
          REMOVE
        </PrimaryButton>
      </div>
    </li>
  );
};

export default CartItem;
