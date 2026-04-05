import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card.jsx';
import Container from '../../components/Container/Container.jsx';
import Section from '../../components/Section/Section.jsx';
import {
  selectAllMinifigs,
  selectAllMinifigsIsLoading,
  selectTotalPages,
} from '../../redux/minifigs/selectors.js';

import css from './CatalogPage.module.css';
import { useEffect } from 'react';
import { getAllMinifigs } from '../../redux/minifigs/operations.js';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../components/Card/Pagination/pagination.jsx';

function CatalogPage() {
  const dispatch = useDispatch();
  const minifigs = useSelector(selectAllMinifigs);
  const isMinifigsLoading = useSelector(selectAllMinifigsIsLoading);
  const totalPages = useSelector(selectTotalPages);
  const hasMoreThan1Page = totalPages > 1;
  const showBottomPagination = hasMoreThan1Page && minifigs.length >= 6;

  const [query, setQuery] = useSearchParams();
  const page = Number(query.get('page')) || 1;
  // const perPage = Number(query.get('perPage')) || 10;
  // const sortBy = query.get('sortBy') || 'createdAt';
  // const sortOrder = query.get('sortOrder') || 'desc';

  // const [query] = useSearchParams();

  const handlePageChange = newPage => {
    query.set('page', newPage);
    setQuery(query);
  };

  useEffect(() => {
    const params = {
      page: Number(query.get('page')) || 1,
      search: query.get('name') || query.get('fig_num') || undefined,
      themeId: query.get('theme') || undefined,
    };

    dispatch(getAllMinifigs(params));
  }, [dispatch, query]);

  if (isMinifigsLoading) {
    return (
      <Section>
        <Container>
          <SearchBox />
          <ul className={css.grid}>
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i}>
                <Card isLoading />
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <SearchBox />
        {hasMoreThan1Page && (
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}

        {minifigs.length > 0 ? (
          <ul className={css.grid}>
            {minifigs.map(fig => (
              <li key={fig._id}>
                <Card fig={fig} />
              </li>
            ))}
          </ul>
        ) : (
          <p className={css.noResults}>No results!</p>
        )}

        {showBottomPagination && (
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </Container>
    </Section>
  );
}

export default CatalogPage;
