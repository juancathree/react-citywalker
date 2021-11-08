import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faTimes,
   faEuroSign,
   faInfoCircle,
   faShareAltSquare,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

import './addexpense.scss';
import Button from 'components/Button/Button';

function AddExpense({ handleChange, close, handleAdd, values }) {
   const [t] = useTranslation('global');
   return (
      <div className="add">
         <div className="add__form">
            <FontAwesomeIcon
               className="add__form-close"
               icon={faTimes}
               onClick={close}
            />
            <p className="add__form-text">{t('expenses.addExpense')}</p>
            <div key="cantidad" className="add__form-input">
               <FontAwesomeIcon className="add__form-icon" icon={faEuroSign} />
               <input
                  id="amount"
                  className="add__form-field"
                  type="number"
                  onChange={(e) => handleChange('amount', e.target.value)}
                  placeholder={t('expenses.quantity')}
               />
            </div>
            <div key="description" className="add__form-input">
               <FontAwesomeIcon
                  className="add__form-icon"
                  icon={faInfoCircle}
               />
               <input
                  id="description"
                  className="add__form-field"
                  type="text"
                  placeholder={t('expenses.description')}
                  onChange={(e) => handleChange('description', e.target.value)}
               />
            </div>
            <div key="isPersonal" className="add__form-input">
               <FontAwesomeIcon
                  className="add__form-icon"
                  icon={faShareAltSquare}
               />
               <select
                  id="isPersonal"
                  className="add__form-field"
                  onChange={(e) =>
                     handleChange('isPersonal', e.target.value === 'true')
                  }
               >
                  <option value="true">{t('expenses.addprivate')}</option>
                  <option value="false">{t('expenses.addgroup')}</option>
               </select>
            </div>
            <Button
               onClick={handleAdd}
               disabled={
                  values.amount &&
                  values.description &&
                  values.isPersonal !== ''
                     ? false
                     : true
               }
            >
               {t('expenses.add')}
            </Button>
         </div>
      </div>
   );
}

export default AddExpense;
