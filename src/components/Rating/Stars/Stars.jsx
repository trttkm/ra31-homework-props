import PropTypes from 'prop-types';
import { StarItem } from './StarItem/StarItem';
import './Stars.css';

export function Stars({ count }) {
  const arrayOfStars = [];
  for (let i = 0; i < count; i++) {
    arrayOfStars.push(<StarItem />);
  }
  
  return count > 0 && count < 6 ? (
    <ul className="card-body-stars">
      {arrayOfStars.map(star => (
        star
      ))}
    </ul>
  ) : null;
}

Stars.propTypes = {
  count: PropTypes.number,
};
