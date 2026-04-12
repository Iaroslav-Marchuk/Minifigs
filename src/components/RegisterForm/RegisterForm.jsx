import { useDispatch, useSelector } from 'react-redux';
import css from './RegisterForm.module.css';
import { selectIsUserLoading } from '../../redux/auth/selectors.js';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import { UserRound, KeyRound, Mail } from 'lucide-react';
import { PulseLoader } from 'react-spinners';
import { registerUser } from '../../redux/auth/operations.js';

function RegisterForm() {
  const dispatch = useDispatch();
  const isUserLoading = useSelector(selectIsUserLoading);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Field required!'),
    email: Yup.string().email().required('Field required!'),
    password: Yup.string().required('Field required!'),
  });

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(registerUser(values)).unwrap();
      toast.success('Registered successfully!');
      actions.resetForm();
    } catch (error) {
      toast.error('Error!. ' + error);
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
          <label htmlFor="name" className={css.label}>
            Name
          </label>
          <div className={css.inputContainer}>
            <Field
              type="text"
              name="name"
              id="name"
              placeholder=" "
              autoComplete="name"
              className={css.input}
              disabled={isUserLoading}
            />
            <UserRound className={css.inputIcon} size={24} strokeWidth={1.5} />
          </div>
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>

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
            <Mail className={css.inputIcon} size={24} strokeWidth={1.5} />
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
            'Register'
          )}
        </button>
      </Form>
    </Formik>
  );
}

export default RegisterForm;
