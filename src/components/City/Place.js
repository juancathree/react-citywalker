import { useTranslation } from 'react-i18next';
import { IKImage } from 'imagekitio-react';
import './place.scss';

function Place({ place }) {
   const { i18n } = useTranslation('global');
   const lng = i18n.language.split('-')[0];

   return (
      <div key={place['name'][`${lng}`]} className="place">
         <IKImage
            path={place['id'] + '.webp'}
            loading="lazy"
            className="place__img"
         />
         <div className="place__info">
            <span className="place__name">{place['name'][`${lng}`]}</span>
            <span className="place__category">
               {place['category'][`${lng}`]}
            </span>
            <span className="place__description">
               {place['information'][`${lng}`]}
            </span>
         </div>
      </div>
   );
}

export default Place;
