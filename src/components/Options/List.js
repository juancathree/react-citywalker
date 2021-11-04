import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import updateExpenses from 'services/updateExpenses';
import './list.scss';

function List({ travel, personal }) {
   const { id } = useParams();
   const { i18n } = useTranslation('global');
   const lng = i18n.language;
   const [t] = useTranslation('global');
   const dispatch = useDispatch();
   const [expense, setExpense] = useState({
      user: '',
      expense: '',
      travelID: id,
      exists: '',
   });
   const [remove, setRemove] = useState(false);
   const [add, setAdd] = useState(false);
   const user = travel['travelUsers'].find(
      (u) => u.email === window.localStorage.getItem('email')
   );

   const handleClick = (e, index) => {
      setRemove(true);
      setExpense({ ...expense, user: index, expense: e, exists: true });
   };

   const handleDelete = () => {
      if (expense.user !== user.nickname) {
         return;
      }
      dispatch(updateExpenses({ expense, lng }));
   };

   return (
      <>
         <div className="expenses-list">
            {personal ? (
               <>
                  {travel['Expenses'][user.nickname]
                     .filter((e) => e.isPersonal)
                     .map((e) => (
                        <div
                           className="expenses-list__private"
                           onClick={() => handleClick(e)}
                        >
                           <p className="amount">{e.amount + ' €'}</p>
                           <p className="description">{e.description}</p>
                        </div>
                     ))}
                  )
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
                                    onClick={() => handleClick(e, index)}
                                 >
                                    <p className="amount">{e.amount + ' €'}</p>
                                    <p className="description">
                                       {e.description}
                                    </p>
                                    <p className="user">{index}</p>
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
      </>
   );
}

export default List;
