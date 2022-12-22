import classes from './Input.module.css';
import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  return (
    <input onChange={props.onChange} ref={ref} className={classes.input} {...props.input}></input>
  );
});

export default Input;
