import { Link } from 'react-router-dom';
import { IKImage } from 'imagekitio-react';
import './city.scss';

function City({ children }) {
   return (
      <Link className="city" to={'/cities/'.concat(children.toLowerCase())}>
         <IKImage
            path={children.toLowerCase() + '.webp'}
            loading="lazy"
            className="city__img"
         />
         <h2 className="city__title">{children.toUpperCase()}</h2>
      </Link>
   );
}

export default City;
