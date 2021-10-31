import { useField } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import './styles.scss';

function FormInput({ icon, placeholder, type, ...props }) {
   const [field, meta] = useField(props);
   const [t] = useTranslation('global');

   return (
      <>
         <div className={meta.touched && meta.error ? 'input error' : 'input'}>
            <FontAwesomeIcon role="icon" className="input__icon" icon={icon} />
            <input
               {...field}
               placeholder={placeholder}
               type={type}
               className="input__field"
            />
         </div>
         {meta.touched && meta.error ? (
            <div className="message__error">{t('auth.error' + field.name)}</div>
         ) : null}
      </>
   );
}

export default FormInput;
