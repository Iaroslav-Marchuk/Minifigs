import * as Yup from 'yup';
import { PulseLoader } from 'react-spinners';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import css from './ChangePassForm.module.css';
import { changePassword } from '../../redux/auth/operations.js';

function ChangePassForm() {
  const dispatch = useDispatch();

  const initialValues = {
    oldPass: '',
    newPass: '',
    confirmPass: '',
  };

  const validationSchema = Yup.object().shape({
    oldPass: Yup.string().required('Field required!'),
    newPass: Yup.string().required('Field required!'),
    confirmPass: Yup.string()
      .oneOf([Yup.ref('newPass')], 'Differentes passwords!')
      .required('Field required!'),
  });

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(changePassword(values)).unwrap();
      toast.success('Password chanched successfully');
      actions.resetForm();
    } catch (error) {
      toast.error('Error! ' + error);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <Field
              type="text"
              name="username"
              autoComplete="username"
              style={{ display: 'none' }}
            />
            <div className={css.formGroup}>
              <label htmlFor="oldPass" className={css.label}>
                Old password
              </label>
              <Field
                type="password"
                name="oldPass"
                id="oldPass"
                placeholder=" "
                autoComplete="current-password"
                className={css.input}
              />
              <ErrorMessage
                name="oldPass"
                component="span"
                className={css.error}
              />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="newPass" className={css.label}>
                New password
              </label>
              <Field
                type="password"
                name="newPass"
                id="newPass"
                placeholder=" "
                autoComplete="new-password"
                className={css.input}
              />
              <ErrorMessage
                name="newPass"
                component="span"
                className={css.error}
              />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="confirmNewPassword" className={css.label}>
                Confirm new password
              </label>
              <Field
                type="password"
                name="confirmPass"
                id="confirmPass"
                placeholder=" "
                autoComplete="new-password"
                className={css.input}
              />
              <ErrorMessage
                name="confirmPass"
                component="span"
                className={css.error}
              />
            </div>

            <button type="submit" className={css.btn} disabled={isSubmitting}>
              {isSubmitting ? (
                <PulseLoader
                  loading={true}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                  color="#9fb9e2ff"
                  size={5}
                  className={css.spiner}
                />
              ) : (
                'Change'
              )}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ChangePassForm;
