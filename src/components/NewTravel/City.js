import { IKImage } from 'imagekitio-react';
import './city.scss';

function City({ name, onClick }) {
   return (
      <div id={name} key={name} className="newTravel-city" onClick={onClick}>
         <IKImage
            path={name.toLowerCase() + '.webp'}
            loading="lazy"
            className="newTravel-city__img"
         />
         <p className="newTravel-city__title">{name}</p>
      </div>
   );
}

export default City;
