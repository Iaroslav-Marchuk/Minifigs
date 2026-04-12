import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

import { Heart } from 'lucide-react';

import head from '../../assets/icons/icons-head-24.png';

import css from './Navigation.module.css';

import ModalOverlay from '../ModalOverlay/ModalOverlay.jsx';
import Auth from '../Auth/Auth.jsx';
import { useModal } from '../../context/ModalContext/UseModal.jsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors.js';

function Navigation() {
  const { isModalOpen, openModal, closeModal } = useModal();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <nav className={css.navigation}>
      <NavLink
        to="/mycollection"
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
      >
        My colletcion
      </NavLink>
      <NavLink
        to="/minifigs"
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
      >
        Catalog
      </NavLink>
      <NavLink
        to="/wishlist"
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
      >
        <Heart />
      </NavLink>

      {isLoggedIn ? (
        <span className={css.userName}>Welcome, {user.name}</span>
      ) : (
        <button type="button" className={css.btn} onClick={openModal}>
          Sign In
        </button>
      )}

      <NavLink className={css.avatar}>
        <img src={head} alt="head-icon" className={css.icon} />
      </NavLink>

      <ModalOverlay isOpen={isModalOpen} onClose={closeModal}>
        <Auth />
      </ModalOverlay>
    </nav>
  );
}

export default Navigation;
