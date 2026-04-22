import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { KeyRound } from 'lucide-react';
import { PulseLoader } from 'react-spinners';

import { selectIsUserLoading } from '../../redux/auth/selectors.js';
import { resetUserPassword } from '../../redux/auth/operations.js';

import css from './ResetPasswordForm.module.css';

function ResetPasswordForm() {
  const dispatch = useDispatch();
  const isUserLoading = useSelector(selectIsUserLoading);
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();

  const initialValues = {
    password: '',
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().required('Field required!'),
  });

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(resetUserPassword({ ...values, token })).unwrap();
      toast.success('Password reset successfully!');
      actions.resetForm();
      navigate('/login');
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
          <label htmlFor="password" className={css.label}>
            New password
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
            'Reset password'
          )}
        </button>
      </Form>
    </Formik>
  );
}

export default ResetPasswordForm;
