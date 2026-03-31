import { NavLink } from 'react-router-dom';
import logo from '../../assets/icons/icons-lego-64.png';

import Container from '../Container/Container.jsx';

import css from './Footer.module.css';
import IconsSet from '../IconsSet/IconsSet.jsx';

function Footer() {
  return (
    <footer className={css.footer}>
      <Container className={css.container}>
        <NavLink to="/">
          <img src={logo} alt="logo" className={css.logo} />
        </NavLink>
        <IconsSet />
      </Container>
    </footer>
  );
}

export default Footer;
