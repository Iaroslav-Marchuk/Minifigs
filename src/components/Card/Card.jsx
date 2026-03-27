import { Heart, Star } from 'lucide-react';

import css from './Card.module.css';

function Card({ fig }) {
  return (
    <div className={css.card}>
      <img src={fig.img_url} alt={fig.name} />
      <div className={css.wrapper}>
        <h3 className={css.cardTitle}>{fig.name}</h3>
        <span className={css.span}>{fig.fig_num}</span>
        <div className={css.iconWrapper}>
          <Star strokeWidth={1.5} />
          <Heart strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}

export default Card;
