import Container from '../../components/Container/Container.jsx';
import Section from '../../components/Section/Section.jsx';

import { Heart, Star } from 'lucide-react';

import css from './FigurePage.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentMinifig } from '../../redux/minifigs/selectors.js';
import { useEffect } from 'react';
import { getMinifigById } from '../../redux/minifigs/operations.js';

function FigurePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentMinifig = useSelector(selectCurrentMinifig);

  useEffect(() => {
    dispatch(getMinifigById(id));
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

  if (!currentMinifig) {
    return <p>Loading...</p>;
  }

  return (
    <Section>
      <Container className={css.container}>
        <h2 className={css.title}>{currentMinifig.name}</h2>
        <div className={css.wrapper}>
          <div className={css.leftSide}>
            <img src={currentMinifig.img_url} alt={currentMinifig.name} />
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
                <span>Found in: 2 sets</span>
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
        </div>
      </Container>
    </Section>
  );
}

export default FigurePage;
