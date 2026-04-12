import Container from '../../components/Container/Container.jsx';

import Section from '../../components/Section/Section.jsx';
import css from './ResetPasswordPage.module.css';

import logo from '../../assets/icons/icons-lego-64.png';
import { MoveLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ResetPasswordForm from '../../components/ResetPasswordForm/ResetPasswordForm.jsx';

function ResetPasswordPage() {
  const navigate = useNavigate();

  return (
    <Section className={css.section}>
      <Container>
        <div className={css.wrapper}>
          <button
            onClick={() => {
              navigate(-1);
            }}
            type="button"
            className={css.backBtn}
          >
            <MoveLeft />
            <span className={css.backSpan}>Back</span>
          </button>

          <img src={logo} alt="logo" className={css.logo} />
          <h3>Make your new password</h3>

          <ResetPasswordForm />
        </div>
      </Container>
    </Section>
  );
}

export default ResetPasswordPage;
