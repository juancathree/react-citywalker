import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import List from 'components/Cities/List';
import Navbar from 'components/Navbar/Navbar';
import getCities from 'services/getCities';
import Search from 'components/Search/Search';

function Cities() {
   const [filter, setFilter] = useState('');
   const dispatch = useDispatch();
   const cities = useSelector((state) => state.cities.data);
   const { i18n } = useTranslation('global');

   useEffect(() => {
      if (cities.length === 0) {
         dispatch(getCities(i18n.language));
      }
   }, [dispatch, i18n, cities]);

   const changeFilter = (e) => {
      setFilter(
         e.currentTarget.value.charAt(0).toUpperCase() +
            e.currentTarget.value.slice(1)
      );
   };

   return (
      <>
         <Search onChange={changeFilter} />
         <List filter={filter} />
         <Navbar />
      </>
   );
}

export default Cities;
