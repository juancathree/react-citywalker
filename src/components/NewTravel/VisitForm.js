import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Head from './Head';
import PlaceList from './PlaceList';
import Info from './Info';
import Button from 'components/Button/Button';

function VisitForm({
   prevStep,
   nextStep,
   values,
   handleChangeAdd,
   handleChangeRemove,
}) {
   const places = useSelector((state) => state.places.data);
   const filtered = places.filter((place) => place['visit']['outside'] != null);
   const [t] = useTranslation('global');

   const handleClick = (e) => {
      e.preventDefault();
      if (e.currentTarget.classList.contains('newTravel-place-clicked')) {
         handleChangeRemove(
            'customVisitLocations',
            e.currentTarget.getAttribute('id')
         );
         e.currentTarget.classList.remove('newTravel-place-clicked');
      } else {
         handleChangeAdd(
            'customVisitLocations',
            e.currentTarget.getAttribute('id')
         );
         e.currentTarget.classList.add('newTravel-place-clicked');
      }
   };

   useEffect(() => {
      const { customVisitLocations } = values;
      customVisitLocations.forEach((cv) => {
         document.getElementById(cv).classList.add('newTravel-place-clicked');
      });
      // eslint-disable-next-line
   }, []);

   return (
      <>
         <Head onClick={prevStep} text={t('newTravel.visit')} />
         <Info text={t('newTravel.visitInfo')} />
         <PlaceList onClick={handleClick} places={filtered} />
         <Button onClick={nextStep}>{t('newTravel.button')}</Button>
      </>
   );
}

export default VisitForm;
