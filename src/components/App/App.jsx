import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../Layout/Layout.jsx';
import GlobalLoader from '../GlobalLoader/GlobalLoader.jsx';

import { selectIsRefreshing } from '../../redux/auth/selectors.js';
import { refreshSession } from '../../redux/auth/operations.js';
import RestrictedRoute from '../RestrictedRoute.jsx';
import PrivateRoute from '../PrivateRoute.jsx';
import { Toaster } from 'react-hot-toast';
import SettingsPage from '../../pages/SettingsPage/SettingsPage.jsx';
import { getUserCollection } from '../../redux/collection/operations.js';
import { getUserWishList } from '../../redux/wishList/operations.js';
import TermsOfServicePage from '../../pages/TermsOfServicePage/TermsOfServicePage.jsx';
import PrivacyPolicyPage from '../../pages/PrivacyPolicyPage/PrivacyPolicyPage.jsx';

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
const RequestResetTokenPage = lazy(
  () => import('../../pages/RequestResetTokenPage/RequestResetTokenPage.jsx')
);
const ResetPasswordPage = lazy(
  () => import('../../pages/ResetPasswordPage/ResetPasswordPage.jsx')
);

const GoogleOAuthCallbackPage = lazy(
  () =>
    import('../../pages/GoogleOAuthCallbackPage/GoogleOAuthCallbackPage.jsx')
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(refreshSession());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(refreshSession()).then(result => {
      if (result.meta.requestStatus === 'fulfilled') {
        dispatch(getUserCollection({ page: 1 }));
        dispatch(getUserWishList({ page: 1 }));
      }
    });
  }, [dispatch]);

  return isRefreshing ? (
    <GlobalLoader />
  ) : (
    <Suspense fallback={<GlobalLoader />}>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/minifigs" element={<CatalogPage />} />
          <Route path="/minifigs/:id" element={<FigurePage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />

          <Route
            path="/mycollection"
            element={<PrivateRoute element={<MyCollectionPage />} />}
          />
          <Route
            path="/wishlist"
            element={<PrivateRoute element={<WishListPage />} />}
          />

          <Route
            path="/settings"
            element={<PrivateRoute element={<SettingsPage />} />}
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

        <Route
          path="/request-reset-email"
          element={<RequestResetTokenPage />}
        />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        <Route
          path="/confirm-google-auth"
          element={<GoogleOAuthCallbackPage />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
