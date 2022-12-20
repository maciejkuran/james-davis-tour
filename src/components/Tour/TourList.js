import classes from './TourList.module.css';

import Card from '../UI/Card';
import TourListItem from './TourListItem';
import Tooltip from '../UI/Tooltip';

const List = () => {
  return (
    <Card className={classes.container}>
      <h2>USA TOUR 2023</h2>
      <ul className={classes.list}>
        <TourListItem buttonName="+ADD"></TourListItem>
        <TourListItem buttonName="+ADD"></TourListItem>
      </ul>

      <Tooltip>
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

export default List;
