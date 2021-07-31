import PropTypes from 'prop-types';
import { StarItem } from './StarItem/StarItem';
import './Stars.css';

export function Stars({ count }) {
  const stars = Array.from({ length: count }, () => <StarItem />);
  
  return count > 0 && count < 6 ? (
    <ul className="card-body-stars">
      {stars}
    </ul>
  ) : null;
}

Stars.propTypes = {
  count: PropTypes.number,
};
