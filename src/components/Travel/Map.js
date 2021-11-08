import Place from 'components/City/Place';
import { useSelector } from 'react-redux';
import {
   MapContainer,
   TileLayer,
   Marker,
   Popup,
   Polyline,
} from 'react-leaflet';
import { useTranslation } from 'react-i18next';
import './map.scss';

function Map({ journey }) {
   const places = useSelector((state) => state.places.data);
   const { i18n } = useTranslation('global');
   const [t] = useTranslation('global');
   const lng = i18n.language;

   return (
      <div className="slider">
         {places.length > 0 &&
            journey.map((j, i) => {
               // eslint-disable-next-line
               if (j.length === 0) return;
               var center = places.find((p) => p['name'][`${lng}`] === j[0]);
               var waypoints = places
                  .filter((p) => j.includes(p['name'][`${lng}`]))
                  .map((p) => [
                     p.location.coordinates[1],
                     p.location.coordinates[0],
                  ]);
               return (
                  <section>
                     <MapContainer
                        center={[
                           center['location']['coordinates'][1],
                           center['location']['coordinates'][0],
                        ]}
                        zoom={12}
                        scrollWheelZoom={false}
                        dragging={true}
                     >
                        <TileLayer
                           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                           url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                        />
                        {places
                           .filter((p) => j.includes(p['name'][`${lng}`]))
                           .map((p) => (
                              <Marker
                                 key={p['name'][`${lng}`]}
                                 position={[
                                    p.location.coordinates[1],
                                    p.location.coordinates[0],
                                 ]}
                              >
                                 <Popup>
                                    <Place
                                       key={p['name'][`${lng}`]}
                                       place={p}
                                    />
                                 </Popup>
                              </Marker>
                           ))}
                        <Polyline positions={waypoints} />
                     </MapContainer>
                     <p className="map-index">{t('map.day') + ' ' + (i + 1)}</p>
                  </section>
               );
            })}
      </div>
   );
}

export default Map;
