import { NavLink } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';

import Section from '../../components/Section/Section.jsx';
import Container from '../../components/Container/Container.jsx';

import css from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <Section className={css.section404}>
      <Container>
        <h1 className={css.title}>404</h1>
        <p className={css.text}>Sorry, we couldn't find this page</p>
        <NavLink to="/" className={css.link}>
          <div className={css.wrapper}>
            <MoveLeft strokeWidth={1.5} />
            <span>Go back to Home Page</span>
          </div>
        </NavLink>
      </Container>
    </Section>
  );
}

export default NotFoundPage;
