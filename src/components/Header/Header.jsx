import Container from '../Container/Container.jsx';

import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <Container className={css.container}>
        <p>Header</p>
      </Container>
    </header>
  );
}

export default Header;
