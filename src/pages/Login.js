import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LoginForm from 'components/UserForm/LoginForm';
import Spinner from 'components/Spinner/Spinner';

const selectStatus = (state) => state.auth.status;

function Login() {
   const history = useHistory();
   const status = useSelector(selectStatus);
   const [t] = useTranslation('global');

   useEffect(() => {
      switch (status.loading) {
         case 'pending':
            document.getElementsByClassName('button').innerHTML = <Spinner />;
            break;
         case 'succeded':
            history.push('/cities');
            break;
         case 'rejected':
            let error =
               status.error === 500
                  ? t('login.errorServer')
                  : t('login.errorCrendentials');
            toast.error(error, {
               autoClose: 2000,
            });
            document.getElementsByClassName('button').innerHTML =
               t('login.login');
            break;
         default:
            break;
      }
      // eslint-disable-next-line
   }, [status]);

   return <LoginForm />;
}

export default Login;
