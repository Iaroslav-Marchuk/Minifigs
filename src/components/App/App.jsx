import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../Layout/Layout.jsx';
import GlobalLoader from '../GlobalLoader/GlobalLoader.jsx';

import { selectIsRefreshing } from '../../redux/auth/selectors.js';
import { refreshSession } from '../../redux/auth/operations.js';
import RestrictedRoute from '../RestrictedRoute.jsx';
import PrivateRoute from '../PrivateRoute.jsx';

const CatalogPage = lazy(
  () => import('../../pages/CatalogPage/CatalogPage.jsx')
);
const FigurePage = lazy(() => import('../../pages/FigurePage/FigurePage.jsx'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage.jsx'));
const MainPage = lazy(() => import('../../pages/MainPage/MainPage.jsx'));
const MyCollectionPage = lazy(
  () => import('../../pages/MyCollectionPage/MyCollectionPage.jsx')
);
const NotFoundPage = lazy(
  () => import('../../pages/NotFoundPage/NotFoundPage.jsx')
);

const RegisterPage = lazy(
  () => import('../../pages/RegisterPage/RegisterPage.jsx')
);
const WishListPage = lazy(
  () => import('../../pages/WishListPage/WishListPage.jsx')
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshSession());
  }, [dispatch]);

  return isRefreshing ? (
    <GlobalLoader />
  ) : (
    <Suspense fallback={<GlobalLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/minifigs" element={<CatalogPage />} />
          <Route path="/minifigs/:id" element={<FigurePage />} />

          <Route
            path="/mycollection"
            element={<PrivateRoute element={<MyCollectionPage />} />}
          />
          <Route
            path="/wishlist"
            element={<PrivateRoute element={<WishListPage />} />}
          />
        </Route>

        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/" element={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/" element={<LoginPage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
