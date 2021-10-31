import { IKImage } from 'imagekitio-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './head.scss';

function Head({ id }) {
   const history = useHistory();
   const [t] = useTranslation('global');

   const handleClick = () => {
      window.localStorage.setItem('newCity', id);
      history.push('/newTravel');
   };

   return (
      <div className="city-head">
         <FontAwesomeIcon
            icon={faArrowLeft}
            className="city-head__back"
            size="2x"
            onClick={() => history.goBack()}
         />
         <IKImage
            path={id.toLowerCase() + '.webp'}
            loading="lazy"
            className="city-head__img"
         />
         <h2 className="city-head__title">{id.toUpperCase()}</h2>
         <div className="city-head__space"></div>
         <button className="city-head__add" onClick={handleClick}>
            {t('add.travel')}
         </button>
      </div>
   );
}

export default Head;
