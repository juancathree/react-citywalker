import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Head from './Head';
import PlaceList from './PlaceList';
import Info from './Info';
import Button from 'components/Button/Button';

function EntryForm({
   prevStep,
   nextStep,
   values,
   handleChangeAdd,
   handleChangeRemove,
}) {
   const places = useSelector((state) => state.places.data);
   const filtered = places.filter((place) => place['visit']['all'] != null);
   const [t] = useTranslation('global');

   const handleClick = (e) => {
      e.preventDefault();
      if (e.currentTarget.classList.contains('newTravel-place-clicked')) {
         handleChangeRemove(
            'customEntryLocations',
            e.currentTarget.getAttribute('id')
         );
         e.currentTarget.classList.remove('newTravel-place-clicked');
      } else {
         handleChangeAdd(
            'customEntryLocations',
            e.currentTarget.getAttribute('id')
         );
         e.currentTarget.classList.add('newTravel-place-clicked');
      }
   };

   useEffect(() => {
      const { customEntryLocations } = values;
      for (const key in customEntryLocations) {
         document.getElementById(key).classList.add('newTravel-place-clicked');
      }
      // eslint-disable-next-line
   }, []);

   return (
      <>
         <Head onClick={prevStep} text={t('newTravel.entry')} />
         <Info text={t('newTravel.entryInfo')} />
         <PlaceList onClick={handleClick} places={filtered} />
         <Button onClick={nextStep}>{t('newTravel.button')}</Button>
      </>
   );
}

export default EntryForm;
