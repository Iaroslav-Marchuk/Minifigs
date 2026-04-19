import { Heart, ImageOff, Star } from 'lucide-react';

import css from './CardPreview.module.css';

function CardPreview({ fig }) {
  return (
    <div className={css.card}>
      <img src={fig.img_url} alt={fig.name} />
      <div className={css.wrapper}>
        <h3 className={css.cardTitle}>{fig.name}</h3>
        <span className={css.span}>{fig.fig_num}</span>
        <div className={css.iconWrapper}>
          <button className={css.btn}>
            <Star strokeWidth={1.5} />
          </button>

          <button className={css.btn}>
            <Heart strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPreview;
