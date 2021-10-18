import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import FormInput from 'components/FormInput/FormInput';
import Button from 'components/Button/Button';
import './styles.scss';

function LoginForm() {
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
         validateOnChange={false}
         validateOnBlur={false}
         onSubmit={(values) => {
            console.log(values);
         }}
      >
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
            <Button type="submit">{t('signup.signup')}</Button>
            <h2 className="question">
               {t('signup.login')}{' '}
               <Link to="/login">{t('signup.loginLink')}</Link>
            </h2>
         </Form>
      </Formik>
   );
}

export default LoginForm;
