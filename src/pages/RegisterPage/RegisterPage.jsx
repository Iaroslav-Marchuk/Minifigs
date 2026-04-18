import Container from '../../components/Container/Container.jsx';

import Section from '../../components/Section/Section.jsx';
import css from './RegisterPage.module.css';

import logo from '../../assets/icons/icons-lego-64.png';
import googleIcon from '../../assets/icons/icons8-google-24.png';
import { MoveLeft } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useModal } from '../../context/ModalContext/UseModal.jsx';
import RegisterForm from '../../components/RegisterForm/RegisterForm.jsx';
import { useDispatch } from 'react-redux';
import { getGoogleOAuthUrl } from '../../redux/auth/operations.js';

function RegisterPage() {
  const navigate = useNavigate();
  const { openModal } = useModal();

  const dispatch = useDispatch();

  const handleGoogleLogin = async () => {
    const url = await dispatch(getGoogleOAuthUrl()).unwrap();
    window.location.href = url;
  };

  return (
    <Section className={css.section}>
      <Container>
        <div className={css.wrapper}>
          <button
            onClick={() => {
              navigate(-1);
              openModal();
            }}
            type="button"
            className={css.backBtn}
          >
            <MoveLeft />
            <span className={css.backSpan}>Back</span>
          </button>

          <img src={logo} alt="logo" className={css.logo} />
          <h3>Create your account</h3>
          <RegisterForm />
          <span>or</span>
          <button type="button" className={css.btn} onClick={handleGoogleLogin}>
            <img src={googleIcon} alt="googleIcon" />
            Create account with Google
          </button>
          <p className={css.text}>Do you have a account?</p>
          <NavLink to="/register" className={css.link}>
            Register
          </NavLink>
        </div>
      </Container>
    </Section>
  );
}

export default RegisterPage;
