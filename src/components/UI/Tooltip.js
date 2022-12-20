import classes from './Tooltip.module.css';

import { forwardRef } from 'react';

const Tooltip = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={classes.tooltip}>
      {props.children}
    </div>
  );
});

export default Tooltip;
