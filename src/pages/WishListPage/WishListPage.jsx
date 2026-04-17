import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container/Container.jsx';
import Section from '../../components/Section/Section.jsx';
import {
  selectWishList,
  selectWishListIsLoading,
  selectWishListTotalPages,
} from '../../redux/wishList/selectors.js';

import css from './WishListPage.module.css';
import { useEffect } from 'react';
import { getUserWishList } from '../../redux/wishList/operations.js';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';

import Pagination from '../../components/Pagination/pagination.jsx';
import { useSearchParams } from 'react-router-dom';
import Card from '../../components/Card/Card.jsx';

function WishListPage() {
  const dispatch = useDispatch();

  const wishList = useSelector(selectWishList);
  const isWishListLoading = useSelector(selectWishListIsLoading);
  const totalPages = useSelector(selectWishListTotalPages);

  const hasMoreThan1Page = totalPages > 1;
  const showBottomPagination = hasMoreThan1Page && wishList.length >= 6;

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

    dispatch(getUserWishList(params));
  }, [dispatch, query]);

  if (isWishListLoading) {
    return (
      <Section>
        <Container>
          <h2 className={css.title}>My Wish List</h2>
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
        <h2 className={css.title}>My Wish List</h2>
        <SearchBox />
        {hasMoreThan1Page && (
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}

        {wishList.length > 0 ? (
          <ul className={css.grid}>
            {wishList.map(fig => (
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

export default WishListPage;
