import { useState } from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './delete.scss';
import RemoveTravel from './RemoveTravel';

function Delete({ handleClick }) {
   const [state, setState] = useState(false);
   return (
      <>
         <FontAwesomeIcon
            icon={faTrashAlt}
            className="delete"
            onClick={() => setState(!state)}
         />
         {state && (
            <RemoveTravel close={() => setState(!state)} remove={handleClick} />
         )}
      </>
   );
}

export default Delete;
