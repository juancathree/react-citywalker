import { useTranslation } from 'react-i18next';
import './select.scss';

function Select({ personal, onClick }) {
   const [t] = useTranslation('global');
   return (
      <div className="select">
         <p className={personal ? 'active' : null} onClick={onClick}>
            {t('expenses.private')}
         </p>
         <p className={!personal ? 'active' : null} onClick={onClick}>
            {t('expenses.group')}
         </p>
      </div>
   );
}

export default Select;
