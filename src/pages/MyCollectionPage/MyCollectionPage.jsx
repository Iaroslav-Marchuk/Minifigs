import { NavLink } from 'react-router-dom';
import Container from '../../components/Container/Container.jsx';
import Section from '../../components/Section/Section.jsx';

function MyCollectionPage() {
  return (
    <Section>
      <Container>
        <p>MyCollectionPage</p>
        <NavLink to="/figure">figure</NavLink>
      </Container>
    </Section>
  );
}

export default MyCollectionPage;
