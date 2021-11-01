import { IKImage } from 'imagekitio-react';
import './place.scss';

function Place({ id, name, onClick }) {
   return (
      <div id={name} key={name} className="newTravel-place" onClick={onClick}>
         <IKImage
            path={id + '.webp'}
            loading="lazy"
            className="newTravel-place__img"
         />
         <p className="newTravel-place__title">{name}</p>
      </div>
   );
}

export default Place;
