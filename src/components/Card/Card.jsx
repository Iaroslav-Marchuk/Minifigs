import { Heart, ImageOff, Star } from 'lucide-react';

import css from './Card.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function Card({ fig, isLoading }) {
  const [imgError, setImgError] = useState(false);

  if (isLoading) {
    return (
      <Stack className={css.card}>
        <Skeleton variant="rectangular" height={200} />
        <Skeleton variant="text" sx={{ mt: 1 }} />
        <Skeleton variant="text" width="60%" />
      </Stack>
    );
  }

  return (
    <Link to={`/minifigs/${fig._id}`} className={css.card}>
      {fig.img_url && !imgError ? (
        <img
          src={fig.img_url}
          alt={fig.name}
          onError={() => setImgError(true)}
        />
      ) : (
        <div className={css.noResults}>
          <ImageOff size={48} strokeWidth={2} />
        </div>
      )}

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
