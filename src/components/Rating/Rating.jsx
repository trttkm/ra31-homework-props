import { useState } from 'react';
import { Stars } from './Stars/Stars';
import './Rating.css';

export function Rating() {
  const [count, setCount] = useState(0);
  
  const updateRating = (e) => {
    setCount(e.target.value);
  };
  
  return (
    <div className="rating-container">
      <label htmlFor="rating">Введите рейтинг</label>
      <br />
      <input id="rating" value={count} onChange={updateRating} />
      <Stars count={count} />
    </div>
  );
}
