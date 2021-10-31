import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Head from './Head';
import List from './List';

function CityForm({ nextStep }) {
   const history = useHistory();
   const [t] = useTranslation('global');

   const goOn = (e) => {
      e.preventDefault();
      nextStep('city', e.currentTarget.getAttribute('id'));
   };

   const goBack = () => {
      history.goBack();
   };

   return (
      <>
         <Head onClick={goBack} text={t('newTravel.city')} />
         <List onClick={goOn} />
      </>
   );
}

export default CityForm;
