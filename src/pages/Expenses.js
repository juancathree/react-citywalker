import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Head from 'components/Options/Head';
import Total from 'components/Options/Total';
import Select from 'components/Options/Select';
import List from 'components/Options/List';

function Expenses() {
   const [personal, setPersonal] = useState(true);
   const { id } = useParams();
   const travels = useSelector((state) => state.travels.data);
   const travel = travels.find((travel) => travel['_id'] === id);
   const [t] = useTranslation('global');

   const onClick = () => {
      setPersonal(!personal);
   };

   return (
      <>
         <Head text={t('options.expenses')} />
         <Total travel={travel} personal={personal} />
         {travel['travelUsers'].length > 1 && (
            <Select personal={personal} onClick={onClick} />
         )}
         <List travel={travel} personal={personal} />
      </>
   );
}

export default Expenses;
