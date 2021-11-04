import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IKImage } from 'imagekitio-react';
import './head.scss';

function Head({ travel }) {
   const history = useHistory();
   return (
      <div className="travel-head">
         <FontAwesomeIcon
            icon={faArrowLeft}
            className="travel-head__back"
            size="2x"
            onClick={() => history.goBack()}
         />
         <IKImage
            path={travel['city'].toLowerCase() + '.webp'}
            loading="lazy"
            className="travel-head__img"
         />
         <h2 className="travel-head__title">{travel['city'].toUpperCase()}</h2>
      </div>
   );
}

export default Head;
