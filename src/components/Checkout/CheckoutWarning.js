import classes from './CheckoutWarning.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const CheckoutWarning = props => {
  return (
    <div className={classes['checkout-warning']}>
      <p>🔴Checkout is unavailable. It's a demo version made for learning purposes.</p>
      <button onClick={props.onClick}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
    </div>
  );
};

export default CheckoutWarning;
