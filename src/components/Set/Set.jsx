import Skeleton from '@mui/material/Skeleton';
import css from './Set.module.css';

function Set({ set, isLoading }) {
  if (isLoading) {
    return (
      <div className={css.set}>
        <Skeleton variant="rectangular" width={120} height={120} />
        <div className={css.wrapper}>
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
    );
  }

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
