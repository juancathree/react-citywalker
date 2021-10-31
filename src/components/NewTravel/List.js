import { useSelector } from 'react-redux';
import Place from './Place';
import './list.scss';

function List({ onClick }) {
   const cities = useSelector((state) => state.cities.data);
   return (
      <div className="newTravel-list">
         {cities.map((city) => (
            <Place key={city} name={city} onClick={onClick} />
         ))}
      </div>
   );
}

export default List;
