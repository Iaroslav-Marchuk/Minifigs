import Card from '../../components/Card/Card.jsx';
import Container from '../../components/Container/Container.jsx';
import Section from '../../components/Section/Section.jsx';

import css from './CatalogPage.module.css';

function CatalogPage() {
  return (
    <Section>
      <Container>
        <p>CatalogPage</p>
        <div className={css.grid}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Container>
    </Section>
  );
}

export default CatalogPage;
