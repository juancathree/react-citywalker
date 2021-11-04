import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faMoneyCheckAlt,
   faMapMarkerAlt,
   faUserPlus,
   faEdit,
} from '@fortawesome/free-solid-svg-icons';
import './options.scss';

function Options({ id, city }) {
   const history = useHistory();
   const [t] = useTranslation('global');
   return (
      <div className="options">
         <div
            className="item"
            onClick={() => history.push(`/travels/${id}/expenses`)}
         >
            <FontAwesomeIcon
               icon={faMoneyCheckAlt}
               className="item__icon"
               size="2x"
            />
            <h2 className="item__text">{t('options.expenses')}</h2>
         </div>
         <div className="item" onClick={() => history.push(`/cities/${city}`)}>
            <FontAwesomeIcon
               icon={faMapMarkerAlt}
               className="item__icon"
               size="2x"
            />
            <h2 className="item__text">{t('options.places')}</h2>
         </div>
         <div
            className="item"
            onClick={() => history.push(`/travels/${id}/edit`)}
         >
            <FontAwesomeIcon icon={faEdit} className="item__icon" size="2x" />
            <h2 className="item__text">{t('options.edit')}</h2>
         </div>
         <div
            className="item"
            onClick={() => history.push(`/travels/${id}/invite`)}
         >
            <FontAwesomeIcon
               icon={faUserPlus}
               className="item__icon"
               size="2x"
            />
            <h2 className="item__text">{t('options.invite')}</h2>
         </div>
      </div>
   );
}

export default Options;
