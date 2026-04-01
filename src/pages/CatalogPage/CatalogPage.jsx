import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card.jsx';
import Container from '../../components/Container/Container.jsx';
import Section from '../../components/Section/Section.jsx';
import { selectAllMinifigs } from '../../redux/minifigs/selectors.js';

import css from './CatalogPage.module.css';
import { useEffect } from 'react';
import { getAllMinifigs } from '../../redux/minifigs/operations.js';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import { useSearchParams } from 'react-router-dom';

function CatalogPage() {
  const dispatch = useDispatch();
  const minifigs = useSelector(selectAllMinifigs);

  const [query] = useSearchParams();

  useEffect(() => {
    const params = {
      page: Number(query.get('page')) || 1,
      search: query.get('name') || query.get('fig_num') || undefined,
      themeId: query.get('theme') || undefined,
    };

    dispatch(getAllMinifigs(params));
  }, [dispatch, query]);

  return (
    <Section>
      <Container>
        <SearchBox />

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
