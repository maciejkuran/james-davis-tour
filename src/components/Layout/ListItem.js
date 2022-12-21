import classes from './ListItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import PrimaryButton from '../UI/PrimaryButton';
import Input from '../UI/Input';
import { TooltipContext } from '../../store/TooltipProvider';
import { useContext, useRef, useEffect, useState } from 'react';

const ListItem = props => {
  const tooltipContext = useContext(TooltipContext);
  const tooltipBtnRef = useRef();
  const [tooltipBtnNodeLoaded, setTooltipBtnNodeLoaded] = useState('');

  useEffect(() => {
    setTooltipBtnNodeLoaded(tooltipBtnRef.current);
  }, []);

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
          <form>
            <div>
              <label className={classes.list__text}>VIP</label>
              <Input
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
          </form>
        </div>

        <div>
          <form>
            <div>
              <label className={classes.list__text}>STANDARD</label>
              <Input
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
          </form>
        </div>

        <PrimaryButton attributes={{ type: 'submit' }}>{props.buttonName}</PrimaryButton>
      </div>
    </li>
  );
};

export default ListItem;
