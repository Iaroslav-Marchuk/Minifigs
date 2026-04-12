import { useDispatch, useSelector } from 'react-redux';
import css from './LoginForm.module.css';
import { selectIsUserLoading } from '../../redux/auth/selectors.js';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { loginUser } from '../../redux/auth/operations.js';
import { UserRound, KeyRound } from 'lucide-react';
import { PulseLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../context/ModalContext/UseModal.jsx';

function LoginForm() {
  const dispatch = useDispatch();
  const isUserLoading = useSelector(selectIsUserLoading);
  const navigate = useNavigate();
  const { closeModal } = useModal();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Field required!'),
    password: Yup.string().required('Field required!'),
  });

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(loginUser(values)).unwrap();
      toast.success('Logged in successfully!');
      actions.resetForm();
      closeModal();
      navigate('/');
    } catch (error) {
      toast.error('Error! ' + error);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor="email" className={css.label}>
            E-mail
          </label>
          <div className={css.inputContainer}>
            <Field
              type="email"
              name="email"
              id="email"
              placeholder=" "
              autoComplete="email"
              className={css.input}
              disabled={isUserLoading}
            />
            <UserRound className={css.inputIcon} size={24} strokeWidth={1.5} />
          </div>
          <ErrorMessage name="email" component="span" className={css.error} />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="password" className={css.label}>
            Palavra-passe
          </label>
          <div className={css.inputContainer}>
            <Field
              type="password"
              name="password"
              id="password"
              placeholder=" "
              autoComplete="current-password"
              className={css.input}
              disabled={isUserLoading}
            />
            <KeyRound className={css.inputIcon} size={24} strokeWidth={1.5} />
          </div>
          <ErrorMessage
            name="password"
            component="span"
            className={css.error}
          />
        </div>

        <button type="submit" className={css.btn} disabled={isUserLoading}>
          {isUserLoading ? (
            <PulseLoader
              loading={true}
              aria-label="Loading Spinner"
              data-testid="loader"
              color="#9fb9e2ff"
              size={5}
              className={css.spiner}
            />
          ) : (
            'Login'
          )}
        </button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
