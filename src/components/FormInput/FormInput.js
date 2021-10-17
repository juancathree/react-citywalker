import { useField } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

function FormInput({ icon, placeholder, type, ...props }) {
   const [field, meta] = useField(props);
   console.log({ field, meta });
   return (
      <div className="input">
         <FontAwesomeIcon className="input__icon" icon={icon} />
         <input
            {...field}
            placeholder={placeholder}
            type={type}
            className="input__field"
         />
         {meta.touched && meta.error ? <div>{meta.error}</div> : null}
      </div>
   );
}

export default FormInput;
