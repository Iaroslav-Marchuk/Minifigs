import Container from '../../components/Container/Container.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import Section from '../../components/Section/Section.jsx';
import css from './LoginPage.module.css';

import logo from '../../assets/icons/icons-lego-64.png';
import googleIcon from '../../assets/icons/icons8-google-24.png';
import { MoveLeft } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useModal } from '../../context/ModalContext/UseModal.jsx';

function LoginPage() {
  const navigate = useNavigate();
  const { openModal } = useModal();

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

          <h3>Sign in to your account</h3>
          <LoginForm />

          <NavLink to="/request-reset-email" className={css.link}>
            Forgot password?
          </NavLink>

          <span>or</span>
          <button type="button" className={css.btn}>
            <img src={googleIcon} alt="googleIcon" />
            Continue with Google
          </button>

          <p className={css.text}>Don't have a account?</p>
          <NavLink to="/register" className={css.link}>
            Register
          </NavLink>
        </div>
      </Container>
    </Section>
  );
}

export default LoginPage;
