import classes from './PrimaryButton.module.css';

const PrimaryButton = props => {
  return (
    <button
      onClick={props.onClick}
      {...props.attributes}
      className={`${classes.button} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default PrimaryButton;
