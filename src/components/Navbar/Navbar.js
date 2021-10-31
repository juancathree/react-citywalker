import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faUser,
   faGlobeAmericas,
   faSuitcase,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './styles.scss';

function Navbar() {
   const [t] = useTranslation('global');

   return (
      <nav id="menu" className="menu">
         <NavLink className="menu__item" to="/cities" activeClassName="active">
            <FontAwesomeIcon
               id="globe"
               className="inactive"
               icon={faGlobeAmericas}
               size="2x"
            />
            <p className="menu__item-name">{t('navbar.cities')}</p>
         </NavLink>
         <NavLink className="menu__item" to="/travels" activeClassName="active">
            <FontAwesomeIcon
               id="suitcase"
               className="inactive"
               icon={faSuitcase}
               size="2x"
            />
            <p className="menu__item-name">{t('navbar.travels')}</p>
         </NavLink>
         <NavLink className="menu__item" to="/user" activeClassName="active">
            <FontAwesomeIcon
               id="user"
               className="inactive"
               icon={faUser}
               size="2x"
            />
            <p className="menu__item-name">{t('navbar.user')}</p>
         </NavLink>
      </nav>
   );
}

export default Navbar;
