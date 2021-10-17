import { Formik, Form } from 'formik';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import FormInput from 'components/FormInput/FormInput';
import './styles.scss';

const validate = (values) => {
   const errors = { email: [], password: [] };
   if (!values.email) errors.email.push('Requerido');
   if (values.password.length < 8) errors.password.push('Muy corto');
   if (!values.password) errors.password.push('Requerido');
   return errors;
};

function LoginForm() {
   const [t] = useTranslation('global');
   return (
      <Formik
         initialValues={{ email: '', password: '' }}
         validate={validate}
         onSubmit={() => console.log('submit')}
      >
         <Form className="form">
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
            <button type="submit">{t('login.login')}</button>
         </Form>
      </Formik>
   );
}

export default LoginForm;
