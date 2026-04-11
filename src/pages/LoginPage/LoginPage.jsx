import Container from '../../components/Container/Container.jsx';
import Section from '../../components/Section/Section.jsx';
import css from './LoginPage.module.css';

function LoginPage() {
  return (
    <Section>
      <Container>
        <div className={css.wrapper}></div>
      </Container>
    </Section>
  );
}

export default LoginPage;
