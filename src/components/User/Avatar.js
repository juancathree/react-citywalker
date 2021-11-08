import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './avatar.scss';

function Avatar() {
   return <FontAwesomeIcon className="avatar" icon={faUserCircle} />;
}

export default Avatar;
