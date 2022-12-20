import classes from './TourList.module.css';

import Card from '../UI/Card';
import TourListItem from './TourListItem';
import Tooltip from '../UI/Tooltip';
import { useState } from 'react';

const List = () => {
  const [activeTooltip, setActiveTooltip] = useState(false);

  const showTooltipHandler = element => {
    setActiveTooltip(true);
  };

  const hideTooltipHandler = () => {
    setActiveTooltip(false);
  };

  return (
    <Card className={classes.container}>
      <h2>USA TOUR 2023</h2>
      <ul className={classes.list}>
        <TourListItem
          onShowTooltip={showTooltipHandler}
          onHideTooltip={hideTooltipHandler}
          buttonName="+ADD"
        ></TourListItem>
      </ul>

      {activeTooltip && (
        <Tooltip>
          <ul>
            <li>Meet & Greet</li>
            <li>Backstage Green Room Hang and Polaroid Photo Shoot with James Davis</li>
            <li>Access to Pre-show Soundcheck Performance and Q&A</li>
            <li>Venue First Entry (where applicable)</li>
          </ul>
        </Tooltip>
      )}
    </Card>
  );
};

export default List;