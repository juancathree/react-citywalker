import './add.scss';

function Add({ text, onClick }) {
   return (
      <button className="add-btn" onClick={onClick}>
         {text}
      </button>
   );
}

export default Add;
