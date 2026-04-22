import { useState } from 'react';
import { EllipsisVertical, Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import Container from '../Container/Container.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import ModalSideBar from '../ModalSideBar/ModalSideBar.jsx';
import MobileMenu from '../MobileMenu/MobileMenu.jsx';

import logo from '../../assets/icons/icons-lego-64.png';

import css from './Header.module.css';

function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const openMobileMenu = () => setMobileMenuIsOpen(true);
  const closeMobileMenu = () => {
    setMobileMenuIsOpen(false);
  };

  const handleClick = () => {
    openMobileMenu();
  };

  return (
    <header className={css.header}>
      <Container className={css.container}>
        <NavLink to="/">
          <img src={logo} alt="logo" className={css.logo} />
        </NavLink>
        <Navigation />
        <button className={css.burgerBtn} onClick={handleClick}>
          <EllipsisVertical className={css.icon} size={32} strokeWidth={2} />
        </button>
      </Container>

      <ModalSideBar isOpen={mobileMenuIsOpen} onClose={closeMobileMenu}>
        <MobileMenu onClose={closeMobileMenu} />
      </ModalSideBar>
    </header>
  );
}

export default Header;
