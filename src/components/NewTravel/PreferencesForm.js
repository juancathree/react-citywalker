import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Head from './Head';
import Place from './Place';
import Info from './Info';
import Button from 'components/Button/Button';

function PreferencesForm({
   prevStep,
   nextStep,
   values,
   handleChangeAdd,
   handleChangeRemove,
}) {
   const { i18n } = useTranslation('global');
   const places = useSelector((state) => state.places.data);
   const filtered = [
      ...new Set(places.map((place) => place.category[`${i18n.language}`])),
   ];
   const [t] = useTranslation('global');

   const handleClick = (e) => {
      e.preventDefault();
      if (e.currentTarget.classList.contains('newTravel-place-clicked')) {
         handleChangeRemove('preferences', e.currentTarget.getAttribute('id'));
         e.currentTarget.classList.remove('newTravel-place-clicked');
      } else {
         handleChangeAdd('preferences', e.currentTarget.getAttribute('id'));
         e.currentTarget.classList.add('newTravel-place-clicked');
      }
   };

   useEffect(() => {
      const { preferences } = values;
      preferences.forEach((category) => {
         document
            .getElementById(category)
            .classList.add('newTravel-place-clicked');
      });
      // eslint-disable-next-line
   }, []);

   return (
      <>
         <Head onClick={prevStep} text={t('newTravel.preferences')} />
         <Info text={t('newTravel.preferencesInfo')} />
         <div className="newTravel-list">
            {filtered.map((category) => (
               <Place
                  key={category}
                  name={category}
                  id={category.replaceAll(' ', '_')}
                  onClick={handleClick}
               />
            ))}
         </div>
         <Button onClick={nextStep}>{t('newTravel.button')}</Button>
      </>
   );
}

export default PreferencesForm;
