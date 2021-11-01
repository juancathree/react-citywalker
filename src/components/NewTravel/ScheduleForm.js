import Button from 'components/Button/Button';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Head from './Head';
import Input from './Input';
import './scheduleForm.scss';

function ScheduleForm({ prevStep, nextStep, handleChange, values }) {
   let step =
      values.startDay === ''
         ? 0
         : values.endDay === ''
         ? 1
         : values.itineraryStartTime === ''
         ? 2
         : values.itineraryEndTime === ''
         ? 3
         : 4;
   const [state, setState] = useState(step);
   const [t] = useTranslation('global');

   return (
      <>
         <Head onClick={prevStep} text={t('newTravel.schedule')} />
         <div className="input-container">
            {state >= 0 && (
               <Input
                  label="startDay"
                  type="datetime-local"
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
                  type="datetime-local"
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
                  label="itineraryStartTime"
                  active={state === 2 || values.startItinerary === ''}
                  type="time"
                  values={values}
                  onChange={(e) => {
                     handleChange('itineraryStartTime', e.target.value);
                     setState(3);
                  }}
               />
            )}
            {state > 2 && values.itineraryStartTime !== '' && (
               <Input
                  label="itineraryEndTime"
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
               <Button onClick={nextStep}>{t('newTravel.button')}</Button>
            )}
         </div>
      </>
   );
}

export default ScheduleForm;
