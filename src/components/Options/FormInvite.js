import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button/Button';
import './forminvite.scss';

function FormInvite({ handleChange, handleSubmit }) {
   const [t] = useTranslation('global');
   return (
      <div className="form-invite">
         <p className="form-invite__head">{t('invite.head')}</p>
         <div key="description" className="form-invite__email">
            <FontAwesomeIcon className="form-invite__icon" icon={faEnvelope} />
            <input
               id="description"
               className="form-invite__field"
               type="email"
               placeholder={t('invite.email')}
               onChange={handleChange}
            />
         </div>
         <Button onClick={handleSubmit}>{t('invite.button')}</Button>
      </div>
   );
}

export default FormInvite;
