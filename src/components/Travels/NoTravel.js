import empty from 'assets/empty.svg';
import { useTranslation } from 'react-i18next';
import './notravel.scss';

function NoTravel() {
   const [t] = useTranslation('global');
   return (
      <div className="notravel">
         <img src={empty} alt="empty" />
         <p>{t('noTravel.empty')}</p>
      </div>
   );
}

export default NoTravel;
