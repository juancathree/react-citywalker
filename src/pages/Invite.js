import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Head from 'components/Options/Head';

function Invite() {
   const { id } = useParams();
   const travels = useSelector((state) => state.travels.data);
   const travel = travels.find((travel) => travel['_id'] === id);
   const [t] = useTranslation('global');

   return (
      <>
         <Head text={t('options.invite')} />
      </>
   );
}

export default Invite;
