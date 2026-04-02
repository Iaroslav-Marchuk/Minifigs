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

function FigurePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentMinifig = useSelector(selectCurrentMinifig);
  const isCurrentFigIsLoading = useSelector(selectCurrentMinifigIsLoading);
  const isSetsLoading = useSelector(selectSetsIsLoading);
  const sets = useSelector(selectSets);

  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    dispatch(getMinifigById(id));
    dispatch(getSetsByFigNum(id));
  }, [dispatch, id]);

  // const [inCollection, setInCollection] = useState(figure.inCollection);

  // const handleCollection = async () => {
  //   setInCollection(prev => !prev);
  //   try {
  //     await api.toggleCollection(figure.id);
  //   } catch {
  //     setInCollection(prev => !prev);
  //   }
  // };

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

            <button className={css.btn}>
              <Star
                strokeWidth={1.5}
                // fill={inCollection ? 'currentColor' : 'none'}
              />
              {/* {inCollection ? 'In my collection' : 'Add to my collection'} */}
              Add to my collection
            </button>

            <button className={css.btn}>
              <Heart strokeWidth={1.5} />
              Add to my wishlist
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
