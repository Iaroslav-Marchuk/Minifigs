import { Link } from 'react-router-dom';
import css from './Set.module.css';

function Set({ set }) {
  return (
    <a
      href={`https://rebrickable.com/sets/${set.set_num}`}
      target="_blank"
      rel="noopener noreferrer"
      className={css.set}
    >
      <img src={set.img_url} alt={set.name} />
      <div className={css.wrapper}>
        <h3 className={css.setName}>{set.name}</h3>
        <ul className={css.list}>
          <li className={css.item}>Art.: {set.set_num}</li>
          <li className={css.item}>Realized: {set.year} year</li>
          <li className={css.item}>Inventory: {set.num_parts} parts</li>
        </ul>
      </div>
    </a>
  );
}

export default Set;
