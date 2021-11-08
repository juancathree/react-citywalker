import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Head from 'components/Options/Head';
import FormInvite from 'components/Options/FormInvite';
import ListUser from 'components/Options/ListUser';
import putTravelUsers from 'services/putTravelUsers';
import { toast } from 'react-toastify';

function Invite() {
   const history = useHistory();
   const [email, setEmail] = useState('');
   const dispatch = useDispatch();
   const { id } = useParams();
   const travels = useSelector((state) => state.travels.data);
   const travel = travels.find((travel) => travel['_id'] === id);
   const { i18n } = useTranslation('global');
   const lng = i18n.language;
   const [t] = useTranslation('global');

   const handleChange = (e) => {
      setEmail(e.target.value);
   };

   const handleSubmit = () => {
      if (
         travel['travelUsers'].filter((u) => {
            return u['email'] === email;
         }).length > 0
      ) {
         toast.error(t('invite.duplicate'), 2000);
         return;
      }
      const exists = false;
      dispatch(putTravelUsers({ email, id, exists, lng }));
      history.push(`/travels/${id}`);
   };

   return (
      <>
         <Head text={t('options.invite')} />
         <FormInvite handleSubmit={handleSubmit} handleChange={handleChange} />
         <ListUser travel={travel} />
      </>
   );
}

export default Invite;
