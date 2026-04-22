import facebookIcon from '../../assets/icons/icons8-facebook-logo-40.png';
import xIcon from '../../assets/icons/icons8-x-40.png';
import instagramIcon from '../../assets/icons/icons8-instagram-40.png';
import youtubeIcon from '../../assets/icons/icons8-youtube-40.png';

import css from './IconsSet.module.css';

function IconsSet() {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Follow us</p>
      <ul className={css.list}>
        <li className={css.item}>
          <a href="https://www.facebook.com/LEGO/">
            <img src={facebookIcon} alt="facebook" />
          </a>
        </li>
        <li className={css.item}>
          <a href="https://x.com/LEGO_Group">
            <img src={xIcon} alt="X" />
          </a>
        </li>
        <li className={css.item}>
          <a href="https://www.instagram.com/lego">
            <img src={instagramIcon} alt="instagram" />
          </a>
        </li>
        <li className={css.item}>
          <a href="https://www.youtube.com/user/LEGO">
            <img src={youtubeIcon} alt="youtube" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default IconsSet;
