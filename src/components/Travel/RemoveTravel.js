import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

import 'components/Options/addexpense.scss';

function RemoveTravel({ remove, close }) {
   const [t] = useTranslation('global');
   return (
      <div className="add">
         <div className="add__form">
            <FontAwesomeIcon
               className="add__form-close"
               icon={faTimes}
               onClick={close}
            />
            <p className="add__form-text">{t('travel.removeTravel')}</p>
            <div className="btn-confirm">
               <button className="btn-confirm__cancel" onClick={close}>
                  {t('expenses.cancel')}
               </button>
               <button className="btn-confirm__remove" onClick={remove}>
                  {t('expenses.remove')}
               </button>
            </div>
         </div>
      </div>
   );
}

export default RemoveTravel;
