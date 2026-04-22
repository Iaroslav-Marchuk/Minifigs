import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/auth/selectors.js';

import { useModal } from '../context/ModalContext/UseModal.jsx';

const PrivateRoute = ({ element }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const { openModal } = useModal();

  useEffect(() => {
    if (!isRefreshing && !isLoggedIn) {
      openModal();
    }
  }, [isLoggedIn, isRefreshing, openModal]);

  if (isRefreshing) return null;
  if (!isLoggedIn) return <Navigate to="/" />;

  return element;
};

export default PrivateRoute;
