import { Heart, Star } from 'lucide-react';

import css from './Card.module.css';
import { Link } from 'react-router-dom';

function Card({ fig }) {
  return (
    <Link to={`/minifigs/${fig._id}`} className={css.card}>
      <img src={fig.img_url} alt={fig.name} />
      <div className={css.wrapper}>
        <h3 className={css.cardTitle}>{fig.name}</h3>
        <span className={css.span}>{fig.fig_num}</span>
        <div className={css.iconWrapper}>
          <Star strokeWidth={1.5} />
          <Heart strokeWidth={1.5} />
        </div>
      </div>
    </Link>
  );
}

export default Card;
