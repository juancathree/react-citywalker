import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import FormInput from 'components/FormInput/FormInput';
import Button from 'components/Button/Button';
import './styles.scss';
import { useDispatch } from 'react-redux';
import login from 'services/login';

function LoginForm() {
   const dispatch = useDispatch();
   const [t] = useTranslation('global');

   const LoginSchema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
   });

   return (
      <Formik
         initialValues={{ email: '', password: '' }}
         validationSchema={LoginSchema}
         validateOnChange={false}
         validateOnBlur={false}
         onSubmit={(values) => {
            dispatch(login(values));
         }}
      >
         <Form className="form">
            <h2 className="form__title">
               <span className="first">City</span>
               <span className="second">Walker</span>
            </h2>
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
            <Button type="submit">{t('login.login')}</Button>
            <h2 className="question">
               {t('login.signup')}{' '}
               <Link to="/signup">{t('login.signupLink')}</Link>
            </h2>
         </Form>
      </Formik>
   );
}

export default LoginForm;
