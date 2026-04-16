import * as Yup from 'yup';
import { PulseLoader } from 'react-spinners';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import css from './ChangeNameForm.module.css';
import { changeName } from '../../redux/auth/operations.js';
import { selectUser } from '../../redux/auth/selectors.js';
import { Check } from 'lucide-react';

function ChangeNameForm() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const initialValues = {
    newName: '',
  };

  const validationSchema = Yup.object().shape({
    newName: Yup.string().required('Field required!'),
  });

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(changeName(values)).unwrap();
      toast.success('Name chanched successfully');
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
            <div className={css.formGroup}>
              <label htmlFor="newName" className={css.label}>
                Change user name
              </label>
              <Field
                type="text"
                name="newName"
                id="newName"
                placeholder={user.name}
                className={css.input}
              />
              <ErrorMessage
                name="newName"
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
                <Check size={24} />
              )}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ChangeNameForm;
