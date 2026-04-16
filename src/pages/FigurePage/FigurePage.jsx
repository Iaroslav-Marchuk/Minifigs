import Container from '../../components/Container/Container.jsx';
import Section from '../../components/Section/Section.jsx';

import { Heart, ImageOff, Star } from 'lucide-react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentMinifig,
  selectCurrentMinifigIsLoading,
  selectSets,
  selectSetsIsLoading,
} from '../../redux/minifigs/selectors.js';
import { useEffect, useState } from 'react';
import {
  getMinifigById,
  getSetsByFigNum,
} from '../../redux/minifigs/operations.js';

import Set from '../../components/Set/Set.jsx';

import css from './FigurePage.module.css';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { selectCollection } from '../../redux/collection/selectors.js';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import { useModal } from '../../context/ModalContext/UseModal.jsx';
import {
  addItemToUserCollection,
  deleteItemFromUserCollection,
} from '../../redux/collection/operations.js';
import toast from 'react-hot-toast';
import { selectWishList } from '../../redux/wishList/selectors.js';
import {
  addItemToUserWishList,
  deleteItemFromUserWishList,
} from '../../redux/wishList/operations.js';

function FigurePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentMinifig = useSelector(selectCurrentMinifig);
  const isCurrentFigIsLoading = useSelector(selectCurrentMinifigIsLoading);
  const isSetsLoading = useSelector(selectSetsIsLoading);
  const sets = useSelector(selectSets);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { openModal } = useModal();

  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    dispatch(getMinifigById(id));
    dispatch(getSetsByFigNum(id));
  }, [dispatch, id]);

  const collection = useSelector(selectCollection);
  const inCollection = collection.some(item => item._id === id);

  const wishList = useSelector(selectWishList);
  const inWishList = wishList.some(item => item._id === id);

  const handleCollection = () => {
    if (!isLoggedIn) {
      openModal();
      return;
    }
    if (inCollection) {
      dispatch(deleteItemFromUserCollection(id));
      toast.error('Removed from collection!');
    } else {
      dispatch(addItemToUserCollection(id));
      toast.success('Added to collection!');
    }
  };

  const handleWishList = () => {
    if (!isLoggedIn) {
      openModal();
      return;
    }
    if (inWishList) {
      dispatch(deleteItemFromUserWishList(id));
      toast.error('Removed from wish list!');
    } else {
      dispatch(addItemToUserWishList(id));
      toast.success('Added to wish list!');
    }
  };

  if (isCurrentFigIsLoading || !currentMinifig) {
    return (
      <Section>
        <Container className={css.container}>
          <Skeleton variant="text" width="40%" height={40} />
          <div className={css.wrapper}>
            <Skeleton variant="rectangular" width={300} height={300} />
            <div className={css.rigthSide}>
              <Skeleton variant="text" width="30%" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" width="60%" />
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container className={css.container}>
        <h2 className={css.title}>{currentMinifig.name}</h2>
        <div className={css.wrapper}>
          <div className={css.leftSide}>
            {currentMinifig.img_url && !imgError ? (
              <img
                src={currentMinifig.img_url}
                alt={currentMinifig.name}
                onError={() => setImgError(true)}
              />
            ) : (
              <div className={css.noResults}>
                <ImageOff size={48} strokeWidth={2} />
              </div>
            )}
          </div>
          <div className={css.rigthSide}>
            <h3 className={css.subtitle}>{currentMinifig.fig_num}</h3>
            <ul className={css.list}>
              <li className={css.item}>
                <span>{currentMinifig.name}</span>
              </li>
              <li className={css.item}>
                <span>Inventory: {currentMinifig.num_parts} parts</span>
              </li>
              <li className={css.item}>
                <span>Found in: {sets ? sets.length : 0} set(s)</span>
              </li>
            </ul>

            <button className={css.btn} onClick={handleCollection}>
              <Star
                strokeWidth={1.5}
                fill={inCollection ? 'currentColor' : 'none'}
              />
              {inCollection ? 'In my collection' : 'Add to my collection'}
            </button>

            <button className={css.btn} onClick={handleWishList}>
              <Heart
                strokeWidth={1.5}
                fill={inWishList ? 'currentColor' : 'none'}
              />
              {inWishList ? 'In my wish list' : 'Add to my wish list'}
            </button>
          </div>
        </div>
        <div className={css.setsSection}>
          <span className={css.setsLabel}>
            This figure appears in the following Sets:
          </span>

          <ul className={css.setsList}>
            {/* {sets?.length === 0 && <p className={css.aviso}>Sets not found!</p>}
            {sets &&
              sets.map(set => (
                <li key={set._id}>
                  <Set set={set} />
                </li>
              ))} */}

            {isSetsLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <li key={i}>
                  <Set isLoading />
                </li>
              ))
            ) : sets?.length === 0 ? (
              <p className={css.aviso}>Sets not found!</p>
            ) : (
              sets?.map(set => (
                <li key={set._id}>
                  <Set set={set} isLoading={isSetsLoading} />
                </li>
              ))
            )}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export default FigurePage;
