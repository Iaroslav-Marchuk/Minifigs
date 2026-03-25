import { Heart, Star } from 'lucide-react';

import css from './Card.module.css';

function Card() {
  return (
    <div className={css.card}>
      <img
        src="https://cdn.rebrickable.com/media/sets/fig-000027/64041.jpg"
        alt="figure"
      />
      <div className={css.wrapper}>
        <h3 className={css.cardTitle}>UFO Alien, Red</h3>
        <span className={css.span}>fig-000027</span>
        <div className={css.iconWrapper}>
          <Star strokeWidth={1.5} />
          <Heart strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}

export default Card;
