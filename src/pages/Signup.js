import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SignForm from 'components/UserForm/SignupForm';
import Spinner from 'components/Spinner/Spinner';

const selectStatus = (state) => state.auth.status;

function SignUp() {
   const history = useHistory();
   const status = useSelector(selectStatus);
   const [t] = useTranslation('global');

   useEffect(() => {
      switch (status.loading) {
         case 'pending':
            document.getElementsByClassName('button').innerHTML = <Spinner />;
            break;
         case 'succeded':
            toast.success(t('signup.success'), {
               autoClose: 2000,
            });
            history.push('/cities');
            break;
         case 'rejected':
            let error =
               status.error === 500
                  ? t('login.errorServer')
                  : t('auth.duplicateKey');
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

   return <SignForm />;
}

export default SignUp;
