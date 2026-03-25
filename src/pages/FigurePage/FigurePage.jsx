import Container from '../../components/Container/Container.jsx';
import Section from '../../components/Section/Section.jsx';

import { Heart, Star } from 'lucide-react';

import css from './FigurePage.module.css';

function FigurePage() {
  // const [inCollection, setInCollection] = useState(figure.inCollection);

  // const handleCollection = async () => {
  //   setInCollection(prev => !prev);
  //   try {
  //     await api.toggleCollection(figure.id);
  //   } catch {
  //     setInCollection(prev => !prev);
  //   }
  // };

  return (
    <Section>
      <Container className={css.container}>
        <h2 className={css.title}>UFO Alien, Red</h2>
        <div className={css.wrapper}>
          <div className={css.leftSide}>
            <img
              src="https://cdn.rebrickable.com/media/sets/fig-000027/64041.jpg"
              alt="figure"
            />
          </div>
          <div className={css.rigthSide}>
            <h3 className={css.subtitle}>fig-000027</h3>
            <ul className={css.list}>
              <li className={css.item}>
                <span>Name: UFO Alien, Red</span>
              </li>
              <li className={css.item}>
                <span>Inventory: 5 partes</span>
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
