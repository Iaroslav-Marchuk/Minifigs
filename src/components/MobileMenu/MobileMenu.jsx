import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import clsx from 'clsx';
import { NavLink, useNavigate } from 'react-router-dom';

import ModalOverlay from '../ModalOverlay/ModalOverlay.jsx';
import Auth from '../Auth/Auth.jsx';

import { logoutUser } from '../../redux/auth/operations.js';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors.js';

import { useModal } from '../../context/ModalContext/UseModal.jsx';

import css from './MobileMenu.module.css';

function MobileMenu({ onClose }) {
  const { isModalOpen, openModal, closeModal } = useModal();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProtectedLink = e => {
    if (!isLoggedIn) {
      e.preventDefault();
      openModal();
    } else {
      onClose();
    }
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      toast.success('Logged out!');
      onClose();
      navigate('/');
    } catch (error) {
      toast.error('Error. ' + error);
    }
  };

  return (
    <nav className={css.navigation}>
      {isLoggedIn && (
        <span className={css.userName}>Welcome, {user?.name}</span>
      )}

      <NavLink
        to="/mycollection"
        onClick={handleProtectedLink}
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
      >
        My Colletcion
      </NavLink>

      <NavLink
        to="/minifigs"
        onClick={onClose}
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
      >
        Catalog
      </NavLink>

      <NavLink
        to="/wishlist"
        onClick={handleProtectedLink}
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
      >
        My Wish List
      </NavLink>

      {isLoggedIn ? (
        <>
          <NavLink
            to="/settings"
            onClick={onClose}
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
          >
            Settings
          </NavLink>
          <button className={css.link} onClick={handleLogout}>
            Exit
          </button>
        </>
      ) : (
        <button type="button" className={css.link} onClick={openModal}>
          Sign In
        </button>
      )}

      <ModalOverlay isOpen={isModalOpen} onClose={closeModal}>
        <Auth />
      </ModalOverlay>
    </nav>
  );
}

export default MobileMenu;
