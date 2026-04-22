import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { Mail } from 'lucide-react';
import { PulseLoader } from 'react-spinners';

import { selectIsUserLoading } from '../../redux/auth/selectors.js';
import { requestResetToken } from '../../redux/auth/operations.js';

import css from './RequestResetTokenForm.module.css';

function RequestResetTokenForm() {
  const dispatch = useDispatch();
  const isUserLoading = useSelector(selectIsUserLoading);

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Field required!'),
  });

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(requestResetToken(values)).unwrap();
      toast.success('Request email send successfully!');
      actions.resetForm();
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
            <Mail className={css.inputIcon} size={24} strokeWidth={1.5} />
          </div>
          <ErrorMessage name="email" component="span" className={css.error} />
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
            'Send'
          )}
        </button>
      </Form>
    </Formik>
  );
}

export default RequestResetTokenForm;
