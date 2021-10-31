import { useTranslation } from 'react-i18next';
import './input.scss';

function Input({ active, values, label, ...props }) {
   const [t] = useTranslation('global');

   return (
      <div className="schedule-input">
         <p className="schedule-input__label">{t(`newTravel.${label}`)}</p>
         <input
            className="schedule-input__picker"
            id={label}
            min={new Date().toISOString()}
            value={values[label]}
            {...props}
         />
         {active && (
            <p className="schedule-input__info">
               {t(`newTravel.${label}Info`)}
            </p>
         )}
      </div>
   );
}

export default Input;
