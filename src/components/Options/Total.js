import { useTranslation } from 'react-i18next';
import './total.scss';

function Total({ travel, personal }) {
   const [t] = useTranslation('global');

   const handleExpenses = () => {
      var user = travel['travelUsers'].find(
         (u) => u.email === window.localStorage.getItem('email')
      );
      return travel['Expenses'][user.nickname]
         .filter((e) => e.isPersonal)
         .reduce(function (prev, e) {
            return prev + e.amount;
         }, 0);
   };

   return (
      <div className="expenses__type-counts">
         {personal ? (
            <div className="item">
               <p className="expenses__user">{t('expenses.total')}</p>
               <p className="expenses__total">
                  {parseFloat(handleExpenses()).toFixed(2) + ' €'}
               </p>
            </div>
         ) : (
            <div className="item-group">
               {Object.keys(travel['Expenses']).map((nick) => {
                  var total = 0;
                  // eslint-disable-next-line
                  Object.keys(travel['Expenses']).map((nick2) => {
                     var expenses = travel['Expenses'][nick2].filter(
                        (e) => !e.isPersonal
                     );
                     if (nick2 === nick) {
                        total +=
                           expenses.reduce(function (prev, e) {
                              return prev + e.amount;
                           }, 0) / Object.keys(travel['Expenses']).length;
                     } else {
                        total -=
                           expenses.reduce(function (prev, e) {
                              return prev + e.amount;
                           }, 0) / Object.keys(travel['Expenses']).length;
                     }
                  });
                  return (
                     <div className="item">
                        <p className="expenses__user">{nick + ': '}</p>
                        <p className="expenses__total">
                           {parseFloat(total).toFixed(2) + ' €'}
                        </p>
                     </div>
                  );
               })}
            </div>
         )}
      </div>
   );
}

export default Total;
