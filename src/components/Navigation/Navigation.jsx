import { NavLink, useNavigate } from 'react-router-dom';

import clsx from 'clsx';

import { Heart } from 'lucide-react';

import head from '../../assets/icons/icons-head-24.png';

import css from './Navigation.module.css';

import ModalOverlay from '../ModalOverlay/ModalOverlay.jsx';
import Auth from '../Auth/Auth.jsx';
import { useModal } from '../../context/ModalContext/UseModal.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors.js';
import { useEffect, useRef, useState } from 'react';
import { logoutUser, resetUserPassword } from '../../redux/auth/operations.js';
import toast from 'react-hot-toast';

function Navigation() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProtectedLink = e => {
    if (!isLoggedIn) {
      e.preventDefault();
      openModal();
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    setIsDropdownOpen(false);
    toast.success('Logged out!');
    navigate('/');
  };

  const handleChangePassword = () => {
    setIsDropdownOpen(false);
    navigate('/change-password'); // або openModal() якщо буде модалка
  };

  return (
    <nav className={css.navigation}>
      <NavLink
        to="/mycollection"
        onClick={e => handleProtectedLink(e, '/mycollection')}
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
        onClick={e => handleProtectedLink(e, '/wishlist')}
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

      <div className={css.avatarWrapper} ref={dropdownRef}>
        <button
          className={css.avatarBtn}
          onClick={() => setIsDropdownOpen(prev => !prev)}
        >
          <img src={head} alt="head-icon" className={css.icon} />
        </button>

        {isDropdownOpen && (
          <div className={css.dropdown}>
            {isLoggedIn && (
              <>
                <button
                  className={css.dropdownBtn}
                  onClick={handleChangePassword}
                >
                  Change password
                </button>
                <button className={css.dropdownBtn} onClick={handleLogout}>
                  Log out
                </button>
              </>
            )}
            {!isLoggedIn && (
              <button
                className={css.dropdownBtn}
                onClick={() => {
                  openModal();
                  setIsDropdownOpen(false);
                }}
              >
                Sign In
              </button>
            )}
          </div>
        )}
      </div>

      <ModalOverlay isOpen={isModalOpen} onClose={closeModal}>
        <Auth />
      </ModalOverlay>
    </nav>
  );
}

export default Navigation;
