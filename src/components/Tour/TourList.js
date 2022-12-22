import classes from './TourList.module.css';
import { events } from '../../store/tourData';
import Card from '../UI/Card';
import TourListItem from './TourListItem';
import Tooltip from '../UI/Tooltip';
import { TooltipContext } from '../../store/TooltipProvider';

import { useContext, useRef, useEffect, useState } from 'react';

const TourList = props => {
  const tooltipContext = useContext(TooltipContext);

  const [tooltipNodeLoaded, setTooltipNodeLoaded] = useState('');
  const tooltipRef = useRef();

  useEffect(() => {
    setTooltipNodeLoaded(tooltipRef.current);
  }, []);

  return (
    <Card className={`${classes.container} ${props.className}`}>
      <h2>USA TOUR 2023</h2>
      <ul className={classes.list}>
        {events.map(event => {
          return (
            <TourListItem
              tooltip={tooltipNodeLoaded}
              city={event.city}
              date={event.date}
              address={event.address}
              vip={event.vip}
              standard={event.standard}
              id={event.id}
              key={event.date}
            ></TourListItem>
          );
        })}
      </ul>

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

export default TourList;
