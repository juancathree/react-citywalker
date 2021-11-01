import { useTranslation } from 'react-i18next';
import Place from './Place';
import './list.scss';

function PlaceList({ onClick, places }) {
   const { i18n } = useTranslation('global');
   const lng = i18n.language.split('-')[0];

   return (
      <div className="newTravel-list">
         {places.map((place) => (
            <Place
               key={place['name'][`${lng}`]}
               name={place['name'][`${lng}`]}
               id={place['id']}
               onClick={onClick}
            />
         ))}
      </div>
   );
}

export default PlaceList;
