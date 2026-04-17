import { Heart, ImageOff, Star } from 'lucide-react';

import css from './Card.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { selectCollection } from '../../redux/collection/selectors.js';
import { selectWishList } from '../../redux/wishList/selectors.js';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import { useModal } from '../../context/ModalContext/UseModal.jsx';
import {
  addItemToUserCollection,
  deleteItemFromUserCollection,
} from '../../redux/collection/operations.js';
import toast from 'react-hot-toast';
import {
  addItemToUserWishList,
  deleteItemFromUserWishList,
} from '../../redux/wishList/operations.js';

function Card({ fig, isLoading }) {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { openModal } = useModal();

  const [imgError, setImgError] = useState(false);

  const collection = useSelector(selectCollection);

  const inCollection = fig
    ? collection.some(item => item._id === fig._id)
    : false;

  const wishList = useSelector(selectWishList);
  const inWishList = fig ? wishList.some(item => item._id === fig._id) : false;

  const handleCollection = event => {
    event.stopPropagation();
    event.preventDefault();
    if (!isLoggedIn) {
      openModal();
      return;
    }
    if (inCollection) {
      dispatch(deleteItemFromUserCollection(fig._id));
      toast.error('Removed from collection!');
    } else {
      dispatch(addItemToUserCollection(fig._id));
      toast.success('Added to collection!');
    }
  };

  const handleWishList = event => {
    event.stopPropagation();
    event.preventDefault();
    if (!isLoggedIn) {
      openModal();
      return;
    }
    if (inWishList) {
      dispatch(deleteItemFromUserWishList(fig._id));
      toast.error('Removed from wish list!');
    } else {
      dispatch(addItemToUserWishList(fig._id));
      toast.success('Added to wish list!');
    }
  };

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
          <button className={css.btn} onClick={handleCollection}>
            <Star
              strokeWidth={1.5}
              fill={inCollection ? 'var(--blue)' : 'none'}
            />
          </button>

          <button className={css.btn} onClick={handleWishList}>
            <Heart
              strokeWidth={1.5}
              fill={inWishList ? 'var(--yellow)' : 'none'}
            />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Card;
