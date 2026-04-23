import { NavLink, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Container from '../../components/Container/Container.jsx';
import Section from '../../components/Section/Section.jsx';
import Card from '../../components/Card/Card.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';

import {
  selectCollection,
  selectCollectionIsLoading,
  selectCollectionTotalPages,
} from '../../redux/collection/selectors.js';
import { getUserCollection } from '../../redux/collection/operations.js';

import css from './MyCollectionPage.module.css';

function MyCollectionPage() {
  const dispatch = useDispatch();

  const collection = useSelector(selectCollection);
  const isCollectionLoading = useSelector(selectCollectionIsLoading);
  const totalPages = useSelector(selectCollectionTotalPages);
  const hasMoreThan1Page = totalPages > 1;
  const showBottomPagination = hasMoreThan1Page && collection.length >= 6;

  const [query, setQuery] = useSearchParams();
  const page = Number(query.get('page')) || 1;

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

    dispatch(getUserCollection(params));
  }, [dispatch, query]);

  if (isCollectionLoading) {
    return (
      <Section>
        <Container>
          <h2 className={css.title}>My Collection</h2>
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
        <h2 className={css.title}>My Collection</h2>
        <SearchBox />
        {hasMoreThan1Page && (
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}

        {collection.length > 0 ? (
          <ul className={css.grid}>
            {collection.map(fig => (
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

export default MyCollectionPage;
