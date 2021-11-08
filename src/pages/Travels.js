import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import List from 'components/Travels/List';
import Navbar from 'components/Navbar/Navbar';
import NoTravel from 'components/Travels/NoTravel';
import Add from 'components/Add/Add';
import getTravels from 'services/getTravels';

function Travels() {
   const history = useHistory();
   const dispatch = useDispatch();
   const travels = useSelector((state) => state.travels.data);
   const [t] = useTranslation('global');
   const { i18n } = useTranslation('global');
   const lng = i18n.language;

   useEffect(() => {
      if (travels.length === 0) {
         const length = 0;
         dispatch(getTravels({ lng, length }));
      }
   }, [dispatch, lng, travels]);

   return (
      <>
         {travels.length > 0 && <List />}
         {travels.length === 0 && <NoTravel />}
         <Navbar />
         <Add
            onClick={() => history.push('/newTravel')}
            text={t('add.travel')}
         />
      </>
   );
}

export default Travels;
