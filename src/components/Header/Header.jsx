import Container from '../Container/Container.jsx';

import logo from '../../assets/icons/icons-lego-64.png';

import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.jsx';

function Header() {
  return (
    <header className={css.header}>
      <Container className={css.container}>
        <NavLink to="/">
          <img src={logo} alt="logo" className={css.logo} />
        </NavLink>
        <Navigation />
      </Container>
    </header>
  );
}

export default Header;
