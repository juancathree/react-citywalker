import { useSelector } from 'react-redux';
import City from './City';
import './list.scss';

function CityList({ onClick }) {
   const cities = useSelector((state) => state.cities.data);
   return (
      <div className="newTravel-list">
         {cities.map((city) => (
            <City key={city} name={city} onClick={onClick} />
         ))}
      </div>
   );
}

export default CityList;
