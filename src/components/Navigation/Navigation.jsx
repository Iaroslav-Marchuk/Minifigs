import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

import { Heart } from 'lucide-react';

import head from '../../assets/icons/icons-head-24.png';

import css from './Navigation.module.css';

function Navigation() {
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
      <p>SEARCH</p>
      <NavLink>
        <img src={head} alt="head-icon" className={css.icon} />
      </NavLink>
    </nav>
  );
}

export default Navigation;
