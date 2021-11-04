import { useSelector } from 'react-redux';
import Travel from './Travel';
import './list.scss';

function List() {
   const travels = useSelector((state) => state.travels.data);

   return (
      <div className="travel-list">
         {travels.map((travel) => (
            <Travel key={travel['_id']} travel={travel} />
         ))}
      </div>
   );
}

export default List;
