import Button from 'components/Button/Button';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Head from './Head';
import Input from './Input';

function ScheduleForm({ prevStep, nextStep, handleChange, values }) {
   const [state, setState] = useState(0);
   const [t] = useTranslation('global');

   const goOn = (e) => {
      e.preventDefault();
      nextStep();
   };

   return (
      <>
         <Head onClick={prevStep} text={t('newTravel.schedule')} />
         {state >= 0 && (
            <Input
               label="startDay"
               type="date"
               active={state === 0 || values.startDay === ''}
               values={values}
               onChange={(e) => {
                  handleChange('startDay', e.target.value);
                  setState(1);
               }}
            />
         )}
         {state > 0 && values.startDay !== '' && (
            <Input
               label="endDay"
               active={state === 1 || values.endDay === ''}
               type="date"
               values={values}
               min={values.startDay}
               onChange={(e) => {
                  handleChange('endDay', e.target.value);
                  setState(2);
               }}
            />
         )}
         {state > 1 && values.endDay !== '' && (
            <Input
               label="startItinerary"
               active={state === 2 || values.startItinerary === ''}
               type="time"
               values={values}
               onChange={(e) => {
                  handleChange('itineraryStartTime', e.target.value);
                  setState(3);
               }}
            />
         )}
         {state > 2 && values.startItinerary !== '' && (
            <Input
               label="endItinerary"
               active={state === 3 || values.endItinerary === ''}
               type="time"
               values={values}
               min={values.startItinerary}
               onChange={(e) => {
                  handleChange('itineraryEndTime', e.target.value);
                  setState(4);
               }}
            />
         )}
         {state > 3 && values.itineraryEndTime !== '' && (
            <Button>{t('newTravel.button')}</Button>
         )}
      </>
   );
}

export default ScheduleForm;
