import './ListingItem.css';
import PropTypes from 'prop-types';
import { Stars } from '../../Rating/Stars/Stars';

export function ListingItem({ item }) {
  
  item.title = item.title.length < 50 ? item.title : item.title.slice(0, 50) + '...';
  
  let priceWithCurrency;
  if (item.currency_code === 'USD') {
    priceWithCurrency = '$' + item.price;
  } else if (item.currency_code === 'EUR') {
    priceWithCurrency = '€' + item.price;
  } else {
    priceWithCurrency = item.price + ' ' + item.currency_code;
  }
  
  let level;
  if (item.quantity <= 10) {
    level = 'low';
  } else if (item.quantity <= 20) {
    level = 'medium';
  } else {
    level = 'high';
  }
  
  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage?.url_570xN} alt={item.title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{item.title}</p>
        <p className="item-price">{priceWithCurrency}</p>
        <p className={`item-quantity level-${level}`}>{item.quantity} left</p>
      </div>
    </div>
  );
}

ListingItem.propTypes = {
  item: PropTypes.object,
};
