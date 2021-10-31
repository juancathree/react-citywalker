import { useSelector } from 'react-redux';
import './list.scss';
import Place from './Place';

function List() {
   const places = useSelector((state) => state.places.data);

   return (
      <div className="city-list">
         {places.map((place) => (
            <Place key={place['id']} place={place} />
         ))}
      </div>
   );
}

export default List;
