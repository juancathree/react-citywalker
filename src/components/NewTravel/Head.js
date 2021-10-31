import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './head.scss';

function Head({ text, onClick }) {
   return (
      <div className="newTravel-head">
         <FontAwesomeIcon
            icon={faArrowLeft}
            className="newTravel-head__icon"
            size="2x"
            onClick={onClick}
         />
         <p className="newTravel-head__title">{text}</p>
      </div>
   );
}

export default Head;
