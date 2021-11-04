import { useState } from 'react';
import './addexpense.scss';

function AddExpense({ values, onChange }) {
   return (
      <div className="add">
         <div className="add__form">
            <FontAwesomeIcon
               className="add__form-close"
               icon={faTimes}
               onClick={close}
            />
            <p className="add__form-text">{t('expenses.addExpense')}</p>
            <div key="cantidad" className="add__form-input">
               <FontAwesomeIcon className="add__form-icon" icon={faEuroSign} />
               <input
                  id="cantidad"
                  className="add__form-field"
                  type="number"
                  placeholder={t('expenses.quantity')}
                  onChange={onChange}
                  value={values.amount}
               />
            </div>
            <div key="description" className="add__form-input">
               <FontAwesomeIcon className="input__icon" icon={faInfoCircle} />
               <input
                  id="description"
                  className="input__field"
                  type="text"
                  placeholder="Descripcion"
                  onChange={(e) => {
                     setState({ ...state, description: e.target.value });
                  }}
                  value={state.description}
               />
            </div>
            <div className="input">
               <FontAwesomeIcon
                  className="input__icon"
                  icon={faShareAltSquare}
               />
               <select
                  className="input__field"
                  onChange={(e) => {
                     setState({ ...state, isPersonal: e.target.value });
                  }}
               >
                  <option value="true">Personal</option>
                  <option value="false">Grupal</option>
               </select>
            </div>
            <button className="btn" onClick={handleSubmit}>
               <p>Agregar</p>
            </button>
         </div>
      </div>
   );
}

export default AddExpense;
