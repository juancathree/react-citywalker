import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './head.scss';

function Head({ text }) {
   const history = useHistory();
   return (
      <div className="options-head">
         <FontAwesomeIcon
            icon={faArrowLeft}
            className="options-head__back"
            size="2x"
            onClick={() => history.goBack()}
         />
         <h2 className="options-head__title">{text}</h2>
      </div>
   );
}

export default Head;
