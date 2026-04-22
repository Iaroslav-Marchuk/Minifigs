import { MoveLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/icons/icons-lego-64.png';

import Container from '../../components/Container/Container.jsx';
import Section from '../../components/Section/Section.jsx';

import RequestResetTokenForm from '../../components/RequestResetTokenForm/RequestResetTokenForm.jsx';

import css from './RequestResetTokenPage.module.css';

function RequestResetTokenPage() {
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
          <h3>Forgot your passwor?</h3>
          <p className={css.text}>Insert your email!</p>
          <RequestResetTokenForm />
        </div>
      </Container>
    </Section>
  );
}

export default RequestResetTokenPage;
