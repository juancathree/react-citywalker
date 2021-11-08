import './listuser.scss';

function ListUser({ travel }) {
   return (
      <div className="listuser">
         {travel['travelUsers'].map((u) => (
            <p key={u.nickname} className="listuser__user">
               {u.email}
            </p>
         ))}
      </div>
   );
}

export default ListUser;
