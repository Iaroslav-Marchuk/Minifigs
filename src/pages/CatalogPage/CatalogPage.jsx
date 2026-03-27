import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card.jsx';
import Container from '../../components/Container/Container.jsx';
import Section from '../../components/Section/Section.jsx';
import { selectAllMinifigs } from '../../redux/minifigs/selectors.js';

import css from './CatalogPage.module.css';
import { useEffect } from 'react';
import { getAllMinifigs } from '../../redux/minifigs/operations.js';

function CatalogPage() {
  const dispatch = useDispatch();
  const minifigs = useSelector(selectAllMinifigs);

  useEffect(() => {
    dispatch(getAllMinifigs());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <p>CatalogPage</p>

        <ul className={css.grid}>
          {minifigs.map(fig => (
            <li key={fig._id}>
              <Card fig={fig} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export default CatalogPage;
