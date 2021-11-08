import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setLogout } from 'reducers/authReducer';
import { useHistory } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import Avatar from 'components/User/Avatar';
import Button from 'components/Button/Button';
import Info from 'components/User/Info';
import getUser from 'services/getUser';

function User() {
   const dispatch = useDispatch();
   const [t] = useTranslation('global');
   const history = useHistory();

   useEffect(() => {
      dispatch(getUser(window.localStorage.getItem('email')));
   }, [dispatch]);

   return (
      <>
         <Avatar />
         <Info />
         <Button
            onClick={() => {
               dispatch(setLogout());
               history.push('/cities');
            }}
         >
            {t('user.logout')}
         </Button>
         <Navbar />
      </>
   );
}

export default User;
