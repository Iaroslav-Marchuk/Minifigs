import { NavLink } from 'react-router-dom';
import Container from '../../components/Container/Container.jsx';
import Section from '../../components/Section/Section.jsx';

import css from './MainPage.module.css';
import { Box, Heart, MoveRight, Star } from 'lucide-react';
import Card from '../../components/Card/Card.jsx';

import logo from '../../assets/icons/icons-lego-64.png';
import CardPreview from '../../components/CardPreview/CardPreview.jsx';

function MainPage() {
  const MOCK_MINIFIGS = [
    {
      _id: 'mock-1',
      fig_num: 'fig-002864',
      name: 'Lloyd (Secrets of the Forbidden Spinjitzu)',
      num_parts: 5,
      img_url: 'https://cdn.rebrickable.com/media/sets/fig-002864.jpg',
    },
    {
      _id: 'mock-2',
      fig_num: 'fig-002683',
      name: 'Darth Vader, White Skin, 50231 Cape, Robe Hem on Legs',
      num_parts: 6,
      img_url: 'https://cdn.rebrickable.com/media/sets/fig-002683.jpg',
    },
    {
      _id: 'mock-3',
      fig_num: 'fig-002159',
      name: 'Wyldstyle in blue jumpsuit',
      num_parts: 5,
      img_url: 'https://cdn.rebrickable.com/media/sets/fig-002159.jpg',
    },

    {
      _id: 'mock-4',
      fig_num: 'fig-000010',
      name: 'Batman, Dark Bluish Gray Suit, Black Cape and Cowl, Black Head, Dark B…',
      num_parts: 5,
      img_url: 'https://cdn.rebrickable.com/media/sets/fig-000010.jpg',
    },
  ];
  return (
    <Section>
      <Container>
        <div className={css.wrapper}>
          <h1 className={css.title}>
            Build Your
            <span>
              <img src={logo} alt="logo" className={css.logo} />
            </span>
            Minifigure Collection!
          </h1>
          <p className={css.text}>
            Organize, track and explore your minifigs in one place.
          </p>
          <ul className={css.list}>
            <li className={css.item}>
              <Box strokeWidth={1.5} />
              Track your LEGO minifig collection
            </li>
            <li className={css.item}>
              <Heart strokeWidth={1.5} /> Save favorites
            </li>
            <li className={css.item}>
              <Star strokeWidth={1.5} />
              Manage wishlist
            </li>
          </ul>

          <NavLink to="/minifigs" className={css.link}>
            Browse catalog <MoveRight />
          </NavLink>

          <div className={css.preview}>
            {MOCK_MINIFIGS.map(fig => (
              <CardPreview key={fig._id} fig={fig} />
            ))}
          </div>
        </div>

        <div className={css.statistic}>
          <ul className={css.statList}>
            <li className={css.statItem}>
              <div className={css.statWrapper}>
                <span className={css.stat1}>16646</span>
                <span className={css.stat2}>Minifigs in catalog</span>
              </div>
            </li>
            <li className={css.statItem}>
              <div className={css.statWrapper}>
                <span className={css.stat1}>Free</span>
                <span className={css.stat2}>Always</span>
              </div>
            </li>
            <li className={css.statItem}>
              <div className={css.statWrapper}>
                <span className={css.stat1}>490</span>
                <span className={css.stat2}>Unique themes</span>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export default MainPage;
