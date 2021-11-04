import { Link } from 'react-router-dom';
import { IKImage } from 'imagekitio-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import './travel.scss';

function Travel({ travel }) {
   return (
      <Link className="travel" to={'/travels/'.concat(travel['_id'])}>
         <IKImage
            path={travel['city'].toLowerCase() + '.webp'}
            loading="lazy"
            className="travel__img"
         />
         <h2 className="travel__title">{travel['city'].toUpperCase()}</h2>
         <div className="travel__date">
            <FontAwesomeIcon className="travel-icon" icon={faClock} size="2x" />
            <p className="travel-text">
               {new Date(travel['startDay']).toLocaleDateString()} -{' '}
               {new Date(travel['endDay']).toLocaleDateString()}
            </p>
         </div>
         <div className="travel__users">
            <FontAwesomeIcon className="travel-icon" icon={faUser} size="2x" />
            <p className="travel-text">{travel['travelUsers'].length}</p>
         </div>
      </Link>
   );
}

export default Travel;
