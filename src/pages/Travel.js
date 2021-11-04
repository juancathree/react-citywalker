import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Head from 'components/Travel/Head';
import Map from 'components/Travel/Map';
import getPlaces from 'services/getPlaces';
import Options from 'components/Travel/Options';

function Travel() {
   const { id } = useParams();
   const travels = useSelector((state) => state.travels.data);
   const travel = travels.find((travel) => travel['_id'] === id);
   const dispatch = useDispatch();
   const { i18n } = useTranslation('global');
   const lng = i18n.language;

   useEffect(() => {
      dispatch(getPlaces(lng, travel['city'].toLowerCase()));
   }, [dispatch, lng, travel]);

   return (
      <>
         <Head travel={travel} />
         <Map journey={travel['journey']} />
         <Options id={travel['_id']} city={travel['city']} />
      </>
   );
}

export default Travel;
