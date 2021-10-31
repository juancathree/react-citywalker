import { useSelector } from 'react-redux';
import City from './City';
import './list.scss';

function List({ filter }) {
   const cities = useSelector((state) => state.cities.data);

   return (
      <div className="cities-list">
         {cities
            .filter((city) => city.startsWith(filter))
            .map((city) => (
               <City key={city}>{city}</City>
            ))}
      </div>
   );
}

export default List;
