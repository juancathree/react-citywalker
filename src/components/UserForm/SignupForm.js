import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import FormInput from 'components/FormInput/FormInput';
import Button from 'components/Button/Button';
import signup from 'services/signup';
import './styles.scss';

function SignupForm() {
   const dispatch = useDispatch();
   const [t] = useTranslation('global');

   const SignupSchema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
   });

   return (
      <Formik
         initialValues={{ name: '', email: '', password: '' }}
         validationSchema={SignupSchema}
         validateOnChange={true}
         onSubmit={(values) => {
            dispatch(signup(values));
         }}
      >
         {({ values, errors }) => (
            <Form className="form">
               <h2 className="form__title">
                  <span className="first">City</span>
                  <span className="second">Walker</span>
               </h2>
               <FormInput
                  name="name"
                  type="text"
                  placeholder={t('signup.name')}
                  icon={faUser}
               />
               <FormInput
                  name="email"
                  type="email"
                  placeholder={t('login.email')}
                  icon={faEnvelope}
               />
               <FormInput
                  name="password"
                  type="password"
                  placeholder={t('login.password')}
                  icon={faLock}
               />
               <Button
                  type="submit"
                  disabled={
                     values.email &&
                     values.password &&
                     values.name &&
                     !errors.name &&
                     !errors.password &&
                     !errors.email
                        ? false
                        : true
                  }
               >
                  {t('signup.signup')}
               </Button>
               <h2 className="question">
                  {t('signup.login')}{' '}
                  <Link to="/login">{t('signup.loginLink')}</Link>
               </h2>
            </Form>
         )}
      </Formik>
   );
}

export default SignupForm;
