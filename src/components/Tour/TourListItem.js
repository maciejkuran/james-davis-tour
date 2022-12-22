import classes from './TourListItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import PrimaryButton from '../UI/PrimaryButton';
import Input from '../UI/Input';
import { TooltipContext } from '../../store/TooltipProvider';
import { CartContext } from '../../store/CartContextProvider';
import { useContext, useRef, useEffect, useState } from 'react';

const TourListItem = props => {
  const tooltipContext = useContext(TooltipContext);
  const cartContext = useContext(CartContext);
  const tooltipBtnRef = useRef();
  const [tooltipBtnNodeLoaded, setTooltipBtnNodeLoaded] = useState('');

  useEffect(() => {
    setTooltipBtnNodeLoaded(tooltipBtnRef.current);
  }, []);

  const [input, setInput] = useState({
    vip: '',
    standard: '',
  });

  const inputVipHandler = e => {
    setInput(prev => {
      return { ...prev, vip: +e.target.value };
    });
  };

  const inputStandardHandler = e => {
    setInput(prev => {
      return { ...prev, standard: +e.target.value };
    });
  };

  const getDataOnSubmitHandler = e => {
    e.preventDefault();

    const data = {
      id: props.id,
      city: props.city,
      address: props.address,
      date: props.date,
      vipQuantity: input.vip,
      vipCost: 150 * input.vip,
      standardQuantity: input.standard,
      standardCost: 35 * input.standard,
      total: Number(150 * input.vip + 35 * input.standard),
    };
    //Make sure item is added if any of the values is not empty
    if (input.vip === 0 && input.standard === 0) return;

    if (input.vip !== '' || input.standard !== '') cartContext.addItem(data);
  };

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

      <form onSubmit={getDataOnSubmitHandler} className={classes.list__wrapper}>
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
              <label className={classes.list__text}>VIP</label>
              <Input
                onChange={inputVipHandler}
                input={{
                  type: 'number',
                  min: '1',
                  max: '5',
                  placeholder: '1',
                }}
              ></Input>
            </div>
            <span className={`${classes.list__text} ${classes['list__text--cost']}`}>
              ${props.vip}
            </span>
          </div>
        </div>

        <div>
          <div>
            <div>
              <label className={classes.list__text}>STANDARD</label>
              <Input
                onChange={inputStandardHandler}
                input={{
                  type: 'number',
                  min: '1',
                  max: '5',
                  placeholder: '1',
                }}
              ></Input>
            </div>
            <span className={`${classes.list__text} ${classes['list__text--cost']}`}>
              ${props.standard}
            </span>
          </div>
        </div>

        <PrimaryButton attributes={{ type: 'submit' }}>+ADD</PrimaryButton>
      </form>
    </li>
  );
};

export default TourListItem;
