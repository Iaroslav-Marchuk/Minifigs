import { NavLink } from 'react-router-dom';

import logo from '../../assets/icons/icons-lego-64.png';
import image from '../../assets/img/auth-img.jpg';

import { useModal } from '../../context/ModalContext/UseModal.jsx';

import css from './Auth.module.css';

function Auth() {
  const { closeModal } = useModal();
  return (
    <div className={css.wrapper}>
      <div className={css.topSection}>
        <img src={logo} alt="logo" className={css.logo} />
        <span className={css.span}>Minifigs Collection</span>
      </div>
      <div className={css.bottomSection}>
        <div className={css.leftSide}>
          <h3 className={css.title}>LEGO Minifigs Collection</h3>
          <p className={css.text}>Join the Minifig Collectors Club!</p>
          <div className={css.btns}>
            <NavLink to="/login" className={css.btn} onClick={closeModal}>
              Sign in
            </NavLink>
            <NavLink to="/register" className={css.btn} onClick={closeModal}>
              Become a member
            </NavLink>
          </div>
        </div>

        <div className={css.rightSide}>
          <img src={image} alt="image" className={css.image} />
        </div>
      </div>
    </div>
  );
}

export default Auth;
