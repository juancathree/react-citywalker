import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import updateExpenses from 'services/updateExpenses';
import { toast } from 'react-toastify';
import './list.scss';
import AddExpense from './AddExpense';
import RemoveExpense from './RemoveExpense';

function List({ travel, personal }) {
   const { id } = useParams();
   const { i18n } = useTranslation('global');
   const lng = i18n.language;
   const [t] = useTranslation('global');
   const dispatch = useDispatch();
   const [expense, setExpense] = useState({
      user: '',
      amount: '',
      description: '',
      isPersonal: true,
      travelID: id,
      exists: false,
   });
   const [remove, setRemove] = useState(false);
   const [add, setAdd] = useState(false);
   const u = travel['travelUsers'].find(
      (u) => u.email === window.localStorage.getItem('email')
   );

   const handleClick = (e, nickname, isPersonal) => {
      setExpense({
         ...expense,
         user: nickname,
         amount: e.amount.toString(),
         description: e.description,
         isPersonal: isPersonal,
         exists: true,
      });
      setRemove(true);
   };

   const handleDelete = () => {
      if (expense.user !== u.nickname) {
         toast.error(t('expenses.otherOwner'), {
            autoClose: 2000,
         });
         return;
      }
      setRemove(!remove);
      dispatch(updateExpenses({ expense, lng }));
   };

   const handleAdd = () => {
      setAdd(!add);
      dispatch(updateExpenses({ expense, lng }));
   };

   const handleChange = (input, value) => {
      setExpense({
         ...expense,
         [input]: value,
      });
   };

   const closeAdd = () => {
      setAdd(!add);
   };

   const closeRemove = () => {
      setRemove(!remove);
   };

   return (
      <>
         <div className="expenses-list">
            {personal ? (
               <>
                  {travel['Expenses'][u.nickname]
                     .filter((e) => e.isPersonal)
                     .map((e) => (
                        <div className="expenses-list__private">
                           <p className="amount">{e.amount + ' €'}</p>
                           <p className="description">{e.description}</p>
                           <FontAwesomeIcon
                              className="remove"
                              icon={faTimes}
                              onClick={() => handleClick(e, u.nickname, true)}
                           />
                        </div>
                     ))}
               </>
            ) : (
               <>
                  {Object.keys(travel['Expenses']).map((index) => (
                     <>
                        {travel['Expenses'][index]
                           .filter((e) => !e.isPersonal)
                           .map((e) => (
                              <>
                                 <div
                                    className="expenses-list__group"
                                    id={index}
                                 >
                                    <p className="amount">{e.amount + ' €'}</p>
                                    <p className="description">
                                       {e.description}
                                    </p>
                                    {index === u.nickname && (
                                       <FontAwesomeIcon
                                          className="remove"
                                          icon={faTimes}
                                          onClick={() =>
                                             handleClick(e, u.nickname, false)
                                          }
                                       />
                                    )}
                                    {index !== u.nickname && (
                                       <p className="user">{index}</p>
                                    )}
                                 </div>
                              </>
                           ))}
                     </>
                  ))}
               </>
            )}
         </div>
         <button
            className={add || remove ? 'hide-add' : 'btn-add-expense'}
            onClick={() => setAdd(!add)}
         >
            <p>{t('expenses.addExpense')}</p>
         </button>
         {add ? (
            <AddExpense
               close={closeAdd}
               handleChange={handleChange}
               handleAdd={handleAdd}
               values={expense}
            />
         ) : null}
         {remove ? (
            <RemoveExpense close={closeRemove} remove={handleDelete} />
         ) : null}
      </>
   );
}

export default List;
