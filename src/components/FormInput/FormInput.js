import { useField } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

function FormInput({ icon, placeholder, type, ...props }) {
   const [field, meta] = useField(props);

   return (
      <div className={meta.touched && meta.error ? 'input error' : 'input'}>
         <FontAwesomeIcon className="input__icon" icon={icon} />
         <input
            {...field}
            placeholder={placeholder}
            type={type}
            className="input__field"
         />
      </div>
   );
}

export default FormInput;
