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
        to="/catalog"
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

//   <nav className={css.navigation}>
//     <NavLink
//       to="/main"
//       data-tooltip="Registo"
//       aria-label="Registo"
//       className={({ isActive }) => clsx(css.link, isActive && css.active)}
//     >
//       <FilePlusCorner className={css.icon} size={32} strokeWidth={1.5} />
//     </NavLink>
//     <NavLink
//       to="/report"
//       data-tooltip="Relatórios"
//       aria-label="Relatórios"
//       className={({ isActive }) => clsx(css.link, isActive && css.active)}
//     >
//       <ListCheck className={css.icon} size={32} strokeWidth={1.5} />
//     </NavLink>
//     <NavLink
//       to="/stats"
//       data-tooltip="Estatísticas"
//       aria-label="Estatísticas"
//       className={({ isActive }) => clsx(css.link, isActive && css.active)}
//     >
//       <ChartLine className={css.icon} size={32} strokeWidth={1.5} />
//     </NavLink>
//     <NavLink
//       to="/profile"
//       data-tooltip="Perfil"
//       aria-label="Perfil"
//       className={({ isActive }) => clsx(css.link, isActive && css.active)}
//     >
//       <CircleUserRound className={css.icon} size={32} strokeWidth={1.5} />
//     </NavLink>
//     <button
//       type="button"
//       className={css.link}
//       data-tooltip="Saír"
//       aria-label="Saír"
//       onClick={openConfirm}
//     >
//       <LogOut className={css.icon} size={32} strokeWidth={1.5} />
//     </button>

//     <ModalOverlay isOpen={isConfirmOpen} onClose={closeConfirm}>
//       <ConfirmContainer
//         text={'Tem a certeza que quer saír?'}
//         onConfirm={handleLogout}
//         onClose={closeConfirm}
//       />
//     </ModalOverlay>
//   </nav>;
