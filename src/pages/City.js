import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import getPlaces from 'services/getPlaces';
import Head from 'components/City/Head';
import List from 'components/City/List';

function City() {
   const { id } = useParams();
   const dispatch = useDispatch();
   const { i18n } = useTranslation('global');

   useEffect(() => {
      const re = new RegExp(`(?<=citywalker-${id}=)[^;]*`);
      try {
         return document.cookie.match(re)[0];
      } catch {
         dispatch(getPlaces(i18n.language, id));
      }
   }, [dispatch, i18n, id]);

   return (
      <>
         <Head id={id} />
         <List />
      </>
   );
}

export default City;
