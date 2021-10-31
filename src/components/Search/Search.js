import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import './styles.scss';

function Search({ onChange }) {
   const [t] = useTranslation('global');

   return (
      <div className="search">
         <input
            placeholder={t('search.placeholder')}
            type="text"
            className="search__field"
            onChange={onChange}
         />
         <FontAwesomeIcon
            role="icon"
            className="search__icon"
            icon={faSearch}
         />
      </div>
   );
}

export default Search;
